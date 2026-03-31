
import { CalendarIcon, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EducationItemProps {
  education: {
    id: number;
    degree: string;
    institution: string;
    field: string;
    period: string;
    coursework?: string[];
  };
  index: number;
  isVisible: boolean;
}

export const EducationItem = ({ education, index, isVisible }: EducationItemProps) => {
  return (
    <Card
      key={education.id}
      className={`glass-card relative overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111116] transition-all duration-700 hover:border-[#64CEFB]/40 hover:shadow-[0_0_25px_rgba(100,206,251,0.1)] group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex flex-col md:flex-row relative z-10">
        <CardHeader className="pb-4 md:pb-8 md:w-5/12 border-b md:border-b-0 md:border-r border-gray-100 dark:border-white/10 p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-start gap-5 mb-4">
            <div className="h-14 w-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-500 hover:scale-110">
              <GraduationCap className="h-7 w-7 text-[#64CEFB]" />
            </div>
            <div>
              <CardTitle className="text-xl md:text-2xl font-bold font-display text-gray-900 dark:text-white leading-tight mb-2">{education.degree}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 font-body">
                <CalendarIcon className="h-4 w-4" />
                <span>{education.period}</span>
              </div>
            </div>
          </div>
          <div className="mt-2 pl-[76px]">
            <p className="font-bold text-gray-700 dark:text-white/80 font-body text-base mb-1">{education.institution}</p>
            <p className="text-gray-500 dark:text-white/40 font-body text-sm lowercase tracking-wide italic">{education.field}</p>
          </div>
        </CardHeader>
        <CardContent className="md:w-7/12 p-6 md:p-8 flex items-center">
          {education.coursework && (
            <div className="w-full">
              <p className="text-[10px] md:text-xs font-bold text-gray-400 dark:text-gray-500 mb-4 uppercase tracking-widest border-l-2 border-[#64CEFB] pl-3">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2.5">
                {education.coursework.map((course, i) => (
                  <span
                    key={i}
                    className="text-xs md:text-sm px-3.5 py-1.5 rounded-full bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-white/70 border border-gray-100 dark:border-white/10 font-body hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-[#64CEFB] dark:hover:text-[#64CEFB] hover:border-[#64CEFB]/30 transition-all cursor-default shadow-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </div>
      {/* Subtle bottom accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#64CEFB]/40 to-transparent"></div>
    </Card>
  );
};
