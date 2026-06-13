
"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Hospital, 
  Ambulance, 
  Activity, 
  MapPin, 
  Phone,
  AlertCircle,
  Clock,
  ChevronRight,
  TrendingUp,
  ShieldCheck
} from "lucide-react";

export default function HospitalDashboard() {
  return (
    <div className="min-h-screen bg-muted/20 pb-12">
      <Navbar />
      
      <div className="pt-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-headline font-bold">Coordination Center</h1>
            <p className="text-muted-foreground">St. Jude Medical Center - Operations Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-full">
              <Phone className="w-4 h-4 mr-2" />
              Emergency Line
            </Button>
            <Button className="bg-destructive hover:bg-destructive/90 rounded-full">
              <AlertCircle className="w-4 h-4 mr-2" />
              Dispatch Emergency Team
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Emergencies */}
          <div className="lg:col-span-2 space-y-6">
            <GlassCard className="border-l-4 border-l-destructive">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold font-headline flex items-center gap-2">
                  <Ambulance className="text-destructive w-6 h-6" />
                  Live Emergency Feed
                </h3>
                <Badge className="bg-destructive text-destructive-foreground animate-pulse">
                  1 ACTIVE CASE
                </Badge>
              </div>
              
              <div className="p-4 bg-destructive/5 rounded-2xl border border-destructive/20 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center text-destructive">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-destructive">Elena Rodriguez</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> 122 Oakwood Dr, District 4
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">ETA: 8 Minutes</p>
                    <p className="text-xs text-muted-foreground">Ambulance HL-09</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-destructive/10">
                  <div className="text-center">
                    <p className="text-[10px] uppercase font-bold text-muted-foreground">Week</p>
                    <p className="text-lg font-bold">32</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase font-bold text-muted-foreground">Fetal BPM</p>
                    <p className="text-lg font-bold text-destructive">185</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase font-bold text-muted-foreground">Status</p>
                    <p className="text-lg font-bold">Distress</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-destructive text-white">Contact Rider</Button>
                  <Button variant="outline" className="flex-1 border-destructive text-destructive hover:bg-destructive/10">Prepare Room 3B</Button>
                </div>
              </div>
            </GlassCard>

            <div className="grid md:grid-cols-2 gap-6">
              <GlassCard>
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Facility Utilization
                </h4>
                <div className="space-y-4">
                  {[
                    { label: "Maternity Ward", val: 85, color: "bg-primary" },
                    { label: "Neonatal ICU", val: 40, color: "bg-accent" },
                    { label: "Delivery Rooms", val: 60, color: "bg-blue-500" },
                  ].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>{item.label}</span>
                        <span>{item.val}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div className={`h-full ${item.color}`} style={{ width: `${item.val}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard>
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  Ready Resources
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-muted/50 rounded-xl text-center">
                    <p className="text-xl font-bold">4</p>
                    <p className="text-[10px] text-muted-foreground uppercase">Ambulances</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-xl text-center">
                    <p className="text-xl font-bold">12</p>
                    <p className="text-[10px] text-muted-foreground uppercase">Specialists</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-xl text-center">
                    <p className="text-xl font-bold">9</p>
                    <p className="text-[10px] text-muted-foreground uppercase">NICU Beds</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-xl text-center">
                    <p className="text-xl font-bold">2</p>
                    <p className="text-[10px] text-muted-foreground uppercase">Blood Banks</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Activity Sidebar */}
          <div className="space-y-6">
            <GlassCard>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Coordination Log
              </h4>
              <div className="space-y-6">
                {[
                  { title: "Ambulance HL-09 Dispatched", time: "5m ago", type: "critical" },
                  { title: "Ward 4 Capacity Updated", time: "15m ago", type: "info" },
                  { title: "Inventory Restock: Folic Acid", time: "1h ago", type: "success" },
                  { title: "Shift Change: Night Team", time: "2h ago", type: "info" },
                ].map((log, i) => (
                  <div key={i} className="relative pl-6 border-l last:border-0 pb-6 last:pb-0">
                    <div className={`absolute -left-1.5 top-0 w-3 h-3 rounded-full border-2 border-white ${
                      log.type === 'critical' ? 'bg-destructive' :
                      log.type === 'success' ? 'bg-accent' : 'bg-primary'
                    }`} />
                    <p className="text-sm font-medium">{log.title}</p>
                    <p className="text-xs text-muted-foreground">{log.time}</p>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-xs">View Audit Trail</Button>
            </GlassCard>

            <GlassCard className="bg-primary text-white border-none overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8" />
              <h4 className="font-bold mb-2">Network Insights</h4>
              <p className="text-xs opacity-80 mb-4">Total monitored pregnancies in your service area has grown by 15% this quarter.</p>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="flex-[2]">
                  <p className="text-2xl font-bold">1,242</p>
                  <p className="text-[10px] uppercase opacity-60 font-bold">Active Records</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
