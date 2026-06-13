
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
  ArrowRight
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-mother');
  const dopplerImage = PlaceHolderImages.find(img => img.id === 'doppler-device');

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-l-full -z-10 blur-3xl opacity-60" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Maternal Monitoring
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-headline leading-tight">
              Giving Every <span className="text-primary italic">Mother</span> Peace of Mind.
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              HeartLink connects mothers, babies, and medical professionals through real-time heartbeat monitoring and rapid emergency coordination.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 h-14 px-8 text-lg">
                  Get Started
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/partners">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                  Join as Partner
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold font-headline">25K+</p>
                <p className="text-sm text-muted-foreground">Mothers Monitored</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold font-headline">500+</p>
                <p className="text-sm text-muted-foreground">Alerts Sent</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold font-headline">100%</p>
                <p className="text-sm text-muted-foreground">Response Rate</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl animate-float">
              <Image 
                src={heroImage?.imageUrl || ""} 
                alt="Mother health" 
                width={600} 
                height={800} 
                className="object-cover"
                data-ai-hint="maternity healthcare"
              />
            </div>
            {/* Floating Glass Element */}
            <div className="absolute -bottom-10 -left-10 z-20 w-64">
              <GlassCard className="p-4 flex items-center gap-4">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <Activity className="text-accent w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold">Fetal Heart Rate</p>
                  <p className="text-xs text-muted-foreground">140 BPM - Stable</p>
                </div>
              </GlassCard>
            </div>
            <div className="absolute top-10 -right-10 z-20 w-48">
              <GlassCard className="p-4">
                <div className="flex -space-x-3 mb-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-muted overflow-hidden">
                      <Image src={`https://picsum.photos/seed/${i}/32/32`} alt="user" width={32} height={32} />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-primary text-[10px] text-white flex items-center justify-center">+12</div>
                </div>
                <p className="text-xs font-medium">Healthcare workers nearby</p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl mb-6">Traditional Care is Failing Mothers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Many complications go unnoticed until it's too late. HeartLink bridges the gap.
          </p>
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: "Missed Signs", desc: "Subtle changes in heartbeat patterns often go ignored." },
            { icon: Activity, title: "Delayed Treatment", desc: "Manual detection takes too long for critical situations." },
            { icon: ShieldCheck, title: "Limited Access", desc: "Quality care is often far from rural or suburban areas." },
            { icon: Zap, title: "Emergency Chaos", desc: "Coordinating hospitals during a crisis is stressful and slow." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-background border border-border group hover:border-primary transition-all">
              <div className="bg-primary/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions / Interactive Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8">
          <GlassCard className="lg:col-span-2 overflow-hidden relative group p-0">
            <div className="p-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-headline font-bold">Smart Fetal Monitoring</h3>
                <p className="text-muted-foreground">Using advanced doppler technology to record and analyze baby heartbeats at home, syncing instantly with your medical records.</p>
                <Link href="/features" className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all">
                  Learn more about monitoring <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="w-full md:w-1/2 aspect-video bg-muted rounded-2xl overflow-hidden relative">
                 <div className="heartbeat-wave absolute inset-0 opacity-20" />
                 <Image src={dopplerImage?.imageUrl || ""} alt="Monitoring" width={400} height={250} className="object-cover w-full h-full" />
              </div>
            </div>
          </GlassCard>

          <GlassCard className="bg-primary text-white space-y-6">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-headline font-bold">24/7 Smart Alert System</h3>
            <p className="text-primary-foreground/80">When abnormalities are detected, the system automatically triggers a priority alert to the nearest healthcare team.</p>
            <div className="p-4 bg-white/10 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest font-bold opacity-60">Status</span>
                <span className="text-[10px] bg-accent text-accent-foreground px-2 py-0.5 rounded-full font-bold">LIVE</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm">Monitoring Patient HL-242</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="space-y-6">
            <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center">
              <Wallet className="text-accent w-6 h-6" />
            </div>
            <h3 className="text-2xl font-headline font-bold">Health Wallet Integration</h3>
            <p className="text-muted-foreground">Integrated with OPay for instant funding of emergency procedures, medicine, and ambulance services.</p>
            <Button variant="outline" className="w-full">Open Wallet Simulation</Button>
          </GlassCard>

          <GlassCard className="space-y-6">
            <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
              <Truck className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-2xl font-headline font-bold">Medicine Delivery</h3>
            <p className="text-muted-foreground">Request essential prenatal medication and have them delivered to your doorstep within hours.</p>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
               <div className="w-[65%] h-full bg-primary" />
            </div>
            <p className="text-[10px] text-muted-foreground text-center">Rider is 10 mins away</p>
          </GlassCard>

          <GlassCard className="space-y-6">
            <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center">
              <ShieldCheck className="text-accent w-6 h-6" />
            </div>
            <h3 className="text-2xl font-headline font-bold">Coordination Center</h3>
            <p className="text-muted-foreground">Real-time status updates between mothers, healthcare workers, and hospitals during emergencies.</p>
            <Button variant="ghost" className="w-full">View Network</Button>
          </GlassCard>
        </div>
      </section>

      {/* How it Works - Timeline */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline mb-4">The HeartLink Journey</h2>
            <p className="text-muted-foreground">Simple steps that save lives.</p>
          </div>
          <div className="space-y-12">
            {[
              { step: "Step 1", title: "Mother Uses Doppler", desc: "Easy to use at home recording device." },
              { step: "Step 2", title: "Heartbeat Recorded", desc: "Securely uploaded to the HeartLink cloud." },
              { step: "Step 3", title: "Abnormality Detection", desc: "Sophisticated algorithms flag potential risks." },
              { step: "Step 4", title: "Healthcare Alert", desc: "Instant notification to assigned worker." },
              { step: "Step 5", title: "Care Activated", desc: "Rapid response and emergency hospitalization." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  {idx < 4 && <div className="w-1 h-20 bg-primary/20 mt-2" />}
                </div>
                <div className="pt-2">
                  <span className="text-primary font-bold text-sm uppercase tracking-widest">{item.step}</span>
                  <h4 className="text-2xl font-headline font-bold mt-1 mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-[3rem] bg-foreground text-background overflow-hidden p-12 md:p-24 text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-primary/10 -z-10" />
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8">Ready to transform maternal care?</h2>
            <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto">Join thousands of mothers and healthcare professionals building a safer future for every pregnancy.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 h-16 px-10 text-xl">Get Started Now</Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 h-16 px-10 text-xl">Contact Support</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="text-primary w-8 h-8 fill-primary" />
              <span className="text-2xl font-headline font-bold">HeartLink</span>
            </Link>
            <p className="text-muted-foreground text-sm">Empowering mothers and healthcare workers with technology that cares.</p>
          </div>
          <div>
            <h5 className="font-bold mb-6">Platform</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How it works</Link></li>
              <li><Link href="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">Connect</h5>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all"><Plus /></div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all"><Plus /></div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-all"><Plus /></div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground text-center md:text-left">
          <p>© 2024 HeartLink Maternal Care System. All rights reserved.</p>
          <div className="flex gap-8 justify-center">
            <span>Prototype Version 1.0</span>
            <Link href="/login" className="hover:text-primary">Admin Access</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
