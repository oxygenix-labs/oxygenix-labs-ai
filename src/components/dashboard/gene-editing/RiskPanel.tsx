"use client";

import { AlertTriangle, ShieldAlert, Leaf } from "lucide-react";

export default function RiskPanel() {
    return (
        <div className="bg-[#0A0F0D] border border-white/5 rounded-2xl p-6 h-full flex flex-col">
            <h3 className="text-sm font-medium text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-500" />
                Risk Assessment
            </h3>

            <div className="space-y-6 flex-1">
                {/* Off-Target Risk */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Off-Target Potential</span>
                        <span className="text-amber-400 font-medium">Medium</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 w-[45%] rounded-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">2 potential off-targets identified in coding regions.</p>
                </div>

                {/* Regulatory Complexity */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Regulatory Complexity</span>
                        <span className="text-green-400 font-medium">Low</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[20%] rounded-full" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Classified as SDN-1 (non-transgenic).</p>
                </div>

                {/* Environmental Impact */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Environmental Impact</span>
                        <span className="text-blue-400 font-medium">Negligible</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[10%] rounded-full" />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">No gene flow risk to wild relatives detected.</p>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <p className="text-xs text-amber-200">
                        Recommendation: Validate top 3 off-target sites via targeted sequencing.
                    </p>
                </div>
            </div>
        </div>
    );
}
