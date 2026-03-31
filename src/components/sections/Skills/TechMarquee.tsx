
import React from 'react';

interface TechIconProps {
  src: string;
  name: string;
}

const TechIcon = ({ src, name }: TechIconProps) => (
  <div className="flex flex-col items-center justify-center p-4 m-4 bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-2xl shadow-xl hover:scale-110 transition-transform duration-300 group">
    <img src={src} alt={name} className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
    <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-black/30 dark:text-white/30 group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors">{name}</span>
  </div>
);

const marqueeIcons = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "GraphQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
];

export const TechMarquee = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rotate-[-15deg] scale-110 opacity-40 hover:opacity-100 transition-opacity duration-700 pointer-events-none md:pointer-events-auto">
      <div className="flex flex-col gap-8 animate-marquee-diagonal">
        {/* Double the array for seamless loop */}
        {[...marqueeIcons, ...marqueeIcons, ...marqueeIcons].map((icon, idx) => (
          <div key={idx} className="flex gap-8 odd:translate-x-20 even:-translate-x-20">
            <TechIcon src={icon.src} name={icon.name} />
            <TechIcon src={marqueeIcons[(idx + 2) % marqueeIcons.length].src} name={marqueeIcons[(idx + 2) % marqueeIcons.length].name} />
            <TechIcon src={marqueeIcons[(idx + 1) % marqueeIcons.length].src} name={marqueeIcons[(idx + 1) % marqueeIcons.length].name} />
          </div>
        ))}
      </div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
    </div>
  );
};
