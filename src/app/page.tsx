
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Wallet, 
  Truck, 
  ChevronRight, 
  ArrowRight,
  MapPin,
  Ambulance,
  Smartphone,
  CloudUpload,
  Cpu,
  Bell,
  Stethoscope,
  Box,
  Hospital
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-mother');
  const droneImage = PlaceHolderImages.find(img => img.id === 'medical-drone');
  const dopplerUsageImage = PlaceHolderImages.find(img => img.id === 'doppler-usage');

  const smartSteps = [
    { 
      icon: Smartphone, 
      title: "Digital Capture", 
      desc: "Hardware reads fetal vitals at home.", 
      color: "text-blue-500", 
      bg: "bg-blue-500/10",
      detail: "4.2MHz precision"
    },
    { 
      icon: CloudUpload, 
      title: "Secure Sync", 
      desc: "Encrypted data streams to the cloud.", 
      color: "text-purple-500", 
      bg: "bg-purple-500/10",
      detail: "256-bit AES"
    },
    { 
      icon: Cpu, 
      title: "Smart Analysis", 
      desc: "Waveforms evaluated in real-time.", 
      color: "text-accent", 
      bg: "bg-accent/10",
      detail: "Sub-second logic"
    },
    { 
      icon: Bell, 
      title: "Instant Alert", 
      desc: "Risk flags trigger responder signals.", 
      color: "text-destructive", 
      bg: "bg-destructive/10",
      detail: "Immediate SOS"
    },
    { 
      icon: Hospital, 
      title: "Hospital Link", 
      desc: "Direct coordination with ER teams.", 
      color: "text-primary", 
      bg: "bg-primary/10",
      detail: "Live dispatch"
    },
    { 
      icon: Box, 
      title: "Last Mile", 
      desc: "Drones or bikes deliver medicines.", 
      color: "text-orange-500", 
      bg: "bg-orange-500/10",
      detail: "Beacon logistics"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full -z-10 blur-[120px] opacity-40 animate-pulse-soft" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 rounded-r-full -z-10 blur-[100px] opacity-30" />
        
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            
            <h1 className="text-6xl md:text-8xl font-bold font-headline leading-[1.1]">
              Every <span className="text-primary italic">Heartbeat</span> Matters.
            </h1>
            <p className="text-2xl text-muted-foreground max-w-xl leading-relaxed">
              HeartLink bridges the gap between home monitoring and clinical response, connecting mothers to doctors and delivery networks instantly.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <Link href="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 h-16 px-10 text-xl rounded-2xl shadow-2xl shadow-primary/30">
                  Get Started
                  <ChevronRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button size="lg" variant="outline" className="h-16 px-10 text-xl rounded-2xl border-primary/20 hover:bg-primary/5">
                  Watch Demo
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-12 pt-8">
              {[
                { val: "25K+", label: "Mothers" },
                { val: "500+", label: "Hospitals" },
                { val: "100%", label: "Response" }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-4xl font-bold font-headline mb-1">{stat.val}</p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] animate-float">
              <Image 
                src={heroImage?.imageUrl || "https://chatgpt.com/backend-api/estuary/content?id=file_00000000749c72468c3d6ff2a8957de6&ts=494839&p=fs&cid=1&sig=2d33e64cfaea049555784c95196e0044348e662439e4489906c7406037180ec7&v=0/1200/800"} 
                alt="Mother health" 
                width={700} 
                height={900} 
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                data-ai-hint="maternity healthcare"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            {/* Floating Glass Element */}
            <div className="absolute -bottom-10 -left-10 z-20 w-72">
              <GlassCard className="p-5 flex items-center gap-4 border-accent/30">
                <div className="bg-accent/20 p-3 rounded-2xl">
                  <Activity className="text-accent w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-bold">Fetal Heart Rate</p>
                  <p className="text-xl font-bold text-accent">142 BPM</p>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">Stable • Home Sync</p>
                </div>
              </GlassCard>
            </div>
            <div className="absolute top-10 -right-10 z-20 w-56">
              <GlassCard className="p-5 border-primary/20">
                <div className="flex -space-x-3 mb-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-card bg-muted overflow-hidden">
                      <Image src={`https://www.aninews.in/news/world/asia/pakistan-drone-carrying-drugs-crashes-in-lahore20230708053226/${i+10}/40/40`} alt="user" width={40} height={40} />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-4 border-white dark:border-card bg-primary text-xs text-white flex items-center justify-center font-bold">+12</div>
                </div>
                <p className="text-xs font-bold leading-tight">Emergency workers active in your area.</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Better Interactive Smart Loop Section */}
      <section className="py-32 container mx-auto px-4">
        <div className="bg-muted/30 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 heartbeat-wave opacity-20 pointer-events-none" />
          
          <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">The Smart <span className="text-primary italic">Care Loop</span></h2>
            <p className="text-xl text-muted-foreground">From home monitor to hospital ward, our integrated system closes the gap in record time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {smartSteps.map((step, i) => (
              <GlassCard key={i} className="group hover:bg-primary transition-all duration-500 border-primary/10">
                <div className="flex items-start gap-6">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110 shadow-lg",
                    step.bg, step.color, "group-hover:text-white"
                  )}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-[10px] font-bold text-primary group-hover:text-white/60 uppercase tracking-widest">Step {i+1}</span>
                       <span className="text-[10px] font-bold opacity-60 group-hover:text-white/80">{step.detail}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white">{step.title}</h3>
                    <p className="text-muted-foreground group-hover:text-white/80 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-20 text-center relative z-10">
            <Link href="/how-it-works">
              <Button className="rounded-full px-12 h-16 text-lg font-bold shadow-2xl shadow-primary/20">
                See How It Scales
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* IoT Preview */}
      <section className="py-32 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-card rounded-[3rem] p-10 shadow-2xl border border-border/50 relative overflow-hidden group">
               <div className="animate-scan absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent h-1/2 pointer-events-none z-20" />
               
               <div className="relative h-64 w-full mb-8 rounded-3xl overflow-hidden shadow-inner">
                  <Image 
                    src={dopplerUsageImage?.imageUrl || "https://chatgpt.com/backend-api/estuary/content?id=file_00000000df6c71f4aa17aa88dbde7b69&ts=494839&p=fs&cid=1&sig=31ab58d31d9e99d6572dca9bffde842956f466a379621f0653453e0611af25e8&v=0/800/800"} 
                    alt="Doppler Usage" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint="fetal doppler"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-x-0 h-px top-1/2 bg-primary/40 heartbeat-wave opacity-50 z-10" />
                  <div className="absolute bottom-4 left-4 right-4">
                     <div className="flex justify-between items-end">
                        <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20">
                           <p className="text-[10px] font-bold uppercase text-primary mb-1">Live Signal</p>
                           <p className="text-xs font-mono font-bold">4.2MHz • ACTIVE</p>
                        </div>
                        <Activity className="text-primary w-8 h-8 animate-pulse" />
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-3 gap-6">
                 {[
                   { l: "Status", v: "Normal", c: "text-accent" },
                   { l: "BPM", v: "142", c: "text-foreground" },
                   { l: "Week", v: "28", c: "text-foreground" }
                 ].map((item, i) => (
                   <div key={i} className="text-center">
                     <p className="text-[10px] text-muted-foreground font-bold uppercase mb-1">{item.l}</p>
                     <p className={`text-xl font-bold ${item.c}`}>{item.v}</p>
                   </div>
                 ))}
               </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-5xl font-bold leading-tight">Smart IoT <br/><span className="text-primary">Medical Integration.</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Standard dopplers become smart devices with HeartLink. Record heartbeat waveforms at home and let our smart engine detect early warning signs.
            </p>
            <div className="grid gap-6">
              {[
                { i: ShieldCheck, t: "Military-grade Encryption", d: "Your medical data is for your eyes and your doctor's only." },
                { i: Zap, t: "Real-time Alerts", d: "Abnormalities trigger instant hospital and ambulance dispatch." }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="bg-primary/10 p-4 rounded-2xl">
                    <item.i className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.t}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section with Drone Visual */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-5xl font-bold mb-6">Built for the <span className="text-primary">Ecosystem</span></h2>
            <p className="text-xl text-muted-foreground">Connecting every stakeholder in the maternal journey.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold">Beacon Drug Delivery</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When critical medications are needed, our integrated logistics network springs into action. From smart bikes to autonomous drones, we ensure life-saving supplies reach you in record time.
              </p>
              <div className="grid gap-4">
                <div className="flex items-center gap-3 p-4 bg-background rounded-2xl shadow-sm border border-border/50">
                  <Zap className="text-primary w-5 h-5" />
                  <span className="font-bold">Real-time GPS Tracking</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background rounded-2xl shadow-sm border border-border/50">
                  <ShieldCheck className="text-accent w-5 h-5" />
                  <span className="font-bold">Cold-chain Management</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-card">
                <Image 
                  src={droneImage?.imageUrl || "https://chatgpt.com/backend-api/estuary/content?id=file_00000000df6c71f4aa17aa88dbde7b69&ts=494839&p=fs&cid=1&sig=31ab58d31d9e99d6572dca9bffde842956f466a379621f0653453e0611af25e8&v=0/800/600"} 
                  alt="Medical Delivery Drone" 
                  width={800} 
                  height={600} 
                  className="object-cover w-full h-full"
                  data-ai-hint="medical drone"
                />
              </div>
              <div className="absolute -bottom-6 -right-6">
                <GlassCard className="bg-primary text-white p-4 border-none">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider">In Flight: 4.2km Away</span>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="p-10 flex flex-col items-start gap-6 border-accent/20">
              <div className="bg-accent/10 p-4 rounded-2xl">
                <Wallet className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Health Wallet</h3>
              <p className="text-muted-foreground leading-relaxed">Powered by OPay. Instant funding for medicine, ambulances, and emergency ward fees.</p>
              <Button variant="ghost" className="p-0 text-accent font-bold hover:bg-transparent">Open Simulation <ArrowRight className="ml-2 w-4 h-4"/></Button>
            </GlassCard>

            <GlassCard className="p-10 flex flex-col items-start gap-6 border-primary/20">
              <div className="bg-primary/10 p-4 rounded-2xl">
                <Truck className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Logistics Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">Integrated beacon tracking. Get prenatal medicine delivered via courier or drone in hours.</p>
              <Button variant="ghost" className="p-0 text-primary font-bold hover:bg-transparent">Track Shipment <ArrowRight className="ml-2 w-4 h-4"/></Button>
            </GlassCard>

            <GlassCard className="p-10 flex flex-col items-start gap-6 border-destructive/20">
              <div className="bg-destructive/10 p-4 rounded-2xl">
                <Ambulance className="text-destructive w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Smart Dispatch</h3>
              <p className="text-muted-foreground leading-relaxed">Direct hospital coordination. We identify the nearest hospital with available NICU beds.</p>
              <Button variant="ghost" className="p-0 text-destructive font-bold hover:bg-transparent">View Networks <ArrowRight className="ml-2 w-4 h-4"/></Button>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-2">
                <Heart className="text-primary w-8 h-8 fill-primary" />
                <span className="text-3xl font-headline font-bold">HeartLink</span>
              </Link>
              <p className="text-muted-foreground leading-relaxed">Saving lives through integrated technology and compassionate coordination.</p>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-lg">Product</h5>
              <ul className="space-y-4 text-muted-foreground font-medium">
                <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
                <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
                <li><Link href="/register" className="hover:text-primary transition-colors">Get Started</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-lg">Company</h5>
              <ul className="space-y-4 text-muted-foreground font-medium">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/impact" className="hover:text-primary transition-colors">Our Impact</Link></li>
                <li><Link href="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-lg">Support</h5>
              <ul className="space-y-4 text-muted-foreground font-medium">
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Admin Portal</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
            <p>© 2024 HeartLink Maternal Care System. All rights reserved.</p>
            <div className="flex gap-8">
              <span>Prototype v2.0</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
