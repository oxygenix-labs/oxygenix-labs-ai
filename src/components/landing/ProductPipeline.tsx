"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

const steps = [
    { id: "01", title: "Trait Discovery", desc: "AI scans global germplasm data to identify high-potential genetic traits." },
    { id: "02", title: "Gene Identification", desc: "Deep learning models pinpoint exact gene sequences responsible for target traits." },
    { id: "03", title: "CRISPR Strategy", desc: "Automated design of gRNA and repair templates for precise editing." },
    { id: "04", title: "Hybrid Simulation", desc: "In-silico breeding simulations predict phenotypic outcomes across generations." },
    { id: "05", title: "Tissue Culture", desc: "Robotic protocol optimization for successful plant regeneration." },
    { id: "06", title: "Research Report", desc: "Comprehensive data visualization and regulatory compliance documentation." },
];

export default function ProductPipeline() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    return (
        <section className="py-24 bg-background relative z-20">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">System Architecture</h2>
                    <p className="text-gray-400 max-w-xl">An end-to-end computational pipeline for next-generation plant breeding.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2 hidden md:block" />

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative flex-1"
                                onMouseEnter={() => setActiveStep(index)}
                                onMouseLeave={() => setActiveStep(null)}
                                style={{ zIndex: activeStep === index ? 50 : 1 }}
                            >
                                <div className="flex flex-col items-center text-center">

                                    {/* Node */}
                                    <div className={clsx(
                                        "w-4 h-4 rounded-full border-2 transition-all duration-300 relative z-20 mb-6",
                                        activeStep === index
                                            ? "bg-primary border-primary shadow-[0_0_20px_rgba(15,175,154,0.6)] scale-125"
                                            : "bg-background border-white/20 group-hover:border-primary/50"
                                    )}>
                                        {activeStep === index && (
                                            <motion.div
                                                layoutId="pulse"
                                                className="absolute inset-0 rounded-full bg-primary/30 animate-ping"
                                            />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <h3 className={clsx(
                                        "text-sm font-medium uppercase tracking-wider transition-colors duration-300",
                                        activeStep === index ? "text-primary-glow" : "text-gray-500 group-hover:text-gray-300"
                                    )}>
                                        {step.title}
                                    </h3>

                                    {/* Description Panel (Absolute) */}
                                    <div className={clsx(
                                        "absolute top-14 w-72 h-auto min-h-[120px] bg-card border border-white/10 p-5 rounded-lg backdrop-blur-md transition-all duration-300 pointer-events-none opacity-0 translate-y-2 z-50 flex flex-col justify-center",
                                        activeStep === index && "opacity-100 translate-y-0",
                                        index === 0 ? "left-0 origin-top-left" :
                                            index === steps.length - 1 ? "right-0 origin-top-right" :
                                                "left-1/2 -translate-x-1/2 origin-top"
                                    )}>
                                        <div className="text-xs text-primary mb-2 font-mono">{step.id}</div>
                                        <p className="text-sm text-gray-300 leading-relaxed">{step.desc}</p>
                                    </div>

                                </div>

                                {/* Arrow for mobile or visual flow */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden absolute left-2 top-8 w-[2px] h-8 bg-white/10 mx-auto right-0" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
