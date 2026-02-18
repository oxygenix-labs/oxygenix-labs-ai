"use client";

import { motion } from "framer-motion";
import { Dna, Fingerprint, Sprout, TrendingUp } from "lucide-react";
import clsx from "clsx";

interface ParentData {
    name: string;
    variety: string;
    traits: string[];
    geneticMarkers: number;
    yieldScore: number; // 0-100
    image: string; // Placeholder for now
}

interface ParentCardProps {
    label: "Parent A" | "Parent B";
    data: ParentData;
    color: "blue" | "pink";
}

export default function ParentCard({ label, data, color }: ParentCardProps) {
    const isBlue = color === "blue";
    const accentColor = isBlue ? "text-blue-400" : "text-pink-400";
    const bgAccent = isBlue ? "bg-blue-500/10" : "bg-pink-500/10";
    const borderAccent = isBlue ? "border-blue-500/20" : "border-pink-500/20";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-[#0A0F0D] border border-white/5 rounded-2xl overflow-hidden relative group"
        >
            {/* Header Badge */}
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${bgAccent} ${accentColor} border ${borderAccent}`}>
                {label}
            </div>

            <div className="p-6 space-y-6">
                {/* Identity */}
                <div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 mb-4 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                        <Sprout className={`w-6 h-6 ${accentColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{data.name}</h3>
                    <p className="text-sm text-gray-500 font-mono">{data.variety}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider">
                            <Fingerprint className="w-3 h-3" /> Markers
                        </div>
                        <div className="text-lg font-mono text-white">{data.geneticMarkers.toLocaleString()}</div>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider">
                            <TrendingUp className="w-3 h-3" /> Yield
                        </div>
                        <div className="text-lg font-mono text-white">{data.yieldScore}/100</div>
                    </div>
                </div>

                {/* Traits */}
                <div className="space-y-2">
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                        <Dna className="w-3 h-3" /> Key Traits
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {data.traits.map((trait, i) => (
                            <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/5">
                                {trait}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Animated Bottom Border */}
            <div className={`h-1 w-full ${isBlue ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent" : "bg-gradient-to-r from-transparent via-pink-500 to-transparent"} opacity-50`} />
        </motion.div>
    );
}
