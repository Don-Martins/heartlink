
"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  Loader2, 
  Stethoscope, 
  HeartPulse,
  ChevronLeft
} from "lucide-react";
import { analyzeSymptoms, type SymptomAnalyzerOutput } from "@/ai/flows/symptom-analyzer";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function HealthAnalysisPage() {
  const [symptoms, setSymptoms] = useState("");
  const [duration, setDuration] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<SymptomAnalyzerOutput | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    try {
      const output = await analyzeSymptoms({
        symptoms: symptoms.split(",").map(s => s.trim()),
        duration: duration
      });
      setResult(output);
    } catch (error) {
      console.error("Analysis failed", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getEmergencyColor = (level: string) => {
    switch (level) {
      case 'Low': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'High': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Critical': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
      <div className="pt-24 container mx-auto px-4 max-w-4xl">
        <Link href="/mother/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Dashboard
        </Link>
        
        <div className="mb-10">
          <h1 className="text-4xl font-headline font-bold mb-3">Symptom Assessment</h1>
          <p className="text-muted-foreground">Describe what you're feeling for an automated health check simulation.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <GlassCard className="sticky top-28">
              <form onSubmit={handleAnalyze} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="symptoms">Symptoms (comma separated)</Label>
                  <Input 
                    id="symptoms" 
                    placeholder="e.g. Headache, Nausea, Dizziness" 
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">How long has this been occurring?</Label>
                  <Input 
                    id="duration" 
                    placeholder="e.g. 3 hours, 2 days" 
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Additional Details (Optional)</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Any other details about how you're feeling..."
                    rows={4}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary h-12 text-lg" 
                  disabled={isAnalyzing || !symptoms || !duration}
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <HeartPulse className="w-5 h-5 mr-2" />
                      Analyze Symptoms
                    </>
                  )}
                </Button>
                <p className="text-[10px] text-muted-foreground text-center">
                  * Prototype only. Always consult a real doctor for medical concerns.
                </p>
              </form>
            </GlassCard>
          </div>

          <div className="md:col-span-3">
            {!result && !isAnalyzing && (
              <div className="h-full flex flex-col items-center justify-center p-12 text-center bg-white/40 dark:bg-black/20 rounded-3xl border border-dashed border-muted-foreground/30">
                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                  <Stethoscope className="w-10 h-10 text-primary/40" />
                </div>
                <h3 className="text-xl font-bold mb-2">No Analysis Yet</h3>
                <p className="text-muted-foreground">Fill out the form to generate a simulated health assessment report.</p>
              </div>
            )}

            {isAnalyzing && (
              <div className="space-y-6 animate-pulse">
                <div className="h-48 bg-muted rounded-3xl" />
                <div className="h-32 bg-muted rounded-3xl" />
                <div className="h-32 bg-muted rounded-3xl" />
              </div>
            )}

            {result && !isAnalyzing && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <GlassCard className="border-l-4 border-l-primary">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Activity className="text-primary w-5 h-5" />
                      Analysis Summary
                    </h3>
                    <Badge className={getEmergencyColor(result.emergencyLevel)}>
                      {result.emergencyLevel} Priority
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {result.analysisResult}
                  </p>
                </GlassCard>

                <div className="grid sm:grid-cols-2 gap-4">
                  <GlassCard className="bg-accent/5 border-none">
                    <h4 className="font-bold flex items-center gap-2 mb-4">
                      <CheckCircle2 className="text-accent w-4 h-4" />
                      Suggested Actions
                    </h4>
                    <ul className="space-y-2">
                      {result.suggestedActions.map((action, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>

                  <GlassCard className="bg-destructive/5 border-none">
                    <h4 className="font-bold flex items-center gap-2 mb-4">
                      <AlertTriangle className="text-destructive w-4 h-4" />
                      Warnings
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      If your symptoms worsen or you feel severe pain, contact emergency services immediately or go to the nearest hospital.
                    </p>
                  </GlassCard>
                </div>

                <GlassCard className="bg-primary text-white">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-2xl">
                      <HeartPulse className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-bold">Next Recommended Step</h4>
                      <p className="text-sm opacity-90">Schedule a routine checkup with your assigned healthcare worker.</p>
                    </div>
                    <Button variant="outline" className="ml-auto bg-transparent border-white text-white hover:bg-white hover:text-primary">
                      Contact Center
                    </Button>
                  </div>
                </GlassCard>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
