"use client";

import ParentCard from "@/components/dashboard/hybrid/ParentCard";
import CompatibilityGauge from "@/components/dashboard/hybrid/CompatibilityGauge";
import GenerationTimeline from "@/components/dashboard/hybrid/GenerationTimeline";
import { ArrowRight } from "lucide-react";

const parentA = {
    name: "DroughtKing A",
    variety: "Zea mays L.",
    traits: ["Drought Tolerance", "Short Stature"],
    geneticMarkers: 1450,
    yieldScore: 88,
    image: "/placeholder-a.jpg"
};

const parentB = {
    name: "YieldMax B",
    variety: "Zea mays L.",
    traits: ["High Kernel Count", "Disease Resistance"],
    geneticMarkers: 1200,
    yieldScore: 94,
    image: "/placeholder-b.jpg"
};

export default function HybridDesignPage() {
    return (
        <div className="max-w-6xl mx-auto pb-20 space-y-12">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Hybrid Intelligence</h1>
                    <p className="text-gray-400">Predict breeding outcomes and selection pathways.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-primary text-[#0A0F0D] font-bold rounded-lg hover:bg-white transition-colors">
                    Run Simulation <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            {/* Parent Selection & Compatibility */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Connecting Background Line (Hypothetical) */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-blue-500/20 via-white/10 to-pink-500/20 -z-10 hidden md:block" />

                <ParentCard label="Parent A" data={parentA} color="blue" />

                <div className="flex justify-center py-8 md:py-0">
                    <CompatibilityGauge score={92} />
                </div>

                <ParentCard label="Parent B" data={parentB} color="pink" />
            </div>

            {/* Timeline */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <GenerationTimeline />
                </div>
                <div className="lg:col-span-1 space-y-6">
                    {/* Insights Panel */}
                    <div className="bg-[#0A0F0D] border border-white/5 rounded-2xl p-6">
                        <h3 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">Predictive Insights</h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg">
                                <div className="text-2xl font-bold text-primary mb-1">+18%</div>
                                <div className="text-xs text-gray-400">Expected Yield Increase (F1)</div>
                            </div>
                            <div className="p-4 bg-purple-500/5 border border-purple-500/10 rounded-lg">
                                <div className="text-2xl font-bold text-purple-400 mb-1">High</div>
                                <div className="text-xs text-gray-400">Transgressive Segregation Probability (F2)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
