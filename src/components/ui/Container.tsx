import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Container({
  children,
  className,
  size = "md",
}: ContainerProps) {
  const sizeClasses = {
    sm: "px-4 sm:px-8 md:px-12",
    md: "px-6 sm:px-12 md:px-16 lg:px-20",
    lg: "px-8 sm:px-16 md:px-24 lg:px-32",
    xl: "px-12 sm:px-24 md:px-32 lg:px-40",
  };

  return (
    <div className={cn("mx-auto", sizeClasses[size], className)}>
      {children}
    </div>
  );
}
