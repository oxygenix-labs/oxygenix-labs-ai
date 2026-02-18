"use client";

import { motion } from "framer-motion";
import { Dna, MapPin, Activity, HelpCircle } from "lucide-react";

export default function GeneOverview() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0A0F0D] border border-white/5 rounded-2xl p-6 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="flex items-start justify-between relative z-10">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-primary/10 rounded-lg text-primary border border-primary/20">
                            <Dna className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white tracking-tight">OsDREB1A</h2>
                            <p className="text-sm text-gray-500 font-mono">Oryza sativa Dehydration-Responsive Element-Binding Protein 1A</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                            <MapPin className="w-3.5 h-3.5 text-primary" />
                            <span>Chr08: 14,291,000 - 14,295,300</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                            <Activity className="w-3.5 h-3.5 text-emerald-400" />
                            <span>High Expression (Root, Leaf)</span>
                        </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                        A transcription factor that binds to DRE/CRT cis-elements in the promoter regions of various stress-inducible genes.
                        Overexpression significantly improves tolerance to drought, high-salt, and cold stress.
                    </p>
                </div>

                <div className="text-right">
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1 flex items-center justify-end gap-1">
                        Confidence Score <HelpCircle className="w-3 h-3" />
                    </div>
                    <div className="text-4xl font-bold text-primary">98.2%</div>
                    <div className="text-xs text-emerald-500 font-medium mt-1">
                        High Confidence
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
