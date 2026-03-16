"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Scan, Layers, FlaskConical } from "lucide-react";

const floatingBadges = [
  { icon: Scan, label: "3D Point Cloud", color: "from-green-500/20 to-emerald-500/10", border: "border-green-500/30", x: "-left-8 top-24", delay: 0 },
  { icon: Layers, label: "Hyperspectral", color: "from-lime-500/20 to-green-500/10", border: "border-lime-500/30", x: "-right-8 top-40", delay: 0.3 },
  { icon: FlaskConical, label: "Trait Extraction", color: "from-emerald-500/20 to-teal-500/10", border: "border-emerald-500/30", x: "-left-4 bottom-24", delay: 0.6 },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050a0a] via-[#071510] to-[#050a0a]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-green-500/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-lime-500/4 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/4 blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-green-500/10"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-green-500/15"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-300 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Australian Plant Phenomics Network · ANU Node
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.05] tracking-tight"
        >
          <span className="text-white">Pheno</span>
          <span className="bg-gradient-to-r from-green-400 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
            Fusion
          </span>
          <span className="text-white">3D</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-2xl md:text-3xl font-light text-green-300/80 mb-4 tracking-wide"
        >
          Integrated 3D–Hyperspectral Plant Analytics
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-green-100/50 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Extract structural and spectral traits from plant scans. Visualise plants in 3D,
          derive key hyperspectral indices, and correlate traits with phenotypes to
          accelerate plant science and breeding decisions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
        >
          <a
            href="#features"
            className="group px-8 py-3.5 bg-gradient-to-r from-green-500 to-lime-500 text-black font-bold rounded-full hover:shadow-xl hover:shadow-green-500/30 hover:scale-105 transition-all duration-300 text-sm"
          >
            Explore Features
            <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
          <a
            href="#pipeline"
            className="px-8 py-3.5 border border-green-500/40 text-green-300 font-semibold rounded-full hover:bg-green-500/10 hover:border-green-400/60 transition-all duration-300 text-sm backdrop-blur-sm"
          >
            View Pipeline
          </a>
        </motion.div>

        {/* Hero visual: mock computer with spectral data */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Floating badges */}
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: badge.x.includes("left") ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + badge.delay }}
              className={`absolute ${badge.x} hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl border ${badge.border} bg-gradient-to-br ${badge.color} backdrop-blur-md z-20`}
            >
              <badge.icon className="w-4 h-4 text-green-300" />
              <span className="text-xs text-green-200 font-medium whitespace-nowrap">{badge.label}</span>
            </motion.div>
          ))}

          {/* Main dashboard mockup */}
          <div className="relative rounded-2xl overflow-hidden border border-green-500/20 shadow-2xl shadow-green-950/50 bg-[#0a1510]">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-green-900/40 bg-[#0d1a12]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="ml-3 text-xs text-green-400/60 font-mono">PhenoFusion3D — Plant Scan Analysis</div>
            </div>

            {/* Dashboard content */}
            <div className="grid grid-cols-3 gap-0 h-64 md:h-80">
              {/* Sidebar */}
              <div className="border-r border-green-900/30 p-3 flex flex-col gap-2 bg-[#080f0b]">
                <div className="text-[10px] text-green-500/60 uppercase tracking-widest mb-1 font-semibold">Plant Scans</div>
                {["Wheat_Scan_001", "Barley_Phenotype_07", "Canola_Trial_B", "Sorghum_Row_12"].map((name, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                    className={`text-[10px] px-2 py-1.5 rounded-md font-mono cursor-pointer ${i === 0 ? "bg-green-500/20 text-green-300 border border-green-500/30" : "text-green-100/40 hover:bg-green-900/20"}`}
                  >
                    {name}
                  </motion.div>
                ))}
              </div>

              {/* 3D Viewport */}
              <div className="col-span-2 relative overflow-hidden">
                {/* Fake 3D plant render */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a1510] to-[#050c08]">
                  {/* Spectral color bands */}
                  {mounted && Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 2 + i * 0.2, repeat: Infinity, delay: i * 0.1 }}
                      className="absolute"
                      style={{
                        left: `${10 + i * 4.2}%`,
                        bottom: "20%",
                        width: "3px",
                        height: `${30 + Math.sin(i * 0.8) * 25}%`,
                        background: `hsl(${90 + i * 10}, 70%, 55%)`,
                        borderRadius: "2px",
                        filter: "blur(1px)",
                        opacity: 0.5,
                      }}
                    />
                  ))}
                  {/* Fake plant outline */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {mounted && (
                      <motion.div
                        animate={{ rotateY: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="relative w-24 h-40"
                      >
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-28 bg-gradient-to-t from-green-600 to-green-400 rounded-full opacity-70" />
                        <div className="absolute bottom-16 left-1/2 -translate-x-[-4px] w-20 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full rotate-[-30deg] opacity-60" />
                        <div className="absolute bottom-20 left-1/2 -translate-x-[20px] w-16 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent rounded-full rotate-[25deg] opacity-60" />
                        <div className="absolute bottom-26 left-1/2 -translate-x-[2px] w-12 h-1 bg-gradient-to-r from-transparent via-green-300 to-transparent rounded-full rotate-[-15deg] opacity-60" />
                        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-lime-400/30 blur-sm" />
                      </motion.div>
                    )}
                  </div>

                  {/* Metadata overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                    {[
                      { label: "NDVI", value: "0.72", color: "text-lime-400" },
                      { label: "Chlorophyll", value: "42.3", color: "text-green-400" },
                      { label: "LAI", value: "3.8", color: "text-emerald-400" },
                    ].map((m) => (
                      <div key={m.label} className="flex-1 bg-black/40 backdrop-blur-sm rounded-lg px-2 py-1.5 border border-green-900/40">
                        <div className="text-[9px] text-green-100/50 uppercase tracking-wider">{m.label}</div>
                        <div className={`text-sm font-bold font-mono ${m.color}`}>{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow under dashboard */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-green-500/20 blur-2xl rounded-full" />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-green-400/50 hover:text-green-400 transition group"
      >
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
