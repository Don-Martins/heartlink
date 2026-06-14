
"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Globe,
  Send
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6">Get in <span className="text-primary italic">Touch</span></h1>
          <p className="text-xl text-muted-foreground">
            Whether you're looking for support or want to partner, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <GlassCard className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase">Email Us</p>
                    <p className="font-bold"></p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase">Call Us</p>
                    <p className="font-bold"></p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase">HQ Office</p>
                    <p className="font-bold"></p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <div className="h-64 bg-muted rounded-3xl relative overflow-hidden border">
              <div className="absolute inset-0 bg-primary/5 heartbeat-wave opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="flex flex-col items-center">
                    <MapPin className="text-primary w-10 h-10 animate-bounce" />
                    <p className="text-xs font-bold mt-2">HeartLink HQ</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <GlassCard className="h-full">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input type="email" placeholder="jane@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Subject</Label>
                  <Input placeholder="Partnership Inquiry" />
                </div>
                <div className="space-y-2">
                  <Label>Message</Label>
                  <Textarea placeholder="How can we help you?" rows={6} />
                </div>
                <Button className="w-full bg-primary h-12 text-lg rounded-xl">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
