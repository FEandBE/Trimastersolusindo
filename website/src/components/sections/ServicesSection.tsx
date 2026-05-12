"use client";

import { motion } from "framer-motion";
import { BookOpen, Calculator, FileText, BarChart3, Users, Briefcase } from "lucide-react";

const services = [
  {
    title: "Konsultasi Perpajakan",
    description: "Perencanaan pajak strategis, kepatuhan SPT tahunan, dan pendampingan audit pajak untuk meminimalkan risiko.",
    icon: <Calculator className="text-accent" size={32} />,
  },
  {
    title: "Jasa Akuntansi",
    description: "Penyusunan laporan keuangan bulanan dan tahunan sesuai standar akuntansi yang berlaku (PSAK).",
    icon: <BookOpen className="text-accent" size={32} />,
  },
  {
    title: "Audit & Assurance",
    description: "Pemeriksaan laporan keuangan independen untuk meningkatkan kredibilitas di mata pemangku kepentingan.",
    icon: <FileText className="text-accent" size={32} />,
  },
  {
    title: "Manajemen Keuangan",
    description: "Analisis arus kas, penganggaran, dan strategi manajemen modal untuk pertumbuhan bisnis yang berkelanjutan.",
    icon: <BarChart3 className="text-accent" size={32} />,
  },
  {
    title: "Payroll & HR Admin",
    description: "Pengelolaan penggajian karyawan dan administrasi SDM yang efisien serta akurat.",
    icon: <Users className="text-accent" size={32} />,
  },
  {
    title: "Legal & Pendirian Usaha",
    description: "Bantuan legalitas pendirian perusahaan dan perizinan bisnis di Indonesia.",
    icon: <Briefcase className="text-accent" size={32} />,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-widest text-sm mb-4"
          >
            Layanan Kami
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Solusi Menyeluruh untuk <br />
            Kebutuhan Bisnis Anda
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/5 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-background transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
