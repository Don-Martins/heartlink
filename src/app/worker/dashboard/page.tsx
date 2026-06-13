
"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Activity, 
  Bell, 
  Calendar, 
  Search, 
  Filter,
  MessageSquare,
  ChevronRight,
  AlertTriangle,
  ClipboardList
} from "lucide-react";
import { Input } from "@/components/ui/input";

const patients = [
  { id: "P-001", name: "Sarah Johnson", week: 28, status: "Normal", lastBpm: 142, alert: false },
  { id: "P-002", name: "Elena Rodriguez", week: 32, status: "Critical", lastBpm: 185, alert: true },
  { id: "P-003", name: "Amina Okoro", week: 24, status: "Elevated", lastBpm: 158, alert: true },
  { id: "P-004", name: "Jessica Smith", week: 36, status: "Normal", lastBpm: 138, alert: false },
  { id: "P-005", name: "Li Wei", week: 19, status: "Normal", lastBpm: 145, alert: false },
];

export default function WorkerDashboard() {
  return (
    <div className="min-h-screen bg-muted/20 pb-12">
      <Navbar />
      
      <div className="pt-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-headline font-bold">Healthcare Portal</h1>
            <p className="text-muted-foreground">You have 5 active patients and 2 unread alerts.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search patients..." className="pl-10 w-64 bg-white" />
            </div>
            <Button className="bg-primary hover:bg-primary/90 rounded-full">
              <ClipboardList className="w-4 h-4 mr-2" />
              Assign New Patient
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Stats Column */}
          <div className="space-y-6">
            <GlassCard className="bg-primary text-white border-none">
              <h4 className="font-bold opacity-80 mb-1">Active Patients</h4>
              <p className="text-4xl font-headline font-bold">12</p>
              <div className="mt-4 flex gap-2">
                <Users className="w-4 h-4 opacity-60" />
                <span className="text-xs opacity-60">+2 this month</span>
              </div>
            </GlassCard>
            
            <GlassCard className="border-l-4 border-l-destructive bg-destructive/5">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-destructive">Urgent Alerts</h4>
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-3xl font-headline font-bold mt-2">02</p>
              <p className="text-xs text-muted-foreground mt-1">Requires immediate review</p>
            </GlassCard>

            <GlassCard className="space-y-4">
              <h4 className="font-bold">Upcoming Visits</h4>
              {[
                { name: "Sarah J.", time: "10:00 AM", date: "Today" },
                { name: "Jessica S.", time: "02:30 PM", date: "Today" },
                { name: "Amina O.", time: "09:00 AM", date: "Tomorrow" },
              ].map((visit, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                  <div>
                    <p className="text-sm font-bold">{visit.name}</p>
                    <p className="text-[10px] text-muted-foreground">{visit.date}</p>
                  </div>
                  <Badge variant="outline" className="text-[10px]">{visit.time}</Badge>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-xs text-primary">View Full Schedule</Button>
            </GlassCard>
          </div>

          {/* Main Patient List */}
          <div className="lg:col-span-3 space-y-6">
            <GlassCard className="p-0 overflow-hidden border-none shadow-lg">
              <div className="p-6 border-b flex items-center justify-between bg-white dark:bg-card">
                <h3 className="text-xl font-bold font-headline">Patient Monitoring List</h3>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-muted/50 text-xs font-bold uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Patient Name</th>
                      <th className="px-6 py-4">Pregnancy Week</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Last BPM</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {patients.map((patient) => (
                      <tr key={patient.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                              {patient.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="text-sm font-bold">{patient.name}</p>
                              <p className="text-[10px] text-muted-foreground">ID: {patient.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm">Week {patient.week}</td>
                        <td className="px-6 py-4">
                          <Badge className={
                            patient.status === 'Critical' ? 'bg-red-100 text-red-700' :
                            patient.status === 'Elevated' ? 'bg-orange-100 text-orange-700' :
                            'bg-green-100 text-green-700'
                          }>
                            {patient.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">
                          <div className="flex items-center gap-2">
                            <Activity className={`w-4 h-4 ${patient.alert ? 'text-destructive animate-pulse' : 'text-primary'}`} />
                            {patient.lastBpm} BPM
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                              <MessageSquare className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                              <ChevronRight className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>

            <div className="grid md:grid-cols-2 gap-6">
              <GlassCard>
                <h4 className="font-bold mb-4">Urgent Tasks</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/20">
                    <AlertTriangle className="w-4 h-4 text-red-600 mt-1" />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-red-900 dark:text-red-400">Review Abnormal Reading</p>
                      <p className="text-xs text-red-700/70">Elena R. reported 185 BPM at 09:12 AM</p>
                    </div>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 h-7 text-[10px]">Review</Button>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/20">
                    <ClipboardList className="w-4 h-4 text-blue-600 mt-1" />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-blue-900 dark:text-blue-400">Monthly Reports Due</p>
                      <p className="text-xs text-blue-700/70">Submission deadline in 2 days</p>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 h-7 text-[10px]">Open</Button>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <h4 className="font-bold mb-4">Recent Activity</h4>
                <div className="space-y-4">
                  {[
                    { action: "Symptom check completed by Sarah J.", time: "12m ago" },
                    { action: "New heartbeat log for Li Wei", time: "1h ago" },
                    { action: "Appointment rescheduled by Jessica S.", time: "3h ago" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <p className="text-muted-foreground">{item.action}</p>
                      <span className="opacity-60">{item.time}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
