"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface CompatibilityGaugeProps {
    score: number; // 0-100
}

export default function CompatibilityGauge({ score }: CompatibilityGaugeProps) {
    const circumference = 2 * Math.PI * 60; // Radius 60
    const offset = circumference - (score / 100) * circumference;

    return (
        <div className="relative flex flex-col items-center justify-center p-8">
            {/* Gauge Graphic */}
            <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Background Ring */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="50%"
                        cy="50%"
                        r="60"
                        fill="transparent"
                        stroke="#1a2522" // Darker shade
                        strokeWidth="12"
                    />
                    {/* Foreground Ring */}
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r="60"
                        fill="transparent"
                        stroke="url(#gradient)"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" /> {/* Blue */}
                            <stop offset="100%" stopColor="#ec4899" /> {/* Pink */}
                        </linearGradient>
                    </defs>
                </svg>

                {/* Inner Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-4xl font-bold text-white mb-1"
                    >
                        {score}%
                    </motion.div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Compatibility
                    </div>
                </div>

                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full border border-white/5 animate-pulse" />
            </div>

            <div className="mt-6 flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">High Heterosis Potential</span>
            </div>
        </div>
    );
}
