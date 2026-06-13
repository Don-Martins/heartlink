
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, ChevronRight, Mail, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GlassCard } from "@/components/ui/GlassCard";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login delay
    setTimeout(() => {
      window.location.href = "/mother/dashboard";
    }, 1500);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-center p-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 heartbeat-wave opacity-50" />
        <div className="relative z-10 space-y-6">
          <Link href="/" className="flex items-center gap-2 mb-12">
            <Heart className="w-10 h-10 fill-white" />
            <span className="text-3xl font-headline font-bold">HeartLink</span>
          </Link>
          <h1 className="text-6xl font-headline font-bold leading-tight">Welcome Back.</h1>
          <p className="text-xl opacity-80 max-w-md">Access your maternal care dashboard and stay connected with your healthcare network.</p>
        </div>
      </div>

      <div className="flex flex-col justify-center p-8 md:p-12 lg:p-20 bg-background">
        <div className="max-w-md w-full mx-auto space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-headline font-bold">Login to HeartLink</h2>
            <p className="text-muted-foreground mt-2">Enter your credentials to access your account.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="name@example.com" className="pl-10 h-12" required />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="text-xs text-primary font-medium">Forgot password?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="••••••••" className="pl-10 h-12" required />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary h-12 text-lg" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Logging in...
                </>
              ) : (
                <>
                  Sign In
                  <ChevronRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-12">Google</Button>
            <Button variant="outline" className="h-12">Apple</Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account? <Link href="/register" className="text-primary font-bold">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
