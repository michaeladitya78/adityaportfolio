
import { BookOpen } from "lucide-react";

interface LearningJourneyProps {
  isVisible: boolean;
}

export const LearningJourney = ({ isVisible }: LearningJourneyProps) => {
  return (
    <div className={`mt-16 glass-card p-6 border border-cursor-light-gray/30 hover:border-accent/30 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`} style={{ transitionDelay: '800ms' }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-cursor-darker border border-cursor-light-gray flex items-center justify-center">
          <BookOpen className="h-6 w-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold font-['SF_Pro_Display']">Learning Journey</h3>
      </div>
      
      <div className="relative h-4 bg-cursor-darker rounded-full overflow-hidden mb-4">
        <div className={`absolute left-0 top-0 h-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] rounded-full transition-all duration-1000 ${
          isVisible ? 'w-[60%]' : 'w-0'
        }`}></div>
      </div>
      
      <p className="text-muted-foreground font-['SF_Pro_Text']">
        I'm currently advancing my skills in Next.js and TypeScript while exploring machine learning fundamentals. My goal is to blend beautiful user interfaces with intelligent functionality to create impactful digital solutions that solve real-world problems.
      </p>
    </div>
  );
};
