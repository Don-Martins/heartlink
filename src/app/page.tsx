
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
  Star,
  Plus,
  ArrowRight,
  TrendingUp,
  MapPin,
  Ambulance,
  PhoneCall,
  Smartphone
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-mother');
  const droneImage = PlaceHolderImages.find(img => img.id === 'medical-drone');

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full -z-10 blur-[120px] opacity-40 animate-pulse-soft" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 rounded-r-full -z-10 blur-[100px] opacity-30" />
        
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-primary/10 text-primary rounded-full font-bold text-sm border border-primary/20 shadow-inner">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              AI-POWERED MATERNAL MONITORING
            </div>
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
                src={heroImage?.imageUrl || ""} 
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
                      <Image src={`https://picsum.photos/seed/${i+10}/40/40`} alt="user" width={40} height={40} />
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

      {/* IoT Preview */}
      <section className="py-32 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-card rounded-[3rem] p-10 shadow-2xl border border-border/50 relative overflow-hidden">
               <div className="animate-scan absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent h-1/2 pointer-events-none" />
               <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                 <Smartphone className="text-primary w-6 h-6" />
                 Live Monitor Feed
               </h3>
               <div className="h-48 bg-black/5 dark:bg-black/20 rounded-3xl mb-8 flex items-center justify-center relative">
                 <div className="heartbeat-wave absolute inset-x-0 h-px top-1/2 opacity-30" />
                 <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary/40">Data Stream Active</p>
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
            <h2 className="text-5xl font-bold leading-tight">IoT Doppler <br/><span className="text-primary">Live Integration.</span></h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Standard dopplers become smart devices with HeartLink. Record heartbeat waveforms at home and let our AI engine detect early warning signs.
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
                  src={droneImage?.imageUrl || ""} 
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
              <div className="flex gap-4">
                <Plus className="w-5 h-5 cursor-pointer hover:text-primary" />
                <Plus className="w-5 h-5 cursor-pointer hover:text-primary" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
