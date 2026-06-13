
"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Cpu, 
  CloudUpload, 
  Bell, 
  Hospital, 
  Truck, 
  ChevronRight,
  ShieldCheck,
  Smartphone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { ProgressTracker } from "@/components/ui/ProgressTracker";

export default function HowItWorksPage() {
  const dopplerImg = PlaceHolderImages.find(img => img.id === 'doppler-device');

  const steps = [
    {
      id: "1",
      label: "Doppler Recording",
      description: "Use the smart doppler device at home to record baby's heartbeat.",
      status: "complete" as const
    },
    {
      id: "2",
      label: "Secure Upload",
      description: "Data is instantly encrypted and uploaded to the HeartLink cloud.",
      status: "complete" as const
    },
    {
      id: "3",
      label: "AI Analysis",
      description: "Proprietary algorithms analyze waveforms for early distress signs.",
      status: "current" as const
    },
    {
      id: "4",
      label: "Care Coordination",
      description: "If risk detected, hospitals and health workers are alerted immediately.",
      status: "upcoming" as const
    }
  ];

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">How It <span className="text-primary italic">Works</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A seamless flow of technology and human care, ensuring no complication goes unnoticed.
        </p>
      </section>

      {/* Step Visualization */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/10 -translate-y-1/2 hidden lg:block" />
        <div className="container mx-auto px-4 grid lg:grid-cols-4 gap-12 relative z-10">
          {[
            { icon: Smartphone, title: "Doppler Input", color: "bg-blue-500" },
            { icon: CloudUpload, title: "Cloud Engine", color: "bg-purple-500" },
            { icon: Cpu, title: "AI Diagnosis", color: "bg-accent" },
            { icon: Bell, title: "Alert Signal", color: "bg-destructive" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className={`${item.color} w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-current/20 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <item.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">Standardizing data protocols for instant medical response.</p>
              {i < 3 && <ChevronRight className="w-8 h-8 text-muted-foreground/30 mt-6 hidden lg:block" />}
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <Activity className="text-primary" />
              Smart Doppler Integration
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our hardware-software bridge allows standard fetal dopplers to become smart monitoring stations. Every heartbeat is converted into high-fidelity digital data, removing the guesswork from home monitoring.
            </p>
            <ProgressTracker steps={steps} />
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-3xl">
              <Image 
                src={dopplerImg?.imageUrl || ""} 
                alt="Doppler" 
                width={800} 
                height={600} 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 heartbeat-wave opacity-30" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 z-20">
              <GlassCard className="border-accent">
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Device Status</p>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent animate-ping" />
                  <span className="font-bold">Syncing Data...</span>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                <GlassCard className="h-48 flex flex-col justify-center items-center text-center">
                   <ShieldCheck className="w-10 h-10 text-primary mb-2" />
                   <p className="font-bold">Encrypted</p>
                </GlassCard>
                <GlassCard className="h-48 flex flex-col justify-center items-center text-center mt-12">
                   <Hospital className="w-10 h-10 text-destructive mb-2" />
                   <p className="font-bold">Emergency</p>
                </GlassCard>
             </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8">Rapid Response Network</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Once an alert is triggered, our system identifies the nearest available ambulance and the most suitable hospital based on real-time bed capacity data.
            </p>
            <div className="space-y-6">
              {[
                { icon: Hospital, title: "Hospital Integration", desc: "Live ward capacity monitoring." },
                { icon: Truck, title: "Logistics Dispatch", desc: "Instant beacon for drug delivery." }
              ].map((item, i) => (
                <GlassCard key={i} className="flex gap-6 items-start">
                  <div className="bg-primary/10 p-4 rounded-2xl">
                    <item.icon className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-8">Ready to see it in action?</h2>
          <div className="flex justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-10">Start Monitoring</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 h-14 px-10">Request Demo</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
