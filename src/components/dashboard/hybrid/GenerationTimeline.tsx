"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sprout, Filter, Microscope } from "lucide-react";
import clsx from "clsx";

const generations = [
    {
        id: "F1",
        label: "F1 Generation",
        description: "Uniform heterozygotes with superior yield.",
        traits: ["High Yield Heterosis", "Uniformity"],
        strategy: "Self-pollination to segregate traits in F2."
    },
    {
        id: "F2",
        label: "F2 Generation",
        description: "Segregating population displaying trait variation.",
        traits: ["Trait Segregation", "Genetic Variance"],
        strategy: "Select top 5% for drought tolerance markers."
    },
    {
        id: "F3",
        label: "F3 Generation",
        description: "Selected lines advancing towards homozygosity.",
        traits: ["Fixed Traits", "Reduced Heterozygosity"],
        strategy: "Line validation in multi-location trials."
    }
];

export default function GenerationTimeline() {
    const [expandedGen, setExpandedGen] = useState<string | null>("F1");

    return (
        <div className="space-y-6">
            <h3 className="text-sm font-medium text-white uppercase tracking-wider flex items-center gap-2">
                <Sprout className="w-4 h-4 text-primary" />
                Generation Timeline
            </h3>

            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-6 left-6 bottom-6 w-0.5 bg-white/10" />

                <div className="space-y-8">
                    {generations.map((gen, i) => (
                        <div key={gen.id} className="relative pl-12 group">
                            {/* Node */}
                            <div
                                className={clsx(
                                    "absolute left-4 top-1.5 w-4 h-4 rounded-full border-2 transition-colors z-10 -translate-x-1/2 cursor-pointer",
                                    expandedGen === gen.id
                                        ? "bg-[#0A0F0D] border-primary shadow-[0_0_0_4px_rgba(16,185,129,0.1)]"
                                        : "bg-[#0A0F0D] border-white/20 group-hover:border-white/40"
                                )}
                                onClick={() => setExpandedGen(expandedGen === gen.id ? null : gen.id)}
                            />

                            <div
                                className="bg-[#0A0F0D] border border-white/5 rounded-xl p-4 cursor-pointer hover:border-white/10 transition-colors"
                                onClick={() => setExpandedGen(expandedGen === gen.id ? null : gen.id)}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className={clsx("font-bold text-lg", expandedGen === gen.id ? "text-primary" : "text-white")}>
                                        {gen.label}
                                    </h4>
                                    <ChevronDown
                                        className={clsx(
                                            "w-5 h-5 text-gray-500 transition-transform duration-300",
                                            expandedGen === gen.id ? "rotate-180" : ""
                                        )}
                                    />
                                </div>
                                <p className="text-sm text-gray-400">{gen.description}</p>

                                <AnimatePresence>
                                    {expandedGen === gen.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 mt-4 border-t border-white/5 space-y-3">
                                                <div className="space-y-1">
                                                    <div className="text-xs text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                                                        <Microscope className="w-3 h-3" /> Expected Phenotypes
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {gen.traits.map(t => (
                                                            <span key={t} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300">{t}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="text-xs text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                                                        <Filter className="w-3 h-3" /> Selection Strategy
                                                    </div>
                                                    <p className="text-sm text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5">
                                                        {gen.strategy}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
