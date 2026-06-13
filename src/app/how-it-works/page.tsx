"use client";

import React, { useState, useEffect } from "react";
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
  Smartphone,
  ChevronLeft,
  ArrowRight,
  Loader2,
  MapPin,
  Ambulance
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { ProgressTracker } from "@/components/ui/ProgressTracker";
import { cn } from "@/lib/utils";

export default function HowItWorksPage() {
  const dopplerImg = PlaceHolderImages.find(img => img.id === 'doppler-device');
  const [activeTab, setActiveTab] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    if (activeTab === 0) {
      const interval = setInterval(() => {
        setIsSyncing(prev => !prev);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  const steps = [
    {
      id: "1",
      label: "Smart Doppler Recording",
      description: "Hardware capture converts fetal heartbeats into high-fidelity digital waves.",
      status: activeTab >= 0 ? "complete" as const : "upcoming" as const
    },
    {
      id: "2",
      label: "Secure Cloud Stream",
      description: "Data is 256-bit encrypted and streamed to our secure smart analysis cloud.",
      status: activeTab >= 1 ? "complete" as const : "upcoming" as const
    },
    {
      id: "3",
      label: "Smart Analysis Engine",
      description: "Proprietary Smart algorithms evaluate 100+ points of waveform data.",
      status: activeTab >= 2 ? "current" as const : "upcoming" as const
    },
    {
      id: "4",
      label: "Responder Activation",
      description: "Automatic hospital routing and ambulance dispatch for high-risk flags.",
      status: activeTab >= 3 ? "current" as const : "upcoming" as const
    }
  ];

  const detailViews = [
    {
      title: "Input Layer",
      icon: Smartphone,
      content: "Using low-power 4.2MHz frequency, our smart doppler bridge converts analogue signals into quantized digital data blocks for perfect cloud fidelity.",
      stats: ["4.2MHz Freq", "99.9% Clarity", "Zero Latency"]
    },
    {
      title: "Analysis Layer",
      icon: Cpu,
      content: "Our Smart engine identifies bradycardia, tachycardia, and rhythm irregularities in real-time, assigning a risk score from 1-100.",
      stats: ["Smart Score", "Pattern Recognition", "Alert Triggers"]
    },
    {
      title: "Response Layer",
      icon: Hospital,
      content: "Once a threshold is crossed, the system initiates a network-wide SOS to the nearest hospital with active NICU capacity.",
      stats: ["Nearest Ward", "ETA Sync", "Payment Verified"]
    }
  ];

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold mb-6 border border-primary/20">
          <ShieldCheck className="w-3 h-3" />
          SYSTEM PROTOCOLS V2.0
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">How It <span className="text-primary italic">Works</span></h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A seamless flow of technology and human care, ensuring no complication goes unnoticed through our Smart maternal care loop.
        </p>
      </section>

      {/* Main Interactive Workflow */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Step Selection */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Activity className="text-primary w-6 h-6" />
              Care Flow Protocol
            </h3>
            <div className="space-y-4">
              {detailViews.map((view, i) => (
                <GlassCard 
                  key={i} 
                  className={cn(
                    "cursor-pointer transition-all border-l-4",
                    activeTab === i ? "border-l-primary bg-primary/5 shadow-lg scale-[1.02]" : "border-l-transparent opacity-60 grayscale hover:opacity-100"
                  )}
                  onClick={() => setActiveTab(i)}
                >
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      <view.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{view.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {view.content}
                      </p>
                      <div className="flex gap-4 mt-4">
                        {view.stats.map((s, idx) => (
                          <span key={idx} className="text-[10px] font-bold text-primary uppercase bg-primary/10 px-2 py-0.5 rounded-full">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Right: Interactive Visualizer */}
          <div className="lg:col-span-7 h-full sticky top-32">
            <GlassCard className="h-full min-h-[500px] flex flex-col p-12 relative overflow-hidden bg-foreground text-background border-none shadow-3xl">
              <div className="absolute inset-0 bg-primary/5 heartbeat-wave opacity-20 pointer-events-none" />
              
              {activeTab === 0 && (
                <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-3xl font-bold font-headline">Live Doppler Stream</h3>
                      <p className="opacity-60 text-sm">Quantizing FHR signal in District 4</p>
                    </div>
                    <div className="flex items-center gap-3">
                       {isSyncing ? (
                         <div className="bg-accent/20 px-4 py-1.5 rounded-full flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                           <span className="text-[10px] font-bold text-accent uppercase">SYNCING DATA</span>
                         </div>
                       ) : (
                         <div className="bg-white/10 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase">BUFFERING...</div>
                       )}
                    </div>
                  </div>
                  
                  <div className="h-64 rounded-3xl bg-black/40 border border-white/10 relative overflow-hidden flex items-center justify-center">
                    <div className="heartbeat-wave absolute inset-x-0 h-px top-1/2 opacity-50" />
                    <Activity className="w-12 h-12 text-primary/40 animate-pulse" />
                    <p className="absolute bottom-4 left-4 font-mono text-xs opacity-40">HL-PROTOCOL-V2: PACKET_SENT</p>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                      <p className="text-[10px] font-bold opacity-40 uppercase mb-1">Status</p>
                      <p className="text-accent font-bold">NORMAL</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                      <p className="text-[10px] font-bold opacity-40 uppercase mb-1">FHR</p>
                      <p className="text-2xl font-bold">142</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                      <p className="text-[10px] font-bold opacity-40 uppercase mb-1">Week</p>
                      <p className="text-2xl font-bold">28</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div>
                    <h3 className="text-3xl font-bold font-headline">Smart Logic Layer</h3>
                    <p className="opacity-60 text-sm">Waveform Analysis in progress...</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      { l: "Rhythm Regularity", v: "98.2%", icon: Activity },
                      { l: "Smart Risk Score", v: "Low (12/100)", icon: ShieldCheck },
                      { l: "Cloud Sync Integrity", v: "Verified", icon: CloudUpload }
                    ].map((item, idx) => (
                      <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <item.icon className="text-primary w-6 h-6" />
                          <span className="font-bold">{item.l}</span>
                        </div>
                        <span className="text-lg font-bold text-accent">{item.v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary/10 border border-primary/20 p-6 rounded-2xl text-center">
                    <p className="text-xs uppercase font-bold tracking-widest opacity-60 mb-2">System Verdict</p>
                    <p className="text-xl font-bold">CONTINUE HOME MONITORING</p>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div>
                    <h3 className="text-3xl font-bold font-headline">Network Activation</h3>
                    <p className="opacity-60 text-sm">Response logistics mapping...</p>
                  </div>

                  <div className="relative h-64 bg-muted/10 rounded-3xl border border-white/10 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <MapPin className="text-primary w-12 h-12 animate-bounce" />
                        <div className="absolute top-0 left-0 w-12 h-12 bg-primary/20 rounded-full animate-ping" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-background text-foreground px-4 py-2 rounded-full text-[10px] font-bold flex items-center gap-2">
                      <Ambulance className="w-3 h-3 text-primary" />
                      HL-DISPATCH-09 ACTIVE
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button className="flex-1 h-14 bg-primary text-white rounded-xl">View Network Map</Button>
                    <Button variant="outline" className="flex-1 h-14 border-white/20 hover:bg-white/10">Dispatch Beacon</Button>
                  </div>
                </div>
              )}
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Integrated Response Network</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Once an alert is triggered, our system identifies the nearest available ambulance and the most suitable hospital based on real-time bed capacity data.
            </p>
            <ProgressTracker steps={steps} />
          </div>
          <div className="relative">
             <div className="grid grid-cols-2 gap-6">
                <GlassCard className="h-64 flex flex-col justify-center items-center text-center p-8 group hover:bg-primary hover:text-white transition-all duration-500">
                   <ShieldCheck className="w-12 h-12 text-primary mb-4 group-hover:text-white" />
                   <h4 className="text-xl font-bold mb-2">Encrypted</h4>
                   <p className="text-xs opacity-60">End-to-end medical standard security.</p>
                </GlassCard>
                <GlassCard className="h-64 flex flex-col justify-center items-center text-center p-8 mt-12 group hover:bg-destructive hover:text-white transition-all duration-500 border-destructive/20">
                   <Hospital className="w-12 h-12 text-destructive mb-4 group-hover:text-white" />
                   <h4 className="text-xl font-bold mb-2">Immediate</h4>
                   <p className="text-xs opacity-60">Sub-minute responder activation.</p>
                </GlassCard>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-8">Ready to see it in action?</h2>
          <div className="flex justify-center flex-col sm:flex-row gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90 h-16 px-10 text-lg w-full sm:w-auto">Start Monitoring</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 h-16 px-10 text-lg w-full sm:w-auto">Request Demo</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
