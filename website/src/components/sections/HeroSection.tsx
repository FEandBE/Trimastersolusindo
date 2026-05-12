"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, PieChart, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/40 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <ShieldCheck size={16} />
            <span>Firma Konsultan Terpercaya</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Solusi Akuntansi & <br />
            Perpajakan
          </h1>
          
          <p className="text-muted text-lg lg:text-xl mb-10 max-w-lg leading-relaxed">
            Membantu korporasi dan bisnis berkembang melalui pengelolaan keuangan yang presisi, strategi pajak yang cerdas, dan kepatuhan hukum yang menyeluruh.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-accent text-background font-bold rounded-xl hover:bg-accent/90 transition-all flex items-center gap-2 group">
              Konsultasi Sekarang
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass text-foreground font-semibold rounded-xl hover:bg-white/5 transition-all">
              Layanan Kami
            </button>
          </div>

          <div className="mt-12 flex gap-8 items-center border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center text-accent">
                <PieChart size={20} />
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider font-semibold">Kepatuhan</p>
                <p className="font-bold">100% Terjamin</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center text-accent">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider font-semibold">Efisiensi</p>
                <p className="font-bold">Optimasi Pajak</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative lg:block hidden"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Image Placeholder - In real use, replace with premium corporate photography */}
            <div className="aspect-[4/5] bg-gradient-to-br from-primary to-background flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Tri Master Solusindo</h3>
                <p className="text-muted">Corporate Tax & Accounting Excellence</p>
              </div>
            </div>
            
            {/* Overlay Glass Elements */}
            <div className="absolute top-10 left-[-2rem] glass p-4 rounded-2xl animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="text-sm font-medium">Audit Ready 2024</p>
              </div>
            </div>
            
            <div className="absolute bottom-10 right-[-1rem] glass p-4 rounded-2xl">
              <p className="text-xs text-muted mb-1">Total Saving</p>
              <p className="text-xl font-bold text-accent">+24% Efficiency</p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border border-accent/20 rounded-full -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-white/5 rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
