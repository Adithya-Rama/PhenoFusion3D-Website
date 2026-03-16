"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const spectralBands = [
  { name: "RGB", range: "400–700nm", color: "#86efac", description: "Visible light composite" },
  { name: "NIR", range: "700–900nm", color: "#4ade80", description: "Near-infrared reflectance" },
  { name: "SWIR", range: "900–1700nm", color: "#22c55e", description: "Short-wave infrared" },
  { name: "NDVI", range: "Derived Index", color: "#a3e635", description: "Vegetation index" },
  { name: "ChlIdx", range: "Derived Index", color: "#84cc16", description: "Chlorophyll content" },
  { name: "Water", range: "Derived Index", color: "#65a30d", description: "Water content" },
];

const viewModes = ["3D Point Cloud", "Spectral Overlay", "Trait Map", "Time Series"];

export default function Visualisation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeMode, setActiveMode] = useState(0);
  const [activeBand, setActiveBand] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="visualisation" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#050a0a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-green-500/3 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            Interactive Visualisation
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            See Plants in a New{" "}
            <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
              Dimension
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-green-100/50 max-w-xl mx-auto text-base"
          >
            Fuse 3D geometry with spectral imaging to reveal invisible plant traits.
          </motion.p>
        </div>

        {/* Main visualisation panel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="rounded-2xl border border-green-500/20 overflow-hidden shadow-2xl shadow-green-950/40"
        >
          {/* Control bar */}
          <div className="bg-[#0d1a12] border-b border-green-900/40 px-6 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {viewModes.map((mode, i) => (
                <button
                  key={mode}
                  onClick={() => setActiveMode(i)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    activeMode === i
                      ? "bg-green-500/20 text-green-300 border border-green-500/40"
                      : "text-green-100/40 hover:text-green-300 hover:bg-green-900/20"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-green-400/60">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Live Preview — Wheat_Scan_001
            </div>
          </div>

          {/* Viewport */}
          <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[420px]">
            {/* Band selector sidebar */}
            <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-green-900/30 bg-[#080f0b] p-4">
              <div className="text-[10px] text-green-500/60 uppercase tracking-widest mb-3 font-semibold">
                Spectral Bands
              </div>
              <div className="space-y-1.5">
                {spectralBands.map((band, i) => (
                  <button
                    key={band.name}
                    onClick={() => setActiveBand(i)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-200 ${
                      activeBand === i
                        ? "bg-green-500/15 border border-green-500/30"
                        : "hover:bg-green-900/20"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-sm flex-shrink-0"
                        style={{ backgroundColor: band.color, opacity: activeBand === i ? 1 : 0.4 }}
                      />
                      <div>
                        <div className={`text-xs font-bold ${activeBand === i ? "text-green-300" : "text-green-100/50"}`}>
                          {band.name}
                        </div>
                        <div className="text-[9px] text-green-100/30 mt-0.5">{band.range}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Band info */}
              <div className="mt-4 p-3 rounded-xl bg-green-500/5 border border-green-500/15">
                <div className="text-[10px] text-green-400/60 uppercase tracking-wider mb-1">Active Band</div>
                <div className="text-green-300 text-sm font-bold">{spectralBands[activeBand].name}</div>
                <div className="text-green-100/40 text-xs mt-1">{spectralBands[activeBand].description}</div>
              </div>
            </div>

            {/* 3D viewport */}
            <div className="lg:col-span-3 relative bg-gradient-to-br from-[#050c08] to-[#030806] overflow-hidden">
              {/* Axis labels */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-green-500/40">X: 0.00  Y: 0.00  Z: 0.00</div>
              <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[10px] font-mono text-green-500/40">
                <span>156,892 pts</span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              </div>

              {/* Spectral visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Point cloud dots */}
                <div className="relative w-72 h-72">
                  {mounted && Array.from({ length: 180 }).map((_, i) => {
                    const angle = (i / 180) * Math.PI * 2;
                    const radius = 40 + Math.sin(i * 0.7) * 50 + Math.cos(i * 1.3) * 30;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius * 0.4 + (i % 7) * 4;
                    const hue = 90 + activeBand * 20 + i * 0.5;
                    return (
                      <motion.div
                        key={i}
                        animate={{ opacity: [0.4, 0.9, 0.4] }}
                        transition={{ duration: 2 + (i % 5) * 0.3, repeat: Infinity, delay: i * 0.01 }}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                          left: `${50 + x / 2.4}%`,
                          top: `${50 - y / 2.4}%`,
                          backgroundColor: `hsl(${hue}, 70%, 55%)`,
                          boxShadow: `0 0 4px hsl(${hue}, 70%, 55%)`,
                        }}
                      />
                    );
                  })}
                  {/* Center plant silhouette */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {mounted && (
                      <motion.div
                        animate={{ rotateY: [0, 360] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-32 relative"
                      >
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-24 bg-gradient-to-t from-green-700 to-green-400 rounded-full opacity-80" />
                        <div className="absolute bottom-12 left-1/2 translate-x-0 w-14 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full -rotate-30 opacity-70" />
                        <div className="absolute bottom-16 left-1/2 -translate-x-3 w-12 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent rounded-full rotate-25 opacity-70" />
                        <div className="absolute bottom-20 left-1/2 w-10 h-1 bg-gradient-to-r from-transparent via-green-300 to-transparent rounded-full -rotate-15 opacity-60" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full blur-sm opacity-40" style={{ background: `hsl(${90 + activeBand * 20}, 70%, 55%)` }} />
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              {/* Spectral scale bar */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-green-100/40 font-mono">Low</span>
                  <div className="flex-1 h-2 rounded-full overflow-hidden" style={{
                    background: `linear-gradient(to right, hsl(240, 60%, 30%), hsl(${90 + activeBand * 20}, 80%, 50%), hsl(${110 + activeBand * 20}, 90%, 65%))`
                  }} />
                  <span className="text-[10px] text-green-100/40 font-mono">High</span>
                </div>
                <div className="text-center text-[10px] text-green-500/40 mt-1 font-mono">
                  {spectralBands[activeBand].name} Index
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature callouts */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {[
            { title: "360° Rotation", desc: "Freely rotate and zoom around the full 3D plant model" },
            { title: "Per-Point Spectra", desc: "Click any point to inspect its full spectral signature" },
            { title: "Time-Series Playback", desc: "Replay plant growth across multiple scan timepoints" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="p-4 rounded-xl border border-green-500/15 bg-[#0a1510]"
            >
              <div className="text-green-300 font-semibold text-sm mb-1">{item.title}</div>
              <div className="text-green-100/40 text-xs">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
