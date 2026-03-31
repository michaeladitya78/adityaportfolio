
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
    <div className={cn("space-y-3 mb-12", className)}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className={cn("text-gray-500 dark:text-gray-400 text-lg md:text-xl font-body max-w-2xl", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
