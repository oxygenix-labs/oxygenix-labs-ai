"use client";

import { useState } from "react";
import { Copy, Scissors, Zap, Save, RefreshCw } from "lucide-react";
import clsx from "clsx";

const sequenceData = "ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAGCTAGCTAGCTAGCTAGCTAGCATGGC";
const rows = 12;
const cols = 40;

// Generate fake sequence data
const generateSequence = (rows: number, cols: number) => {
    const bases = ['A', 'T', 'G', 'C'];
    let seq = [];
    for (let i = 0; i < rows; i++) {
        let row = "";
        for (let j = 0; j < cols; j++) {
            row += bases[Math.floor(Math.random() * bases.length)];
        }
        seq.push(row);
    }
    return seq;
};

export default function GeneEditing() {
    const [sequence] = useState(generateSequence(rows, cols));
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-6">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-1">CRISPR Design Tool</h1>
                    <p className="text-sm text-gray-500 font-mono">Target: Glycine_max_Chr12_v4.2</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white rounded hover:bg-white/10 transition-colors text-sm">
                        <RefreshCw className="w-4 h-4" />
                        Reset View
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-[#0A0F0D] font-medium rounded hover:bg-white transition-colors text-sm">
                        <Save className="w-4 h-4" />
                        Save Design
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Main Sequence Viewer */}
                <div className="lg:col-span-2 bg-[#0A0F0D] border border-white/5 rounded-xl overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                        <h3 className="text-sm font-medium text-white flex items-center gap-2">
                            <Scissors className="w-4 h-4 text-primary" />
                            Sequence Editor
                        </h3>
                        <div className="flex gap-2 text-xs text-gray-500">
                            <span className="px-2 py-1 bg-black/20 rounded">Pos: 14,291 - 14,800</span>
                            <span className="px-2 py-1 bg-black/20 rounded">Zoom: 100%</span>
                        </div>
                    </div>

                    <div className="p-6 font-mono text-sm leading-loose tracking-widest overflow-x-auto">
                        {sequence.map((row, i) => (
                            <div key={i} className="flex gap-4 group">
                                <span className="text-gray-600 select-none w-12 text-right">{i * cols + 1}</span>
                                <div className="flex gap-[2px]">
                                    {row.split("").map((base, j) => (
                                        <span
                                            key={j}
                                            className={clsx(
                                                "w-6 h-6 flex items-center justify-center rounded transition-colors cursor-pointer hover:bg-white/10",
                                                base === 'A' ? "text-red-400" :
                                                    base === 'T' ? "text-blue-400" :
                                                        base === 'G' ? "text-yellow-400" : "text-green-400"
                                            )}
                                        >
                                            {base}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools Panel */}
                <div className="space-y-6">

                    {/* Guide RNA Candidates */}
                    <div className="bg-[#0A0F0D] border border-white/5 rounded-xl p-6">
                        <h3 className="text-sm font-medium text-white mb-4">Predicted Off-Targets</h3>
                        <div className="space-y-3">
                            {[
                                { seq: "GTGAC...TTACG", score: 98, risk: "Low" },
                                { seq: "AACGT...GGCTA", score: 85, risk: "Medium" },
                                { seq: "CCGAT...TTAGC", score: 92, risk: "Low" }
                            ].map((target, i) => (
                                <div key={i} className="p-3 bg-white/5 rounded border border-white/5 hover:border-primary/50 transition-colors cursor-pointer group">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-xs font-mono text-gray-400">{target.seq}</span>
                                        <span className={clsx(
                                            "text-[10px] px-1.5 py-0.5 rounded uppercase font-medium",
                                            target.risk === "Low" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"
                                        )}>{target.risk}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary" style={{ width: `${target.score}%` }} />
                                        </div>
                                        <span className="text-xs text-primary">{target.score}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Properties */}
                    <div className="bg-[#0A0F0D] border border-white/5 rounded-xl p-6">
                        <h3 className="text-sm font-medium text-white mb-4">Properties</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-white/5 rounded">
                                <div className="text-xs text-gray-500 mb-1">GC Content</div>
                                <div className="text-lg font-mono text-white">42.8%</div>
                            </div>
                            <div className="p-3 bg-white/5 rounded">
                                <div className="text-xs text-gray-500 mb-1">Melting Temp</div>
                                <div className="text-lg font-mono text-white">58.4°C</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
