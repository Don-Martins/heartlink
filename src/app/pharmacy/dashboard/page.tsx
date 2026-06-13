
"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ClipboardList, 
  Package, 
  CheckCircle2, 
  Clock, 
  Search,
  ChevronRight,
  Pill,
  TrendingUp,
  AlertCircle
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function PharmacyDashboard() {
  const orders = [
    { id: "ORD-991", patient: "Sarah J.", items: "Folic Acid, Calcium", status: "Pending", time: "5m ago" },
    { id: "ORD-988", patient: "Elena R.", items: "Iron Supplements", status: "In Transit", time: "1h ago" },
    { id: "ORD-985", patient: "Amina O.", items: "Prenatal Vitamins", status: "Delivered", time: "4h ago" },
  ];

  return (
    <div className="min-h-screen bg-muted/20 pb-12">
      <Navbar />
      
      <div className="pt-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-headline font-bold">Pharmacy Center</h1>
            <p className="text-muted-foreground">MediCare Express - Fulfillment Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search orders..." className="pl-10 w-64 rounded-full" />
             </div>
             <Button className="bg-primary rounded-full">
                <Package className="w-4 h-4 mr-2" />
                Inventory Manager
             </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <GlassCard className="bg-primary text-white border-none">
              <h4 className="font-bold opacity-80 mb-1">Orders Today</h4>
              <p className="text-4xl font-headline font-bold">24</p>
              <div className="mt-4 flex gap-2">
                <TrendingUp className="w-4 h-4 opacity-60" />
                <span className="text-xs opacity-60">+12% from yesterday</span>
              </div>
            </GlassCard>

            <GlassCard className="bg-accent/10 border-accent/20">
               <h4 className="font-bold text-accent flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4" />
                  Stock Alert
               </h4>
               <p className="text-sm">Iron supplements running low (8 units left).</p>
               <Button variant="ghost" className="w-full text-xs text-accent mt-4">Order More</Button>
            </GlassCard>

            <GlassCard>
              <h4 className="font-bold mb-4">Quick Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Avg. Prep Time</span>
                  <span className="font-bold">12 mins</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Ready for Pickup</span>
                  <span className="font-bold">4</span>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <GlassCard className="p-0 overflow-hidden">
               <div className="p-6 border-b flex justify-between items-center bg-white dark:bg-card">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                     <ClipboardList className="text-primary w-5 h-5" />
                     Incoming Requests
                  </h3>
                  <Badge variant="outline">3 NEW</Badge>
               </div>
               <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-muted/50 text-xs font-bold uppercase">
                    <tr>
                      <th className="px-6 py-4">Order ID</th>
                      <th className="px-6 py-4">Patient</th>
                      <th className="px-6 py-4">Medications</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-muted/30">
                        <td className="px-6 py-4 text-sm font-bold">{order.id}</td>
                        <td className="px-6 py-4 text-sm">{order.patient}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{order.items}</td>
                        <td className="px-6 py-4">
                          <Badge className={
                            order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                            order.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                            'bg-green-100 text-green-700'
                          }>
                            {order.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Button size="sm" variant={order.status === 'Pending' ? 'default' : 'ghost'}>
                            {order.status === 'Pending' ? 'Fulfill' : 'Details'}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
               </div>
            </GlassCard>

            <div className="grid md:grid-cols-2 gap-6">
               <GlassCard>
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                     <Pill className="text-primary w-4 h-4" />
                     Essential Inventory
                  </h4>
                  <div className="space-y-4">
                     {[
                        { name: "Folic Acid", level: 85 },
                        { name: "Iron Supplements", level: 12 },
                        { name: "Calcium", level: 60 }
                     ].map((item, i) => (
                        <div key={i} className="space-y-1">
                           <div className="flex justify-between text-xs">
                              <span>{item.name}</span>
                              <span className={item.level < 20 ? "text-destructive font-bold" : ""}>{item.level}%</span>
                           </div>
                           <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                              <div 
                                 className={`h-full ${item.level < 20 ? 'bg-destructive' : 'bg-primary'}`} 
                                 style={{ width: `${item.level}%` }} 
                              />
                           </div>
                        </div>
                     ))}
                  </div>
               </GlassCard>
               <GlassCard className="bg-primary text-white">
                  <h4 className="font-bold mb-2">Automated Restock</h4>
                  <p className="text-xs opacity-70 mb-4">Your iron supplement stock is below the threshold. Would you like to trigger an automated restock from Unity Wholesalers?</p>
                  <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold">Approve Order</Button>
               </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
