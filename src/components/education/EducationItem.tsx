
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
      className={`glass-card border-cursor-light-gray hover:border-accent/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-8 w-8 rounded-full bg-cursor-darker border border-cursor-light-gray flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-accent" />
          </div>
          <CardTitle className="text-lg font-['SF_Pro_Display']">{education.degree}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="font-medium font-['SF_Pro_Text']">{education.institution}</p>
            <p className="text-muted-foreground font-['SF_Pro_Text']">{education.field}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-['SF_Pro_Text'] mt-1">
              <CalendarIcon className="h-4 w-4" />
              <span>{education.period}</span>
            </div>
          </div>

          {education.coursework && (
            <div className="pt-2">
              <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded bg-accent/10 text-accent/90 border border-accent/20"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
