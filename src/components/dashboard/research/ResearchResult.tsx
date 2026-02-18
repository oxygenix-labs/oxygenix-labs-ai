"use client";

import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, TrendingUp, Binary, FileJson } from "lucide-react";

interface ResearchResultProps {
    data: any;
}

export default function ResearchResult({ data }: ResearchResultProps) {
    if (!data) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-4xl mx-auto mt-8 space-y-6"
        >
            <div className="bg-[#0A0F0D] border border-white/5 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-500/10 rounded-lg">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Analysis Complete</h3>
                            <p className="text-xs text-gray-400">ID: {data.id}</p>
                        </div>
                    </div>
                    <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/20">
                        Confidence: {data.confidence}%
                    </div>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Key Findings */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" /> Key Predictions
                        </h4>
                        <div className="space-y-3">
                            {data.predictions.map((pred: any, i: number) => (
                                <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-white">{pred.label}</span>
                                        <span className="text-xs text-primary">{pred.probability}%</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary rounded-full" style={{ width: `${pred.probability}%` }}></div>
                                    </div>
                                    <p className="mt-2 text-xs text-gray-400">{pred.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Genomic Insights */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider flex items-center gap-2">
                            <Binary className="w-4 h-4" /> Genomic Markers
                        </h4>
                        <div className="bg-black/40 rounded-lg p-4 font-mono text-xs text-gray-300 border border-white/5 h-[200px] overflow-y-auto custom-scrollbar">
                            {data.markers.map((marker: string, i: number) => (
                                <div key={i} className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
                                    <span className="text-blue-400">{marker.split(":")[0]}</span>
                                    <span className="text-gray-500">{marker.split(":")[1]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Raw Data View */}
                <div className="bg-black/60 p-4 border-t border-white/5">
                    <h4 className="text-xs font-medium text-gray-500 mb-2 flex items-center gap-2">
                        <FileJson className="w-3 h-3" /> Raw JSON Output
                    </h4>
                    <pre className="text-[10px] text-gray-400 font-mono overflow-x-auto p-2 bg-black/40 rounded border border-white/5">
                        {JSON.stringify(data.rawData, null, 2)}
                    </pre>
                </div>
            </div>
        </motion.div>
    );
}
