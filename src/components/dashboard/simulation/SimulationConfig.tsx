"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Play, CloudRain, Clock } from "lucide-react";
import clsx from "clsx";

interface SimulationConfigProps {
    onRun: () => void;
    isRunning: boolean;
}

export default function SimulationConfig({ onRun, isRunning }: SimulationConfigProps) {
    const [config, setConfig] = useState({
        crop: "Wheat",
        trait: "Drought Tolerance",
        scenario: "RCP 4.5 (2050)",
        generations: 10
    });

    return (
        <div className="bg-[#0A0F0D] border border-white/5 rounded-2xl p-6 h-full flex flex-col">
            <div className="mb-6 flex items-center gap-2 text-white">
                <div className="p-2 bg-primary/10 rounded-lg">
                    <Settings className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-bold text-lg">Configuration</h2>
            </div>

            <div className="space-y-6 flex-1">
                {/* Crop Selection */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Target Crop</label>
                    <select
                        value={config.crop}
                        onChange={(e) => setConfig({ ...config, crop: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors cursor-pointer"
                    >
                        <option>Wheat</option>
                        <option>Maize</option>
                        <option>Rice</option>
                        <option>Soybean</option>
                    </select>
                </div>

                {/* Trait Focus */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Trait Focus</label>
                    <select
                        value={config.trait}
                        onChange={(e) => setConfig({ ...config, trait: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors cursor-pointer"
                    >
                        <option>Drought Tolerance</option>
                        <option>Heat Resistance</option>
                        <option>Salinity Tolerance</option>
                        <option>Nitrogen Use Efficiency</option>
                    </select>
                </div>

                {/* Climate Scenario */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <CloudRain className="w-3 h-3" /> Climate Scenario
                    </label>
                    <select
                        value={config.scenario}
                        onChange={(e) => setConfig({ ...config, scenario: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors cursor-pointer"
                    >
                        <option>RCP 2.6 (Sustainable)</option>
                        <option>RCP 4.5 (Moderate)</option>
                        <option>RCP 8.5 (Extreme)</option>
                    </select>
                </div>

                {/* Generations */}
                <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <Clock className="w-3 h-3" /> Generations
                    </label>
                    <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                        <input
                            type="range"
                            min="5"
                            max="50"
                            value={config.generations}
                            onChange={(e) => setConfig({ ...config, generations: parseInt(e.target.value) })}
                            className="flex-1 accent-primary cursor-pointer"
                        />
                        <span className="text-white font-mono w-8 text-right">{config.generations}</span>
                    </div>
                </div>
            </div>

            {/* Run Button */}
            <div className="mt-8">
                <button
                    onClick={onRun}
                    disabled={isRunning}
                    className={clsx(
                        "w-full group relative overflow-hidden rounded-xl p-[1px] transition-all duration-300",
                        isRunning ? "cursor-not-allowed opacity-70" : "hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                    )}
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10B981_0%,#0A0F0D_50%,#10B981_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center justify-center gap-2 bg-[#0A0F0D] hover:bg-white/5 text-white font-bold py-4 rounded-xl transition-colors border border-white/10 group-hover:border-transparent">
                        <Play className={clsx("w-5 h-5", isRunning ? "animate-spin" : "fill-current")} />
                        {isRunning ? "Simulating..." : "Run Simulation"}
                    </div>
                </button>
            </div>
        </div>
    );
}
