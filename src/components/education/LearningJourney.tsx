import { BookOpen } from "lucide-react";

interface LearningJourneyProps {
  isVisible: boolean;
}

export const LearningJourney = ({ isVisible }: LearningJourneyProps) => {
  return (
    <>
      <style>{`
        @keyframes shimmerProgressBar {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-shimmer-bar {
          animation: shimmerProgressBar 3s linear infinite;
        }
      `}</style>
      <div className={`mt-24 glass-card relative overflow-hidden group border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111116] p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-12 w-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <BookOpen className="h-6 w-6 text-[#64CEFB]" />
          </div>
          <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">Learning Journey</h3>
        </div>

        <div className="relative h-2.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden mb-8 shadow-inner">
          <div 
            className={`absolute left-0 top-0 h-full bg-gradient-to-r from-[#64CEFB] via-[#8B5CF6] to-[#64CEFB] bg-[length:200%_auto] rounded-full transition-all duration-[1500ms] animate-shimmer-bar ${isVisible ? 'w-[85%]' : 'w-0'}`}
          >
            {/* Glittery pattern overlay */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==")' }}></div>
            {/* Leading edge glow */}
            <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white/80 to-transparent blur-[2px]"></div>
          </div>
        </div>

        <p className="text-lg text-gray-600 dark:text-white/70 font-body leading-relaxed max-w-3xl">
          I'm continuously refining my skills at the intersection of <strong className="text-gray-900 dark:text-white hover:text-[#64CEFB] transition-colors">Product Management</strong>, <strong className="text-gray-900 dark:text-white hover:text-[#64CEFB] transition-colors">AI/ML</strong>, and <strong className="text-gray-900 dark:text-white hover:text-[#64CEFB] transition-colors">Full-Stack Engineering</strong>. Currently, I'm diving deeper into advanced <span className="font-semibold text-gray-800 dark:text-white/90">Next.js architectures</span>, distributed <span className="font-semibold text-gray-800 dark:text-white/90">Machine Learning models</span> with PyTorch, and exploring scalable real-world solutions. My ultimate goal is to build intelligent, globally impactful products that solve meaningful problems with a robust data-driven approach.
        </p>
        
        {/* Decorative background element */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute top-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 group-hover:-translate-x-10 transition-transform duration-1000"></div>
      </div>
    </>
  );
};
