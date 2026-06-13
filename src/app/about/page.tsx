
"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  Heart, 
  Target, 
  Users2, 
  Cpu, 
  ShieldCheck,
  Zap
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6">Mission</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We are a group of technologists and clinicians dedicated to reducing maternal mortality through real-time data and coordinated response.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          <GlassCard className="p-10 space-y-6">
            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-primary">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To create a world where no mother or baby is lost due to delays in communication or access to care. We believe technology should bridge the gap between rural home care and urban clinical excellence.
            </p>
          </GlassCard>
          
          <GlassCard className="p-10 space-y-6 bg-primary text-white border-none">
            <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold">Our Promise</h3>
            <p className="opacity-90 leading-relaxed text-lg">
              Privacy-first, data-driven, and patient-centered. We ensure that every piece of medical data is handled with the highest encryption standards and is used only to improve health outcomes.
            </p>
          </GlassCard>
        </div>

        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-12">The HeartLink Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: "Edge Computing", desc: "Low-latency heartbeat analysis." },
              { icon: Zap, title: "Rapid Alert Flow", desc: "Sub-second notification broadcast." },
              { icon: Users2, title: "Human Centered", desc: "Designed with and for mothers." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <item.icon className="text-primary w-8 h-8" />
                </div>
                <h4 className="font-bold text-xl">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
