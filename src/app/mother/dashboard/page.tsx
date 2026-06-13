
"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Activity, 
  Wallet, 
  Calendar, 
  ChevronRight, 
  Bell, 
  Settings,
  Plus,
  AlertCircle,
  Truck,
  MapPin,
  Ambulance,
  Phone,
  CheckCircle2
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis, CartesianGrid } from "recharts";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const chartData = [
  { time: "0s", bpm: 142 },
  { time: "1s", bpm: 145 },
  { time: "2s", bpm: 140 },
  { time: "3s", bpm: 148 },
  { time: "4s", bpm: 144 },
  { time: "5s", bpm: 142 },
  { time: "6s", bpm: 146 },
  { time: "7s", bpm: 143 },
];

const chartConfig = {
  bpm: {
    label: "Heart Rate",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function MotherDashboard() {
  const [mounted, setMounted] = useState(false);
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-muted/20 pb-12">
      <Navbar />
      
      <div className="pt-24 container mx-auto px-4">
        {/* Active Emergency Banner */}
        {isEmergencyActive && (
          <GlassCard className="mb-8 bg-destructive text-white border-none animate-in slide-in-from-top-4 duration-500 overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/20 heartbeat-wave opacity-30" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-2xl animate-pulse">
                  <Ambulance className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Emergency Case Active</h2>
                  <p className="opacity-80">Ambulance HL-09 is 4 minutes away from your location.</p>
                </div>
              </div>
              <div className="flex gap-3">
                 <Button className="bg-white text-destructive hover:bg-white/90 font-bold px-8">Track Live</Button>
                 <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => setIsEmergencyActive(false)}>Dismiss</Button>
              </div>
            </div>
          </GlassCard>
        )}

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-headline font-bold">Good Morning, Sarah</h1>
            <p className="text-muted-foreground">You are currently in Week 28 of your pregnancy.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="rounded-full">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Settings className="w-5 h-5" />
            </Button>
            <Link href="/analysis">
              <Button className="bg-primary hover:bg-primary/90 rounded-full px-6">
                <Plus className="w-4 h-4 mr-2" />
                New Reading
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            <GlassCard>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold font-headline">Fetal Heartbeat Stream</h3>
                  <p className="text-sm text-muted-foreground">Real-time IoT Doppler Data</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">Connected</span>
                </div>
              </div>
              <div className="h-[250px] w-full">
                {mounted ? (
                  <ChartContainer config={chartConfig}>
                    <LineChart data={chartData}>
                      <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
                      <XAxis dataKey="time" hide />
                      <YAxis domain={['dataMin - 10', 'dataMax + 10']} hide />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line 
                        type="monotone" 
                        dataKey="bpm" 
                        stroke="var(--color-bpm)" 
                        strokeWidth={3} 
                        dot={{ fill: "var(--color-bpm)", strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, strokeWidth: 0 }}
                      />
                    </LineChart>
                  </ChartContainer>
                ) : (
                  <div className="h-full w-full bg-muted/20 animate-pulse rounded-xl" />
                )}
              </div>
              <div className="mt-6 flex justify-between items-center text-sm">
                <div className="flex gap-8">
                   <div className="text-center">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Status</p>
                      <p className="font-bold text-accent">STABLE</p>
                   </div>
                   <div className="text-center">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">AVG BPM</p>
                      <p className="font-bold">143</p>
                   </div>
                </div>
                <Link href="#" className="text-primary font-bold flex items-center gap-1">
                  Full History <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>

            <div className="grid md:grid-cols-2 gap-6">
               <GlassCard className="space-y-4">
                  <div className="flex items-center justify-between">
                     <h4 className="font-bold">Coordination Status</h4>
                     <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div className="space-y-4">
                     {[
                        { label: "Hospital Assigned", status: "complete" },
                        { label: "Payment Verified", status: "complete" },
                        { label: "Ambulance Dispatch", status: "active" },
                        { label: "Doctor Review", status: "pending" }
                     ].map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                           <div className={`w-2 h-2 rounded-full ${step.status === 'complete' ? 'bg-primary' : step.status === 'active' ? 'bg-accent animate-pulse' : 'bg-muted'}`} />
                           <span className={`text-xs ${step.status === 'pending' ? 'text-muted-foreground' : 'font-bold'}`}>{step.label}</span>
                        </div>
                     ))}
                  </div>
               </GlassCard>

               <GlassCard className="bg-primary text-white border-none overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                  <h4 className="font-bold">OPay Wallet</h4>
                  <div className="space-y-1 mb-8">
                     <p className="text-xs opacity-70 uppercase font-bold">Balance</p>
                     <p className="text-4xl font-bold font-headline">₦32,500</p>
                  </div>
                  <div className="flex gap-2">
                     <Button className="flex-1 bg-white text-primary hover:bg-white/90 h-10">Top-up</Button>
                     <Button className="flex-1 bg-white/20 border-white/20 hover:bg-white/10 text-white h-10">History</Button>
                  </div>
               </GlassCard>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <GlassCard className="border-destructive/30 bg-destructive/5 group cursor-pointer hover:bg-destructive hover:text-white transition-all duration-500">
               <div className="flex items-center gap-3 text-destructive group-hover:text-white mb-4">
                  <AlertCircle className="w-6 h-6 animate-pulse" />
                  <h4 className="font-bold">SOS Emergency</h4>
               </div>
               <p className="text-xs text-muted-foreground group-hover:text-white/80 mb-6 leading-relaxed">
                  Trigger an immediate network-wide emergency alert to hospitals, ambulances, and your care circle.
               </p>
               <Button variant="destructive" className="w-full h-14 font-bold rounded-xl group-hover:bg-white group-hover:text-destructive" onClick={() => setIsEmergencyActive(true)}>
                  TRIGGER SOS
               </Button>
            </GlassCard>

            <GlassCard>
               <h4 className="font-bold mb-6 flex items-center justify-between">
                  Care Network
                  <Badge variant="outline" className="text-[10px]">3 ONLINE</Badge>
               </h4>
               <div className="space-y-6">
                  {[
                     { name: "Dr. Adebayo", role: "Primary OBGYN", status: "online" },
                     { name: "MediCare Pharmacy", role: "Logistics Partner", status: "online" },
                     { name: "St. Jude Hospital", role: "Assigned Center", status: "away" },
                  ].map((person, i) => (
                     <div key={i} className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-muted rounded-full relative">
                           <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${person.status === 'online' ? 'bg-accent' : 'bg-yellow-400'}`} />
                        </div>
                        <div className="flex-1">
                           <p className="text-sm font-bold">{person.name}</p>
                           <p className="text-[10px] text-muted-foreground">{person.role}</p>
                        </div>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                           <Phone className="w-3 h-3" />
                        </Button>
                     </div>
                  ))}
               </div>
               <Button variant="ghost" className="w-full mt-6 text-xs text-primary font-bold uppercase tracking-widest">Connect Care Circle</Button>
            </GlassCard>

            <GlassCard className="bg-muted/50 border-dashed border-2">
               <h4 className="font-bold mb-4 text-xs uppercase tracking-widest">Upcoming Appointments</h4>
               <div className="p-4 bg-background rounded-2xl border flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex flex-col items-center justify-center text-primary shrink-0">
                     <p className="text-xs font-bold leading-none">OCT</p>
                     <p className="text-lg font-bold">24</p>
                  </div>
                  <div>
                     <p className="text-sm font-bold">Prenatal Checkup</p>
                     <p className="text-[10px] text-muted-foreground">10:00 AM • St. Jude</p>
                  </div>
               </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
