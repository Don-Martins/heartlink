
"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  Loader2, 
  Stethoscope, 
  HeartPulse,
  ChevronLeft,
  MapPin,
  Hospital,
  ShieldCheck,
  CreditCard,
  Check,
  Truck,
  User,
  ArrowRight
} from "lucide-react";
import { analyzeSymptoms, type SymptomAnalyzerOutput } from "@/ai/flows/symptom-analyzer";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

export default function HealthAnalysisPage() {
  const [symptoms, setSymptoms] = useState("");
  const [duration, setDuration] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<SymptomAnalyzerOutput | null>(null);
  const [step, setStep] = useState<"form" | "result" | "hospitals" | "payment" | "tracking">("form");
  
  // Hospital Selection State
  const [selectedHospital, setSelectedHospital] = useState<any>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const hospitals = [
    { id: 1, name: "St. Jude Medical Center", distance: "2.4km", status: "Emergency Ready", icu: true, eta: "8 mins" },
    { id: 2, name: "City General Hospital", distance: "4.1km", status: "Open", icu: true, eta: "12 mins" },
    { id: 3, name: "Grace Memorial", distance: "5.8km", status: "High Capacity", icu: false, eta: "18 mins" },
  ];

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    try {
      const output = await analyzeSymptoms({
        symptoms: symptoms.split(",").map(s => s.trim()),
        duration: duration
      });
      setResult(output);
      setStep("result");
    } catch (error) {
      console.error("Analysis failed", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handlePayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        setShowPayment(false);
        setStep("tracking");
      }, 2000);
    }, 3000);
  };

  const getEmergencyColor = (level: string) => {
    switch (level) {
      case 'Low': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'High': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Critical': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 pb-20">
      <Navbar />
      <div className="pt-24 container mx-auto px-4 max-w-5xl">
        <div className="flex items-center gap-4 mb-8">
           <Button variant="ghost" size="sm" onClick={() => step !== "form" ? setStep("form") : window.history.back()}>
             <ChevronLeft className="w-4 h-4 mr-1" />
             {step === "form" ? "Back" : "Restart Assessment"}
           </Button>
           <div className="h-1 flex-1 bg-muted rounded-full overflow-hidden">
             <div className="h-full bg-primary transition-all duration-500" style={{ width: step === "form" ? "20%" : step === "result" ? "40%" : step === "hospitals" ? "60%" : step === "payment" ? "80%" : "100%" }} />
           </div>
        </div>

        {step === "form" && (
          <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10 text-center">
              <h1 className="text-4xl font-headline font-bold mb-3">Symptom Assessment</h1>
              <p className="text-muted-foreground">Describe what you're feeling for an AI health check simulation.</p>
            </div>
            <GlassCard>
              <form onSubmit={handleAnalyze} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="symptoms">What symptoms are you experiencing?</Label>
                  <Input 
                    id="symptoms" 
                    placeholder="e.g. Headache, Nausea, Dizziness" 
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    required
                  />
                  <p className="text-[10px] text-muted-foreground italic">Separate multiple symptoms with commas.</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">How long has this been occurring?</Label>
                  <Input 
                    id="duration" 
                    placeholder="e.g. 3 hours, 2 days" 
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Any additional details?</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe severity, location of pain, or anything else..."
                    rows={4}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary h-14 text-lg rounded-2xl shadow-xl shadow-primary/20" 
                  disabled={isAnalyzing || !symptoms || !duration}
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      AI Analysis in Progress...
                    </>
                  ) : (
                    <>
                      <HeartPulse className="w-5 h-5 mr-2" />
                      Start AI Assessment
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </div>
        )}

        {step === "result" && result && (
          <div className="grid lg:grid-cols-5 gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="lg:col-span-3 space-y-6">
              <GlassCard className="border-l-4 border-l-primary">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <Activity className="text-primary w-6 h-6" />
                      AI Assessment Report
                    </h3>
                    <p className="text-sm text-muted-foreground">Reference: HL-#{Math.floor(Math.random()*9000)+1000}</p>
                  </div>
                  <Badge className={`px-4 py-1 text-sm ${getEmergencyColor(result.emergencyLevel)}`}>
                    {result.emergencyLevel} Priority
                  </Badge>
                </div>
                
                <div className="bg-muted/30 p-6 rounded-2xl mb-8">
                  <p className="text-lg leading-relaxed italic">
                    "{result.analysisResult}"
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold flex items-center gap-2">
                    <CheckCircle2 className="text-accent w-5 h-5" />
                    Recommended Actions
                  </h4>
                  <ul className="grid gap-3">
                    {result.suggestedActions.map((action, i) => (
                      <li key={i} className="flex items-start gap-3 p-3 bg-background/50 rounded-xl border border-border/50">
                        <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">{i+1}</div>
                        <span className="text-sm">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {(result.emergencyLevel === 'High' || result.emergencyLevel === 'Critical') ? (
                <GlassCard className="bg-destructive/5 border-destructive/20 ring-4 ring-destructive/10">
                  <div className="flex items-center gap-3 text-destructive mb-4">
                    <AlertTriangle className="w-8 h-8 animate-pulse" />
                    <h3 className="text-xl font-bold">Urgent Action Required</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-8">
                    Our AI has detected markers that suggest immediate clinical review is necessary. We recommend selecting a nearby hospital to initiate emergency coordination.
                  </p>
                  <Button 
                    className="w-full h-16 text-lg bg-destructive hover:bg-destructive/90 rounded-2xl shadow-2xl shadow-destructive/20"
                    onClick={() => setStep("hospitals")}
                  >
                    Find Hospitals Near Me
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </GlassCard>
              ) : (
                <GlassCard className="bg-primary/5 border-primary/20">
                  <h3 className="text-xl font-bold mb-4">Preventative Care</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    While your priority is currently low, scheduling a routine checkup helps maintain long-term safety.
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full h-14 rounded-xl border-primary text-primary"
                    onClick={() => setStep("hospitals")}
                  >
                    View Network Clinics
                  </Button>
                </GlassCard>
              )}
              
              <GlassCard className="p-4 bg-muted/20 border-dashed border-2">
                <p className="text-[10px] text-muted-foreground text-center uppercase tracking-widest font-bold">
                  Prototype Assessment Only. Call Emergency Services if in immediate danger.
                </p>
              </GlassCard>
            </div>
          </div>
        )}

        {step === "hospitals" && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
              <div>
                <h2 className="text-3xl font-bold font-headline">Nearby Facilities</h2>
                <p className="text-muted-foreground">Showing facilities with active NICU and maternity capacity.</p>
              </div>
              <Badge variant="outline" className="h-8 px-4 flex gap-2">
                <MapPin className="w-3 h-3 text-primary" />
                Lagos, Nigeria
              </Badge>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 space-y-4">
                {hospitals.map((h) => (
                  <GlassCard 
                    key={h.id} 
                    className={`cursor-pointer transition-all border-2 ${selectedHospital?.id === h.id ? 'border-primary bg-primary/5 scale-[1.02]' : 'hover:border-primary/30'}`}
                    onClick={() => setSelectedHospital(h)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div className="flex gap-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                          <Hospital className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold">{h.name}</h4>
                          <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {h.distance}</span>
                            <span className="flex items-center gap-1"><Activity className="w-3 h-3" /> {h.status}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-xs font-bold text-muted-foreground uppercase">Ambulance ETA</p>
                          <p className="text-lg font-bold text-primary">{h.eta}</p>
                        </div>
                        {selectedHospital?.id === h.id ? (
                           <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                             <Check className="w-5 h-5" />
                           </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full border-2 border-muted" />
                        )}
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>

              <div className="lg:col-span-2">
                <GlassCard className="h-full bg-muted/30 border-dashed border-2 flex flex-col items-center justify-center text-center p-12">
                   <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                      <MapPin className="text-primary w-10 h-10 animate-bounce" />
                   </div>
                   <h3 className="text-xl font-bold mb-2">Live Capacity Map</h3>
                   <p className="text-sm text-muted-foreground mb-8">Click a facility to verify real-time bed availability and specialist on-call status.</p>
                   <Button 
                    className="w-full h-14 rounded-2xl" 
                    disabled={!selectedHospital}
                    onClick={() => setShowPayment(true)}
                   >
                     Confirm Selection
                   </Button>
                </GlassCard>
              </div>
            </div>
          </div>
        )}

        {step === "tracking" && (
          <div className="max-w-3xl mx-auto animate-in fade-in zoom-in-95 duration-700">
            <GlassCard className="text-center p-12 overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-primary/20 heartbeat-wave" />
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                 <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                 <CheckCircle2 className="w-12 h-12 text-primary relative z-10" />
              </div>
              <h2 className="text-4xl font-bold font-headline mb-4">Coordination Active</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Your emergency case has been accepted by <span className="text-primary font-bold">{selectedHospital?.name}</span>. An ambulance has been dispatched.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                 <div className="p-6 bg-muted/50 rounded-2xl border border-border">
                    <Truck className="w-8 h-8 text-primary mx-auto mb-3 animate-bounce" />
                    <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Ambulance</p>
                    <p className="font-bold">Dispatch HL-09</p>
                    <p className="text-[10px] text-accent font-bold mt-1">ETA: 6 MINS</p>
                 </div>
                 <div className="p-6 bg-muted/50 rounded-2xl border border-border">
                    <User className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Assigned Doctor</p>
                    <p className="font-bold">Dr. Adebayo</p>
                    <p className="text-[10px] text-primary font-bold mt-1">WAITING AT ER</p>
                 </div>
                 <div className="p-6 bg-muted/50 rounded-2xl border border-border">
                    <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Logistics</p>
                    <p className="font-bold">Drug Beacon-01</p>
                    <p className="text-[10px] text-muted-foreground font-bold mt-1">EN ROUTE</p>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link href="/mother/dashboard" className="flex-1">
                    <Button variant="outline" className="w-full h-14 rounded-xl">View Live Map</Button>
                 </Link>
                 <Button className="flex-1 h-14 bg-destructive rounded-xl">SOS Contact</Button>
              </div>
            </GlassCard>
          </div>
        )}
      </div>

      {/* OPay Payment Simulation Modal */}
      <Dialog open={showPayment} onOpenChange={setShowPayment}>
        <DialogContent className="max-w-md p-0 overflow-hidden rounded-[2rem] border-none">
          <div className="bg-primary p-8 text-white">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 p-2 rounded-lg">
                  <CreditCard className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg">HeartLink Pay</span>
              </div>
              <Badge className="bg-white/20 text-white border-none">SECURE</Badge>
            </div>
            <div className="space-y-1">
              <p className="text-xs opacity-70 uppercase tracking-widest font-bold">Total Payment</p>
              <h2 className="text-5xl font-bold font-headline">₦12,500</h2>
            </div>
          </div>

          <div className="p-8 space-y-6 bg-background">
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Emergency Processing</span>
                <span className="font-bold">₦5,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Hospital Consultation</span>
                <span className="font-bold">₦7,500</span>
              </div>
              <div className="h-px bg-border my-2" />
              <div className="flex justify-between items-center">
                 <div>
                    <p className="text-xs font-bold uppercase text-muted-foreground">Method</p>
                    <div className="flex items-center gap-2 mt-1">
                       <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white text-[10px] font-bold">OP</div>
                       <p className="text-sm font-bold">OPay Wallet (₦45,000)</p>
                    </div>
                 </div>
                 <Button variant="ghost" size="sm" className="text-xs text-primary">Change</Button>
              </div>
            </div>

            {paymentSuccess ? (
              <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20 flex flex-col items-center animate-in zoom-in-95">
                 <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white mb-3">
                    <Check className="w-6 h-6" />
                 </div>
                 <p className="font-bold text-accent">Payment Successful</p>
                 <p className="text-xs text-muted-foreground">Redirecting to coordination center...</p>
              </div>
            ) : (
              <Button 
                className="w-full h-16 rounded-2xl bg-primary text-xl font-bold shadow-2xl shadow-primary/30" 
                onClick={handlePayment}
                disabled={isProcessingPayment}
              >
                {isProcessingPayment ? (
                  <>
                    <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                    Authorizing...
                  </>
                ) : (
                  "Pay Now"
                )}
              </Button>
            )}
            
            <p className="text-[10px] text-muted-foreground text-center">
              Powered by OPay secure gateway. Payment confirms hospital booking and emergency dispatch.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
