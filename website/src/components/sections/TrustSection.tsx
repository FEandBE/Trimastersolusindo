"use client";

import { motion } from "framer-motion";

export default function TrustSection() {
  const stats = [
    { label: "Klien Korporasi", value: "200+" },
    { label: "Tahun Pengalaman", value: "15+" },
    { label: "Efisiensi Pajak", value: "24%" },
    { label: "Tim Profesional", value: "50+" },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-primary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h4 className="text-4xl lg:text-5xl font-black text-accent mb-2">{stat.value}</h4>
              <p className="text-muted text-sm uppercase tracking-widest font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Partners/Clients Logo Placeholder */}
        <div className="mt-20 text-center">
          <p className="text-muted text-xs uppercase tracking-[0.3em] font-semibold mb-10">Dipercaya Oleh Berbagai Industri</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {/* These would be actual logos in a real project */}
            <div className="text-2xl font-black italic">MANUFACTURING</div>
            <div className="text-2xl font-black italic">RETAIL & E-COMMERCE</div>
            <div className="text-2xl font-black italic">FINANCIAL SERVICES</div>
            <div className="text-2xl font-black italic">TECH & STARTUP</div>
          </div>
        </div>
      </div>
    </section>
  );
}
