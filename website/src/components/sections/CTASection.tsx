"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="glass p-12 lg:p-20 rounded-[3rem] text-center border border-accent/20 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">
              Siap Mengoptimalkan <br />
              Struktur Keuangan Anda?
            </h2>
            <p className="text-muted text-lg mb-12 leading-relaxed">
              Bergabunglah dengan ratusan perusahaan yang telah mempercayakan kepatuhan pajak dan akuntansi mereka kepada Tri Master Solusindo. Dapatkan konsultasi pertama Anda hari ini.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-accent text-background font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-accent/20 flex items-center justify-center gap-3">
                Jadwalkan Konsultasi Gratis
                <Send size={20} />
              </button>
              <button className="px-10 py-5 bg-white/5 border border-white/10 text-foreground font-bold rounded-2xl hover:bg-white/10 transition-all">
                Hubungi Tim Legal
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
