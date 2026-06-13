
"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Zap, 
  Wallet, 
  Truck, 
  ShieldCheck, 
  Smartphone, 
  Users, 
  TrendingUp,
  MapPin,
  Ambulance,
  PhoneCall
} from "lucide-react";
import Link from "next/link";

const featureGroups = [
  {
    title: "Monitoring & AI",
    features: [
      { icon: Heart, title: "Fetal Heartbeat Stream", desc: "High-fidelity digital recordings with AI analysis." },
      { icon: TrendingUp, title: "Risk Scoring", desc: "Real-time risk assessment (Low, Medium, High)." },
      { icon: Smartphone, title: "Mobile Connect", desc: "Access records and chat with doctors 24/7." }
    ]
  },
  {
    title: "Emergency & Coordination",
    features: [
      { icon: Zap, title: "Instant SOS", desc: "One-tap emergency broadcast to hospital networks." },
      { icon: Ambulance, title: "Ambulance Routing", desc: "Smart dispatch to nearest available responders." },
      { icon: MapPin, title: "Hospital Locator", desc: "Live ward capacity and distance tracking." }
    ]
  },
  {
    title: "Health Ecosystem",
    features: [
      { icon: Wallet, title: "OPay Integration", desc: "Instant funding for emergency care and meds." },
      { icon: Truck, title: "Drug Beacon System", desc: "Rapid medicine delivery via logistics network." },
      { icon: Users, title: "Care Circles", desc: "Connect family for health pooling and updates." }
    ]
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6">Advanced <span className="text-primary italic">Maternal</span> Capabilities</h1>
          <p className="text-xl text-muted-foreground">
            Explore the technology stack that makes HeartLink the most integrated maternal care system.
          </p>
        </div>

        {featureGroups.map((group, idx) => (
          <div key={idx} className="mb-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-primary/20 flex-1" />
              <h2 className="text-2xl font-bold text-primary px-6 uppercase tracking-widest text-sm">{group.title}</h2>
              <div className="h-px bg-primary/20 flex-1" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {group.features.map((feature, i) => (
                <GlassCard key={i} className="group hover:bg-primary hover:text-white transition-all duration-500">
                  <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                    <feature.icon className="text-primary w-7 h-7 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground group-hover:text-white/80 text-sm leading-relaxed mb-6">
                    {feature.desc}
                  </p>
                  <Button variant="ghost" className="p-0 group-hover:text-white font-bold text-primary">
                    Learn more <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </GlassCard>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Interactive Feature Focus */}
      <section className="bg-foreground text-background py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">IoT Doppler Simulation</h2>
            <p className="text-lg opacity-70 mb-10">
              Our Doppler interface isn't just a recording—it's a live data stream that identifies irregularities as they happen.
            </p>
            <div className="space-y-4">
              {[
                "Millisecond waveform analysis",
                "Automatic noise cancellation",
                "Cloud-synced historical data",
                "Doctor annotation support"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <ShieldCheck className="text-primary w-5 h-5" />
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card/5 p-8 rounded-[2rem] border border-white/10 relative overflow-hidden">
             <div className="animate-scan absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent h-1/2 pointer-events-none" />
             <div className="h-64 bg-black/40 rounded-2xl mb-6 flex items-center justify-center relative">
                <div className="heartbeat-wave absolute inset-x-0 h-px top-1/2 opacity-50" />
                <p className="text-xs uppercase tracking-[0.5em] text-primary/40">Real-time Stream</p>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-xl text-center">
                   <p className="text-[10px] uppercase opacity-40 font-bold mb-1">Status</p>
                   <p className="text-accent font-bold">NORMAL</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl text-center">
                   <p className="text-[10px] uppercase opacity-40 font-bold mb-1">FHR</p>
                   <p className="text-2xl font-bold">142</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4 text-center">
        <GlassCard className="max-w-4xl mx-auto py-16 bg-primary/5 border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Integrate Our API</h2>
          <p className="text-muted-foreground mb-8">Are you a hospital or logistics provider? Our open API allows you to plug into the HeartLink network.</p>
          <Button size="lg" className="rounded-full px-8">View Developer Docs</Button>
        </GlassCard>
      </section>
    </div>
  );
}
