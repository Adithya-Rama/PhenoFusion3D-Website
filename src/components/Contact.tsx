"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ExternalLink, Github, Leaf } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a0a] to-[#030806]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-green-500/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold uppercase tracking-widest mb-6">
            Get Involved
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Advance Plant Science<br />
            <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-green-100/50 text-base max-w-xl mx-auto mb-10">
            PhenoFusion3D is developed in collaboration with the APPN at ANU.
            Reach out to learn more about the project, dataset access, or collaboration opportunities.
          </p>
          <a
            href="https://www.plantphenomics.org.au/contact#node-anu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-lime-500 text-black font-bold rounded-full hover:shadow-xl hover:shadow-green-500/30 hover:scale-105 transition-all duration-300 text-sm"
          >
            Contact APPN ANU Node
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {[
            {
              icon: MapPin,
              title: "Location",
              detail: "ANU Node, Canberra",
              sub: "Research School of Biology",
              color: "text-green-400",
              bg: "bg-green-500/10",
              border: "border-green-500/30",
            },
            {
              icon: Mail,
              title: "Contact",
              detail: "plantphenomics.org.au",
              sub: "Via APPN contact page",
              color: "text-lime-400",
              bg: "bg-lime-500/10",
              border: "border-lime-500/30",
            },
            {
              icon: Github,
              title: "Open Source",
              detail: "Reproducible Pipelines",
              sub: "Documentation & codebase",
              color: "text-emerald-400",
              bg: "bg-emerald-500/10",
              border: "border-emerald-500/30",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`p-6 rounded-2xl border ${card.border} ${card.bg} transition-all duration-300`}
            >
              <div className={`w-10 h-10 rounded-xl bg-black/20 border border-white/10 flex items-center justify-center mb-4`}>
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </div>
              <div className="text-xs text-green-500/60 uppercase tracking-widest font-semibold mb-1">{card.title}</div>
              <div className={`font-bold ${card.color} mb-0.5`}>{card.detail}</div>
              <div className="text-green-100/40 text-sm">{card.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-green-900/30 pt-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-green-400 to-lime-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/20">
              <Leaf className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-sm">
              <span className="text-green-400">Pheno</span>
              <span className="text-white">Fusion</span>
              <span className="text-lime-400">3D</span>
            </span>
          </div>

          <div className="text-green-100/30 text-xs text-center">
            © 2024 PhenoFusion3D · Developed at the ANU Node of the Australian Plant Phenomics Network
          </div>

          <div className="flex gap-4 text-xs text-green-100/40">
            <a
              href="https://www.plantphenomics.org.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              APPN Website
            </a>
            <a
              href="https://www.anu.edu.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              ANU
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
