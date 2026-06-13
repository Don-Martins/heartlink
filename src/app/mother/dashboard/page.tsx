
"use client";

import React from "react";
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
  Truck
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig
} from "@/components/ui/chart";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";
import Link from "next/link";

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
  return (
    <div className="min-h-screen bg-muted/20 pb-12">
      <Navbar />
      
      <div className="pt-24 container mx-auto px-4">
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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Pregnancy Week", value: "28", icon: Calendar, color: "text-blue-500", bg: "bg-blue-50" },
            { label: "Last Reading", value: "142 BPM", icon: Activity, color: "text-primary", bg: "bg-primary/10" },
            { label: "Risk Status", value: "Normal", icon: Heart, color: "text-accent", bg: "bg-accent/10" },
            { label: "Wallet Balance", value: "₦45,000", icon: Wallet, color: "text-orange-500", bg: "bg-orange-50" },
          ].map((stat, i) => (
            <GlassCard key={i} className="flex items-center gap-4">
              <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-xl font-bold font-headline">{stat.value}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Chart Section */}
          <div className="lg:col-span-2 space-y-8">
            <GlassCard>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold font-headline">Live Heartbeat Stream</h3>
                  <p className="text-sm text-muted-foreground">Last recorded 2 minutes ago</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">Active Sync</span>
                </div>
              </div>
              <div className="h-[300px] w-full">
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
              </div>
              <div className="mt-6 flex justify-between items-center text-sm">
                <p className="text-muted-foreground">Average: 143 BPM</p>
                <Link href="#" className="text-primary font-bold flex items-center gap-1">
                  View full history <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>

            <div className="grid md:grid-cols-2 gap-6">
              <GlassCard className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold">Next Appointment</h4>
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <div className="p-4 bg-muted/50 rounded-2xl">
                  <p className="font-bold">Routine Prenatal Checkup</p>
                  <p className="text-sm text-muted-foreground">St. Jude Medical Center</p>
                  <p className="text-sm text-primary font-medium mt-2">Oct 24, 2024 • 10:00 AM</p>
                </div>
                <Button variant="outline" className="w-full">Reschedule</Button>
              </GlassCard>

              <GlassCard className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold">Active Delivery</h4>
                  <Truck className="w-4 h-4 text-primary" />
                </div>
                <div className="p-4 bg-muted/50 rounded-2xl">
                  <p className="font-bold">Folic Acid Supplement</p>
                  <p className="text-sm text-muted-foreground">Pharmacy: MediCare Express</p>
                  <div className="mt-3">
                    <Progress value={65} className="h-1.5" />
                    <p className="text-[10px] text-muted-foreground mt-1">On the way - 12 mins away</p>
                  </div>
                </div>
                <Button variant="ghost" className="w-full text-primary">Track Order</Button>
              </GlassCard>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-8">
            <GlassCard className="bg-primary text-white border-none">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Wallet className="w-5 h-5" />
                </div>
                <h4 className="font-bold">Health Wallet</h4>
              </div>
              <div className="space-y-1 mb-8">
                <p className="text-sm opacity-70">Current Balance</p>
                <p className="text-4xl font-bold font-headline">₦45,000.00</p>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-white text-primary hover:bg-white/90">Fund</Button>
                <Button className="flex-1 bg-primary-foreground/10 border-white/20 hover:bg-white/10 text-white">Transfer</Button>
              </div>
            </GlassCard>

            <GlassCard>
              <h4 className="font-bold mb-4">Recent Notifications</h4>
              <div className="space-y-4">
                {[
                  { title: "Heartbeat Logged", time: "2m ago", icon: Activity, color: "text-blue-500" },
                  { title: "Wallet Funded", time: "1h ago", icon: Wallet, color: "text-green-500" },
                  { title: "Risk Check Passed", time: "3h ago", icon: Heart, color: "text-primary" },
                ].map((notif, i) => (
                  <div key={i} className="flex gap-4 items-start pb-4 border-b last:border-0">
                    <div className={`${notif.color} mt-1`}><notif.icon className="w-4 h-4" /></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{notif.title}</p>
                      <p className="text-xs text-muted-foreground">{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-xs text-muted-foreground">View All</Button>
            </GlassCard>

            <GlassCard className="border-destructive/30 bg-destructive/5">
              <div className="flex items-center gap-3 text-destructive mb-3">
                <AlertCircle className="w-5 h-5" />
                <h4 className="font-bold">Emergency SOS</h4>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Click below to instantly alert emergency services and your assigned healthcare worker.</p>
              <Button variant="destructive" className="w-full h-12 font-bold uppercase tracking-widest text-xs">
                Trigger Emergency
              </Button>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
