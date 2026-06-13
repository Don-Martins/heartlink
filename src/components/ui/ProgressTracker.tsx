
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Step {
  id: string;
  label: string;
  description: string;
  status: "complete" | "current" | "upcoming";
}

interface ProgressTrackerProps {
  steps: Step[];
  className?: string;
}

export function ProgressTracker({ steps, className }: ProgressTrackerProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {steps.map((step, idx) => (
        <div key={step.id} className="relative flex gap-6">
          {idx !== steps.length - 1 && (
            <div className="absolute left-[1.125rem] top-10 h-[calc(100%-1.5rem)] w-0.5 bg-muted-foreground/20" />
          )}
          <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-background shadow-sm">
            {step.status === "complete" ? (
              <div className="flex h-full w-full items-center justify-center rounded-full bg-primary text-white">
                <Check className="h-5 w-5" />
              </div>
            ) : step.status === "current" ? (
              <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
            ) : (
              <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
            )}
          </div>
          <div className="flex flex-col pt-1">
            <h4 className={cn(
              "text-lg font-bold font-headline",
              step.status === "upcoming" ? "text-muted-foreground" : "text-foreground"
            )}>
              {step.label}
            </h4>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
