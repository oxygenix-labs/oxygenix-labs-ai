"use client";

import { motion } from "framer-motion";
import { Play, Pause, RotateCw, Settings, Database, Activity } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";

export default function InteractiveDemo() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-24 bg-background relative z-10 border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Text Content */}
                    <div className="lg:w-1/3 space-y-8">
                        <h2 className="text-4xl font-bold text-white">
                            Simulate <span className="text-primary-glow">Generations</span> in Seconds
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Test millions of genetic variations in-silico before entering the lab. Our physics-based growth engine predicts phenotypic outcomes with 99.4% accuracy.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Real-time phenotype prediction",
                                "Environmental stress modeling",
                                "Yield optimization algorithms",
                                "Multi-generational trait tracking"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_#0FAF9A]" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors">
                            Schedule Deep Dive
                        </button>
                    </div>

                    {/* Interface Mockup */}
                    <div className="lg:w-2/3 w-full relative">
                        <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-20" />

                        <div className="relative bg-[#0A0F0D] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                            {/* Toolbar */}
                            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5 backdrop-blur">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                    </div>
                                    <span className="text-xs text-gray-500 font-mono ml-4">Simulation_v4.2.0</span>
                                </div>
                                <div className="flex gap-4">
                                    <Settings className="w-4 h-4 text-gray-500 hover:text-white transition-colors cursor-pointer" />
                                </div>
                            </div>

                            <div className="grid grid-cols-4 h-[400px]">
                                {/* Sidebar Controls */}
                                <div className="col-span-1 border-r border-white/10 p-4 space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-xs text-gray-500 font-mono">ENVIRONMENT</label>
                                        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                                            <div className="w-3/4 h-full bg-primary" />
                                        </div>
                                        <div className="flex justify-between text-xs text-gray-400">
                                            <span>Temp</span>
                                            <span>24°C</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs text-gray-500 font-mono">HUMIDITY</label>
                                        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                                            <div className="w-1/2 h-full bg-blue-500" />
                                        </div>
                                        <div className="flex justify-between text-xs text-gray-400">
                                            <span>RH</span>
                                            <span>60%</span>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-white/10">
                                        <div className="flex items-center gap-2 text-primary-glow font-mono text-xs">
                                            <Activity className="w-3 h-3" />
                                            <span>System Stable</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Main Viewport */}
                                <div className="col-span-3 relative bg-[url('/grid-pattern.svg')] bg-[length:20px_20px]">
                                    {/* Placeholder Plant Growth Animation */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative w-32 h-64 border-b border-primary/30">
                                            {/* Animated Plant Stalk (Simple CSS representation) */}
                                            <motion.div
                                                animate={{ height: isPlaying ? "100%" : "20%" }}
                                                transition={{ duration: 4, repeat: isPlaying ? Infinity : 0, repeatType: "reverse" }}
                                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-t from-emerald-900 to-primary rounded-t-full shadow-[0_0_15px_rgba(15,175,154,0.5)]"
                                            />

                                            {/* Leaves */}
                                            <motion.div
                                                animate={{ scale: isPlaying ? 1 : 0, opacity: isPlaying ? 1 : 0 }}
                                                transition={{ duration: 2, delay: 1, repeat: isPlaying ? Infinity : 0 }}
                                                className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-primary/20 rounded-full rounded-tr-none -translate-x-full rotate-45 border border-primary/30"
                                            />
                                            <motion.div
                                                animate={{ scale: isPlaying ? 1 : 0, opacity: isPlaying ? 1 : 0 }}
                                                transition={{ duration: 2, delay: 1.5, repeat: isPlaying ? Infinity : 0 }}
                                                className="absolute bottom-2/3 left-1/2 w-6 h-6 bg-primary/20 rounded-full rounded-tl-none rotate-[-45deg] border border-primary/30"
                                            />
                                        </div>
                                    </div>

                                    {/* Video Controls */}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                        <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-primary transition-colors">
                                            {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                                        </button>
                                        <div className="w-32 h-1 bg-white/20 rounded-full">
                                            <motion.div
                                                animate={{ width: isPlaying ? "100%" : "0%" }}
                                                transition={{ duration: 4, repeat: isPlaying ? Infinity : 0 }}
                                                className="h-full bg-primary rounded-full"
                                            />
                                        </div>
                                        <span className="text-xs font-mono text-gray-400">00:04:12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
