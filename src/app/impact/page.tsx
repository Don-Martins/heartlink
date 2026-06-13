
"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  TrendingUp, 
  Users, 
  Heart, 
  Globe, 
  ShieldCheck,
  Star
} from "lucide-react";
import {
  ChartContainer,
  type ChartConfig
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", saves: 120 },
  { month: "Feb", saves: 180 },
  { month: "Mar", saves: 240 },
  { month: "Apr", saves: 310 },
  { month: "May", saves: 420 },
  { month: "Jun", saves: 580 },
];

const chartConfig = {
  saves: {
    label: "Emergencies Handled",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function ImpactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-muted/20">
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6">Real World <span className="text-primary italic">Impact</span></h1>
          <p className="text-xl text-muted-foreground">
            Beyond the technology, we are measured by the lives we save and the health systems we strengthen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Users, val: "25,000+", label: "Mothers Monitored" },
            { icon: TrendingUp, val: "100%", label: "Response Rate" },
            { icon: Globe, val: "15+", label: "Cities Covered" }
          ].map((stat, i) => (
            <GlassCard key={i} className="text-center py-12">
              <div className="bg-primary/10 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 text-primary">
                <stat.icon className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold mb-2">{stat.val}</h2>
              <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">{stat.label}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          <GlassCard className="p-10">
            <h3 className="text-2xl font-bold mb-8">Emergency Response Growth</h3>
            <div className="h-[300px]">
              {mounted ? (
                <ChartContainer config={chartConfig}>
                  <BarChart data={data}>
                    <CartesianGrid vertical={false} opacity={0.1} />
                    <XAxis dataKey="month" hide />
                    <YAxis hide />
                    <Bar dataKey="saves" fill="var(--color-saves)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              ) : (
                <div className="h-full w-full bg-muted/20 animate-pulse rounded-xl" />
              )}
            </div>
          </GlassCard>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold">The Amaka Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "When I went into labor at 3 AM in a suburban area, the nearest hospital didn't have an incubator. HeartLink's system identified St. Paul's (15km away) had a slot and rerouted the ambulance in real-time. My baby is here today because of that coordinate care."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-muted" />
              <div>
                <p className="font-bold">Amaka Okoro</p>
                <div className="flex text-yellow-500">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-12">Global Alignment</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "SDG 3: Good Health",
              "SDG 9: Innovation",
              "SDG 10: Reduced Inequality",
              "SDG 17: Partnerships"
            ].map((text, i) => (
              <div key={i} className="p-6 bg-white/50 dark:bg-black/20 rounded-2xl border border-dashed border-primary/30 flex items-center justify-center font-bold text-sm">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
