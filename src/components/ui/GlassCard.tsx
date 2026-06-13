
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
