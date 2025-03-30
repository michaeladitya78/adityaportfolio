
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-2 mb-10", className)}>
      <h2 className="text-3xl sm:text-4xl font-bold text-gradient">{title}</h2>
      {subtitle && (
        <p className={cn("text-muted-foreground text-lg", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
