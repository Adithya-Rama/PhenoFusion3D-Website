"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cuboid,
  Microscope,
  BarChart3,
  Download,
  ScanLine,
  Sliders,
} from "lucide-react";

const features = [
  {
    icon: Cuboid,
    title: "Interactive 3D Visualisation",
    description:
      "Explore plant geometry with full 3D point cloud rendering. Overlay spectral bands and indices directly onto plant structure for intuitive spatial analysis.",
    gradient: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/30",
    iconColor: "text-green-400",
  },
  {
    icon: ScanLine,
    title: "Hyperspectral Band Mapping",
    description:
      "Process 400+ spectral bands with automated white/dark calibration. Compute NDVI, chlorophyll, moisture, and custom spectral indices from raw scan data.",
    gradient: "from-lime-500/20 to-green-500/10",
    border: "border-lime-500/30",
    iconColor: "text-lime-400",
  },
  {
    icon: Microscope,
    title: "Automated Trait Extraction",
    description:
      "Run end-to-end trait extraction pipelines — from raw scan ingestion through background removal to structured, quantitative phenotypic output.",
    gradient: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: BarChart3,
    title: "Phenotype Correlation Engine",
    description:
      "Correlate extracted spectral and structural traits with agronomic features or breeding targets. Identify meaningful genotype–environment interactions.",
    gradient: "from-teal-500/20 to-cyan-500/10",
    border: "border-teal-500/30",
    iconColor: "text-teal-400",
  },
  {
    icon: Sliders,
    title: "Calibration Workflows",
    description:
      "Built-in white reference and dark current calibration pipelines ensure measurement accuracy and reproducibility across different scanning conditions.",
    gradient: "from-green-600/20 to-green-400/10",
    border: "border-green-600/30",
    iconColor: "text-green-300",
  },
  {
    icon: Download,
    title: "Exportable Research Outputs",
    description:
      "Generate publication-ready tables, plots, and reports. Export processed data in standard formats compatible with common research and breeding workflows.",
    gradient: "from-lime-600/20 to-lime-400/10",
    border: "border-lime-600/30",
    iconColor: "text-lime-300",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#050a0a]" />
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(34,197,94,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            Core Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
              Plant Phenomics
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-green-100/50 max-w-xl mx-auto text-base"
          >
            A complete desktop analytics toolkit built for plant scientists and breeders.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group p-6 rounded-2xl border ${feature.border} bg-gradient-to-br ${feature.gradient} hover:shadow-xl hover:shadow-green-950/40 transition-all duration-300 cursor-default`}
            >
              <div className="w-10 h-10 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className={`w-5 h-5 ${feature.iconColor}`} strokeWidth={1.8} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-green-100/55 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
