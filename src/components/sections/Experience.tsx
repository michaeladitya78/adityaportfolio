
import { SectionHeading } from "@/components/ui/section-heading";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import { experiences, collegeClubs } from "../experience/ExperienceData";
import { ExperienceItem } from "../experience/ExperienceItem";
import { CollegeClubItem } from "../experience/CollegeClubItem";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const clubsTimelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeClubIndex, setActiveClubIndex] = useState(-1);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Set up intersection observers for each timeline item to trigger path animation
  useEffect(() => {
    if (!timelineRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '-1');
          setActiveIndex(index);

          // Add glow to the path dot
          const pathDot = entry.target.querySelector('.path-dot') as HTMLElement;
          if (pathDot) {
            pathDot.classList.add('animate-path-glow');
          }
        }
      });
    }, { threshold: 0.5 });

    const items = timelineRef.current.querySelectorAll('.timeline-item');
    items.forEach(item => observer.observe(item));

    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, [isVisible]);

  // Set up intersection observers for each club timeline item
  useEffect(() => {
    if (!clubsTimelineRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '-1');
          setActiveClubIndex(index);

          // Add glow to the path dot
          const pathDot = entry.target.querySelector('.path-dot') as HTMLElement;
          if (pathDot) {
            pathDot.classList.add('animate-path-glow');
          }
        }
      });
    }, { threshold: 0.5 });

    const items = clubsTimelineRef.current.querySelectorAll('.timeline-item');
    items.forEach(item => observer.observe(item));

    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, [isVisible]);

  return (
    <section id="experience" ref={ref} className="section-container py-24 relative overflow-hidden transition-colors duration-300">
      {/* Background decorations matching the new aesthetic */}
      <div className="absolute inset-0 opacity-5 dark:opacity-5 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full blur-[100px] opacity-20 dark:opacity-10 pointer-events-none" style={{ background: "#6366f1" }} />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full blur-[100px] opacity-20 dark:opacity-10 pointer-events-none" style={{ background: "#06b6d4" }} />

      <div className="max-w-4xl mx-auto relative z-10 transition-all duration-1000 text-gray-900 dark:text-white">
        <SectionHeading
          title="Professional Experience"
          subtitle="My journey creating content and building digital experiences"
        />

        <div className="relative mt-16" ref={timelineRef}>
          {/* Main timeline path */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-white/5"></div>

          {experiences.map((exp, index) => (
            <ExperienceItem
              key={exp.id}
              experience={exp}
              index={index}
              isVisible={isVisible}
              activeIndex={activeIndex}
            />
          ))}
        </div>

        {/* College Clubs and Responsibilities Section */}
        <div className="mt-24" id="college-clubs">
          <SectionHeading
            title="College Clubs & Responsibilities"
            subtitle="Extracurricular activities enhancing my skills and experience"
            className="mt-16"
          />

          <div className="relative mt-16" ref={clubsTimelineRef}>
            {/* Main timeline path */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-white/5"></div>

            {collegeClubs.map((club, index) => (
              <CollegeClubItem
                key={club.id}
                club={club}
                index={index}
                isVisible={isVisible}
                activeIndex={activeClubIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
