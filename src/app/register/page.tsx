
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, User, ShieldPlus, Hospital, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<string | null>(null);

  const roles = [
    { id: "mother", title: "Mother", desc: "For pregnancy monitoring and care.", icon: User },
    { id: "worker", title: "Healthcare Worker", desc: "For managing patient care.", icon: ShieldPlus },
    { id: "hospital", title: "Hospital", desc: "For coordinating emergencies.", icon: Hospital },
  ];

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-center p-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 heartbeat-wave opacity-50" />
        <div className="relative z-10 space-y-6">
          <Link href="/" className="flex items-center gap-2 mb-12">
            <Heart className="w-10 h-10 fill-white" />
            <span className="text-3xl font-headline font-bold">HeartLink</span>
          </Link>
          <h1 className="text-6xl font-headline font-bold leading-tight">Join the network of care.</h1>
          <p className="text-xl opacity-80 max-w-md">Creating a safer environment for mothers and babies through technology and rapid coordination.</p>
        </div>
      </div>

      <div className="flex flex-col justify-center p-8 md:p-12 lg:p-20 bg-background">
        <div className="max-w-md w-full mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-headline font-bold">Create Account</h2>
            <p className="text-muted-foreground mt-2">Step {step} of 3</p>
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <Label>Choose your role</Label>
                <div className="grid gap-4">
                  {roles.map((r) => (
                    <div 
                      key={r.id}
                      onClick={() => setRole(r.id)}
                      className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-4 ${
                        role === r.id ? "border-primary bg-primary/5 shadow-md" : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className={`p-3 rounded-xl ${role === r.id ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                        <r.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold">{r.title}</p>
                        <p className="text-xs text-muted-foreground">{r.desc}</p>
                      </div>
                      {role === r.id && <CheckCircle2 className="text-primary w-5 h-5" />}
                    </div>
                  ))}
                </div>
              </div>
              <Button 
                className="w-full bg-primary h-12" 
                disabled={!role}
                onClick={() => setStep(2)}
              >
                Continue
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input id="fullname" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="jane@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 h-12" onClick={() => setStep(1)}>Back</Button>
                <Button className="flex-[2] bg-primary h-12" onClick={() => setStep(3)}>Next Step</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right-4 duration-300 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Registration Complete!</h3>
                <p className="text-muted-foreground mt-2">Welcome to HeartLink. Your account is being verified.</p>
              </div>
              <Link href="/mother/dashboard" className="block w-full">
                <Button className="w-full bg-primary h-12">Go to Dashboard</Button>
              </Link>
            </div>
          )}

          <p className="text-center text-sm text-muted-foreground">
            Already have an account? <Link href="/login" className="text-primary font-bold">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
