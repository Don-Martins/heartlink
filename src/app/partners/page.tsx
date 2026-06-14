
"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Truck, 
  Hospital, 
  Globe, 
  ShieldPlus,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const partnerTypes = [
  {
    title: "Healthcare Networks",
    icon: Hospital,
    list: ["St. Jude Medical", "Grace Memorial", "Unity Healthcare", "City General"]
  },
  {
    title: "Logistics & Tech",
    icon: Truck,
    list: ["OPay", "Google Health", "Beacon Logistics", "RapidDeliver"]
  },
  {
    title: "Government & NGOs",
    icon: Globe,
    list: [" Tony Elumelu Foundation", "Tesla Foundation", "Africa Health Organisation", "Amref Health Africa", "Min of Health", "WHO", "UNICEF"]
  }
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6">Our <span className="text-primary italic">Partner</span> Ecosystem</h1>
          <p className="text-xl text-muted-foreground">
            HeartLink is more than an app; it's a network of the world's leading healthcare and technology providers.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {partnerTypes.map((group, i) => (
            <div key={i} className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary/10 p-3 rounded-2xl">
                  <group.icon className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{group.title}</h3>
              </div>
              {group.list.map((name, j) => (
                <GlassCard key={j} className="flex justify-between items-center group cursor-pointer hover:border-primary">
                  <span className="font-bold">{name}</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
                </GlassCard>
              ))}
            </div>
          ))}
        </div>

        <GlassCard className="bg-foreground text-background p-12 text-center rounded-[3rem]">
          <h2 className="text-4xl font-bold mb-6">Join the Network</h2>
          <p className="text-xl opacity-70 mb-10 max-w-2xl mx-auto">
            Whether you're a hospital, a logistics provider, or a government body, we want to work with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary h-14 px-10">Hospital Integration</Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 h-14 px-10">Partnership Inquiry</Button>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
