"use client";

import { motion } from "framer-motion";
import { Scissors, Repeat, ArrowUpCircle, Ban } from "lucide-react";
import clsx from "clsx";

interface StrategySelectorProps {
    selectedStrategy: string;
    onSelect: (id: string) => void;
}

const strategies = [
    {
        id: "knockout",
        title: "Knockout",
        description: "Disrupt gene function via INDELs.",
        icon: Ban,
        color: "text-red-400",
        bg: "bg-red-500/10",
        border: "border-red-500/20"
    },
    {
        id: "knockin",
        title: "Knock-in",
        description: "Insert precise sequence via HDR.",
        icon: Repeat,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        id: "upregulation",
        title: "Upregulation",
        description: "Enhance expression via CRISPRa.",
        icon: ArrowUpCircle,
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/20"
    },
    {
        id: "interference",
        title: "Interference",
        description: "Repress transcription via CRISPRi.",
        icon: Scissors,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
    },
];

export default function StrategySelector({ selectedStrategy, onSelect }: StrategySelectorProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {strategies.map((strategy, i) => {
                const isSelected = selectedStrategy === strategy.id;
                return (
                    <motion.button
                        key={strategy.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => onSelect(strategy.id)}
                        className={clsx(
                            "relative p-4 rounded-2xl text-left transition-all duration-300 border group",
                            isSelected
                                ? `bg-[#0A0F0D] ${strategy.border} ring-1 ring-offset-0 ${strategy.border.replace('border', 'ring')}`
                                : "bg-[#0A0F0D] border-white/5 hover:border-white/10 hover:bg-white/5"
                        )}
                    >
                        {/* Selection Indicator */}
                        {isSelected && (
                            <motion.div
                                layoutId="selection-ring"
                                className="absolute inset-0 border-2 rounded-xl pointer-events-none"
                                style={{ borderColor: 'currentColor' }}
                            />
                        )}

                        <div className={clsx(
                            "p-2 rounded-lg w-fit mb-3 transition-colors",
                            isSelected ? strategy.bg : "bg-white/5 group-hover:bg-white/10"
                        )}>
                            <strategy.icon className={clsx("w-5 h-5", strategy.color)} />
                        </div>
                        <h3 className={clsx(
                            "font-semibold mb-1 transition-colors",
                            isSelected ? "text-white" : "text-gray-300 group-hover:text-white"
                        )}>
                            {strategy.title}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            {strategy.description}
                        </p>
                    </motion.button>
                );
            })}
        </div>
    );
}
