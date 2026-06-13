
"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Hospital as HospitalIcon, 
  Ambulance, 
  Activity, 
  MapPin, 
  Phone,
  AlertCircle,
  Clock,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Users
} from "lucide-react";

export default function HospitalDashboard() {
  const [activeCase, setActiveCase] = useState<any>({
    patient: "Elena Rodriguez",
    location: "122 Oakwood Dr, District 4",
    fetalBpm: 185,
    status: "Distress",
    eta: "8 Mins",
    payment: "Verified",
    assignedDr: "Pending"
  });

  return (
    <div className="min-h-screen bg-muted/20 pb-12">
      <Navbar />
      
      <div className="pt-24 container mx-auto px-4">
        {/* Urgent Alert Banner */}
        {activeCase.assignedDr === "Pending" && (
          <div className="mb-8 p-6 bg-destructive rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-destructive/20 animate-in fade-in zoom-in-95">
            <div className="flex items-center gap-4">
               <div className="bg-white/20 p-4 rounded-2xl animate-pulse">
                  <AlertCircle className="w-8 h-8" />
               </div>
               <div>
                  <h2 className="text-2xl font-bold font-headline">New High-Priority Emergency</h2>
                  <p className="opacity-80">Patient {activeCase.patient} requires immediate NICU preparation.</p>
               </div>
            </div>
            <div className="flex gap-3">
               <Button className="bg-white text-destructive hover:bg-white/90 px-8 h-12 rounded-xl font-bold" onClick={() => setActiveCase({...activeCase, assignedDr: "Dr. Chen"})}>
                  Accept Case
               </Button>
               <Button variant="outline" className="border-white text-white hover:bg-white/10 h-12 rounded-xl">View Diagnosis</Button>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-headline font-bold">Coordination Hub</h1>
            <p className="text-muted-foreground">St. Jude Medical Center • Operational Excellence</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-full h-11 px-6 border-destructive text-destructive">
              <Phone className="w-4 h-4 mr-2" />
              Emergency Line
            </Button>
            <Button className="bg-primary rounded-full h-11 px-6 shadow-lg shadow-primary/20">
              <Users className="w-4 h-4 mr-2" />
              Manage Staff
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Emergencies Feed */}
          <div className="lg:col-span-2 space-y-6">
            <GlassCard className="border-l-4 border-l-destructive overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-full -mr-16 -mt-16" />
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold font-headline flex items-center gap-2">
                  <Ambulance className="text-destructive w-6 h-6" />
                  Live Coordination Feed
                </h3>
                <Badge className="bg-destructive text-destructive-foreground animate-pulse px-4 py-1">
                  1 ACTIVE EMERGENCY
                </Badge>
              </div>
              
              <div className="p-6 bg-destructive/5 rounded-[2rem] border border-destructive/20 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-destructive/20 rounded-2xl flex items-center justify-center text-destructive">
                      <AlertCircle className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl text-destructive">{activeCase.patient}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {activeCase.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">ETA</p>
                    <p className="text-3xl font-bold text-destructive">{activeCase.eta}</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 py-6 border-y border-destructive/10">
                  <div className="text-center">
                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Fetal BPM</p>
                    <p className="text-xl font-bold text-destructive">{activeCase.fetalBpm}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Status</p>
                    <p className="text-xl font-bold">{activeCase.status}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Payment</p>
                    <p className="text-xl font-bold text-accent">{activeCase.payment}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">Doctor</p>
                    <p className={`text-xl font-bold ${activeCase.assignedDr === 'Pending' ? 'text-destructive animate-pulse' : 'text-primary'}`}>
                      {activeCase.assignedDr}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1 h-14 bg-destructive text-white rounded-xl text-lg font-bold shadow-xl shadow-destructive/20">Contact Ambulance</Button>
                  <Button variant="outline" className="flex-1 h-14 border-destructive text-destructive hover:bg-destructive/10 rounded-xl text-lg font-bold">Prepare Room 3B</Button>
                </div>
              </div>
            </GlassCard>

            <div className="grid md:grid-cols-2 gap-6">
               <GlassCard>
                  <h4 className="font-bold mb-6 flex items-center gap-2">
                     <TrendingUp className="w-4 h-4 text-primary" />
                     Facility Real-time Capacity
                  </h4>
                  <div className="space-y-6">
                     {[
                        { label: "Maternity Ward", val: 85, color: "bg-primary" },
                        { label: "Neonatal ICU", val: 40, color: "bg-accent" },
                        { label: "Emergency ER", val: 95, color: "bg-destructive" },
                     ].map((item, i) => (
                        <div key={i} className="space-y-2">
                           <div className="flex justify-between text-xs font-bold">
                              <span>{item.label}</span>
                              <span className={item.val > 90 ? "text-destructive" : ""}>{item.val}%</span>
                           </div>
                           <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div className={`h-full transition-all duration-1000 ${item.color}`} style={{ width: `${item.val}%` }} />
                           </div>
                        </div>
                     ))}
                  </div>
               </GlassCard>

               <GlassCard className="bg-primary text-white border-none relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                  <h4 className="font-bold mb-6 flex items-center gap-2">
                     <ShieldCheck className="w-4 h-4" />
                     Specialist Readiness
                  </h4>
                  <div className="space-y-4">
                     {[
                        { name: "Dr. Chen (NICU)", status: "On-Call" },
                        { name: "Dr. Adebayo (OBGYN)", status: "Active" },
                        { name: "Dr. Sarah (ER)", status: "Active" }
                     ].map((doc, i) => (
                        <div key={i} className="flex justify-between items-center p-3 bg-white/10 rounded-xl">
                           <span className="text-sm font-bold">{doc.name}</span>
                           <Badge className="bg-white/20 text-white border-none text-[10px]">{doc.status}</Badge>
                        </div>
                     ))}
                  </div>
               </GlassCard>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <GlassCard>
              <h4 className="font-bold mb-6 flex items-center justify-between">
                Coordination Log
                <Badge variant="ghost" className="text-[10px] opacity-60">LIVE</Badge>
              </h4>
              <div className="space-y-8">
                {[
                  { title: "Ambulance HL-09 Dispatched", time: "5m ago", type: "critical" },
                  { title: "Payment Verified: Rodriguez", time: "8m ago", type: "success" },
                  { title: "Smart Diagnosis Received", time: "10m ago", type: "info" },
                  { title: "NICU Bed Reserved", time: "15m ago", type: "info" },
                ].map((log, i) => (
                  <div key={i} className="relative pl-6 border-l last:border-0 pb-8 last:pb-0">
                    <div className={`absolute -left-1.5 top-0 w-3 h-3 rounded-full border-2 border-white ${
                      log.type === 'critical' ? 'bg-destructive' :
                      log.type === 'success' ? 'bg-accent' : 'bg-primary'
                    }`} />
                    <p className="text-sm font-bold">{log.title}</p>
                    <p className="text-xs text-muted-foreground">{log.time}</p>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-6 text-xs text-muted-foreground hover:text-primary">View Full Audit Trail</Button>
            </GlassCard>

            <GlassCard className="bg-foreground text-background border-none overflow-hidden relative">
               <div className="absolute inset-0 bg-primary/10 heartbeat-wave opacity-20" />
               <h4 className="font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  Network Analytics
               </h4>
               <p className="text-xs opacity-70 mb-8">System performance across your sector has improved response time by 22% this week.</p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl">
                     <p className="text-[10px] uppercase font-bold opacity-60">Success</p>
                     <p className="text-2xl font-bold">99.2%</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl">
                     <p className="text-[10px] uppercase font-bold opacity-60">Response</p>
                     <p className="text-2xl font-bold">~4m</p>
                  </div>
               </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
