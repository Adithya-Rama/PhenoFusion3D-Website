"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, GraduationCap, Leaf, Globe } from "lucide-react";

const useCases = [
  {
    icon: "🌾",
    title: "Crop Breeding",
    desc: "Screen thousands of genotypes for stress tolerance, yield potential, and quality traits in controlled environments.",
  },
  {
    icon: "🧬",
    title: "Genetic Research",
    desc: "Correlate spatial and spectral phenotypes with QTL markers to accelerate genotype-to-phenotype discovery.",
  },
  {
    icon: "🌡️",
    title: "Climate Adaptation",
    desc: "Quantify plant responses to heat, drought, and elevated CO₂ for developing climate-resilient crops.",
  },
  {
    icon: "🏭",
    title: "Agritech Integration",
    desc: "Exportable data pipelines that integrate with existing breeding management and decision support systems.",
  },
];

const stakeholders = [
  { type: "Government", icon: Building2, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  { type: "Academic Research", icon: GraduationCap, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" },
  { type: "Start-Up / Entrepreneurial", icon: Globe, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  { type: "Not-for-Profit", icon: Leaf, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/30" },
];

export default function Organisation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="organisation" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#050a0a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            Organisation & Mission
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Supporting{" "}
            <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
              Plant Science
            </span>{" "}
            at Scale
          </motion.h2>
        </div>

        {/* APPN description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 mb-12"
        >
          <div className="p-8 rounded-2xl border border-green-500/20 bg-gradient-to-br from-[#0f1f15] to-[#0a1510]">
            <div className="text-green-400 font-bold text-xs uppercase tracking-widest mb-3">About APPN</div>
            <h3 className="text-white text-2xl font-bold mb-4">Australian Plant Phenomics Network</h3>
            <p className="text-green-100/60 text-sm leading-relaxed mb-4">
              The APPN provides a national network of plant phenotyping solutions and sensors, backed
              by specialist technical and data expertise, to enable researchers to measure the performance
              of plants efficiently, objectively, and non-destructively over time.
            </p>
            <p className="text-green-100/60 text-sm leading-relaxed mb-6">
              At the ANU node, we specialise in controlled environment phenotyping and developing
              advanced software to support plant phenomics research at national scale.
            </p>
            <div className="flex flex-wrap gap-2">
              {stakeholders.map((s) => (
                <div
                  key={s.type}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${s.border} ${s.bg}`}
                >
                  <s.icon className={`w-3.5 h-3.5 ${s.color}`} />
                  <span className={`text-xs font-medium ${s.color}`}>{s.type}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-green-500/20 bg-gradient-to-br from-[#0f1f15] to-[#0a1510]">
            <div className="text-green-400 font-bold text-xs uppercase tracking-widest mb-3">Project Goals</div>
            <h3 className="text-white text-2xl font-bold mb-4">Intended Outcomes</h3>
            <ul className="space-y-3">
              {[
                "A usable desktop application for end-to-end plant scan processing",
                "Interactive 3D visualisation with hyperspectral overlays",
                "Exportable outputs (tables, plots, reports) for research workflows",
                "Clear documentation and reproducible pipelines for future adoption",
              ].map((goal, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 text-sm text-green-100/60"
                >
                  <span className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-400 text-xs">✓</span>
                  </span>
                  {goal}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Use cases */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="p-5 rounded-2xl border border-green-500/15 bg-gradient-to-br from-[#0f1f15] to-[#0a1510] hover:border-green-500/30 hover:shadow-lg hover:shadow-green-950/30 transition-all duration-300 cursor-default"
            >
              <div className="text-3xl mb-3">{uc.icon}</div>
              <div className="text-white font-bold text-sm mb-1.5">{uc.title}</div>
              <div className="text-green-100/50 text-xs leading-relaxed">{uc.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
