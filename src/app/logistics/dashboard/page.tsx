
"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Navigation, 
  MapPin, 
  Truck, 
  Activity, 
  Clock, 
  Search,
  ChevronRight,
  Package,
  Globe
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function LogisticsDashboard() {
  const deliveries = [
    { id: "DLV-001", rider: "Rider 24", dest: "District 4, Oakwood", status: "Active", eta: "8m" },
    { id: "DLV-002", rider: "Rider 12", dest: "Central Ward 2", status: "Active", eta: "15m" },
    { id: "DLV-003", rider: "Rider 09", dest: "St. Jude Pharmacy", status: "Idle", eta: "-" },
  ];

  return (
    <div className="min-h-screen bg-muted/20 pb-12">
      <Navbar />
      
      <div className="pt-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-headline font-bold">Logistics Hub</h1>
            <p className="text-muted-foreground">Beacon Delivery Network - Global Monitoring</p>
          </div>
          <div className="flex items-center gap-3">
             <Button className="bg-primary rounded-full">
                <Navigation className="w-4 h-4 mr-2" />
                Fleet Map View
             </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <GlassCard className="bg-foreground text-background border-none">
              <h4 className="font-bold opacity-60 mb-1">Total Fleet</h4>
              <p className="text-4xl font-headline font-bold">142</p>
              <div className="mt-4 flex gap-4 text-xs font-bold">
                <span className="text-accent">112 ONLINE</span>
                <span className="opacity-40">30 OFFLINE</span>
              </div>
            </GlassCard>

            <GlassCard>
               <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Activity className="text-primary w-4 h-4" />
                  Network Health
               </h4>
               <div className="space-y-4">
                  <div className="p-3 bg-muted rounded-xl">
                     <p className="text-[10px] text-muted-foreground uppercase font-bold">Avg. Delivery</p>
                     <p className="text-lg font-bold">22 Mins</p>
                  </div>
                  <div className="p-3 bg-muted rounded-xl">
                     <p className="text-[10px] text-muted-foreground uppercase font-bold">Success Rate</p>
                     <p className="text-lg font-bold">99.8%</p>
                  </div>
               </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="h-96 bg-muted rounded-3xl relative overflow-hidden border">
               {/* Mock Map Background */}
               <div className="absolute inset-0 bg-primary/5 heartbeat-wave opacity-10" />
               <div className="absolute top-1/4 left-1/4">
                  <div className="relative">
                     <MapPin className="text-primary w-8 h-8" />
                     <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-white animate-pulse" />
                  </div>
               </div>
               <div className="absolute bottom-1/3 right-1/4">
                  <div className="relative">
                     <MapPin className="text-destructive w-8 h-8" />
                  </div>
               </div>
               {/* Map Controls */}
               <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button size="icon" className="bg-white text-black hover:bg-white/90 rounded-full shadow-lg">+</Button>
                  <Button size="icon" className="bg-white text-black hover:bg-white/90 rounded-full shadow-lg">-</Button>
               </div>
               <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-2 rounded-full text-xs font-bold border flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  Live Fleet Tracking Enabled
               </div>
            </div>

            <GlassCard className="p-0 overflow-hidden">
               <div className="p-6 border-b flex justify-between items-center bg-white dark:bg-card">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                     <Truck className="text-primary w-5 h-5" />
                     Active Shipments
                  </h3>
                  <div className="relative">
                     <Search className="absolute left-3 top-2 w-3 h-3 text-muted-foreground" />
                     <Input placeholder="Find shipment..." className="h-7 pl-8 text-[10px] w-48 rounded-full" />
                  </div>
               </div>
               <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-muted/50 text-[10px] font-bold uppercase">
                    <tr>
                      <th className="px-6 py-4">Shipment ID</th>
                      <th className="px-6 py-4">Assignee</th>
                      <th className="px-6 py-4">Destination</th>
                      <th className="px-6 py-4">ETA</th>
                      <th className="px-6 py-4 text-right">Route</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {deliveries.map((dlv) => (
                      <tr key={dlv.id} className="hover:bg-muted/30">
                        <td className="px-6 py-4 text-xs font-bold">{dlv.id}</td>
                        <td className="px-6 py-4 text-xs">{dlv.rider}</td>
                        <td className="px-6 py-4 text-xs text-muted-foreground">{dlv.dest}</td>
                        <td className="px-6 py-4">
                          <Badge variant="outline" className="text-[10px]">{dlv.eta}</Badge>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Button size="icon" variant="ghost" className="h-8 w-8">
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
               </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
