"use client";

import { useState } from "react";
import SimulationConfig from "@/components/dashboard/simulation/SimulationConfig";
import SimulationResults from "@/components/dashboard/simulation/SimulationResults";
import { motion, AnimatePresence } from "framer-motion";
import { Activity } from "lucide-react";

export default function SimulationPage() {
    const [isRunning, setIsRunning] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleRun = () => {
        setIsRunning(true);
        setShowResults(false);
        setProgress(0);

        // Simulate progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsRunning(false);
                    setShowResults(true);
                    return 100;
                }
                return prev + 5;
            });
        }, 100);
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-20">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                        Genomic Simulation Engine
                        <span className="px-2 py-1 bg-primary/10 rounded-full text-xs font-mono text-primary border border-primary/20">v2.4.0</span>
                    </h1>
                    <p className="text-gray-400">Predictive modeling for complex trait introgression.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-12rem)]">
                {/* Left Panel: Configuration */}
                <div className="lg:col-span-3">
                    <SimulationConfig onRun={handleRun} isRunning={isRunning} />
                </div>

                {/* Right Panel: Visualization */}
                <div className="lg:col-span-9 bg-[#0A0F0D]/50 border border-white/5 rounded-2xl p-8 relative overflow-hidden flex flex-col">

                    {/* Empty State / Progress Overlay */}
                    <AnimatePresence>
                        {(!showResults && !isRunning) && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10"
                            >
                                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                                    <Activity className="w-10 h-10 text-gray-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-300 mb-2">Ready to Simulate</h3>
                                <p className="text-gray-500 max-w-sm">Configure parameters on the left to start a new predictive breeding simulation.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Progress Bar */}
                    <AnimatePresence>
                        {isRunning && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0F0D]/80 backdrop-blur-sm z-20 space-y-6"
                            >
                                <div className="w-64 space-y-2">
                                    <div className="flex justify-between text-xs font-mono text-primary">
                                        <span>RUNNING_SIMULATION</span>
                                        <span>{progress}%</span>
                                    </div>
                                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-primary"
                                            animate={{ width: `${progress}%` }}
                                        />
                                    </div>
                                </div>
                                <div className="font-mono text-sm text-gray-400">
                                    Generating G{Math.floor((progress / 100) * 10)} populations...
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Results */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {showResults && <SimulationResults />}
                    </div>
                </div>
            </div>
        </div>
    );
}
