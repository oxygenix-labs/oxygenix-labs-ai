"use client";

import { Check, Zap, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PlanCard() {
    const usage = 8540;
    const limit = 10000;
    const percentage = (usage / limit) * 100;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0A0F0D] border border-white/5 rounded-2xl p-8 relative overflow-hidden group"
        >
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                    <div className="text-sm font-medium text-primary mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4" /> Current Plan
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-1">Pro Scientist</h2>
                    <p className="text-gray-400">$49 <span className="text-sm text-gray-500">/ month</span></p>
                </div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                    <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
                    </span>
                </div>
            </div>

            {/* Usage Stats */}
            <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Monthly Queries</span>
                    <span className="text-white font-mono">{usage.toLocaleString()} / {limit.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-emerald-600 rounded-full"
                    />
                </div>
                <p className="text-xs text-gray-500 mt-2">Resets on Nov 1, 2025</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
                {["Unlimited Projects", "Advanced AI Models (GPT-4, Claude 3.5)", "Priority Support", "API Access"].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-primary" />
                        </div>
                        {feature}
                    </li>
                ))}
            </ul>

            <button className="w-full py-3 bg-gradient-to-r from-primary to-emerald-600 text-black font-bold rounded-xl relative overflow-hidden group/btn hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                    Upgrade to Enterprise <ArrowUpRight className="w-4 h-4" />
                </span>
            </button>
        </motion.div>
    );
}
