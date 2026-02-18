"use client";

import { motion } from "framer-motion";
import { Check, Target, PenTool, Truck, Sprout, ClipboardCheck } from "lucide-react";
import clsx from "clsx";

const steps = [
    { id: 1, label: "Target ID", icon: Target },
    { id: 2, label: "gRNA Design", icon: PenTool },
    { id: 3, label: "Delivery", icon: Truck },
    { id: 4, label: "Regeneration", icon: Sprout },
    { id: 5, label: "Validation", icon: ClipboardCheck },
];

export default function WorkflowStepper({ currentStep = 2 }: { currentStep?: number }) {
    return (
        <div className="bg-[#0A0F0D] border border-white/5 rounded-2xl p-8 overflow-hidden">
            <h3 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">Experimental Workflow</h3>

            <div className="relative flex justify-between">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="h-full bg-primary"
                    />
                </div>

                {steps.map((step, i) => {
                    const isCompleted = step.id < currentStep;
                    const isCurrent = step.id === currentStep;

                    return (
                        <div key={step.id} className="relative z-10 flex flex-col items-center gap-3">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className={clsx(
                                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 bg-[#0A0F0D]",
                                    isCompleted ? "border-primary bg-primary text-black" :
                                        isCurrent ? "border-primary text-primary shadow-[0_0_15px_rgba(16,185,129,0.3)]" :
                                            "border-white/10 text-gray-600"
                                )}
                            >
                                {isCompleted ? <Check className="w-5 h-5" /> : <step.icon className="w-4 h-4" />}
                            </motion.div>
                            <span className={clsx(
                                "text-xs font-medium transition-colors duration-300",
                                isCompleted || isCurrent ? "text-white" : "text-gray-600"
                            )}>
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
