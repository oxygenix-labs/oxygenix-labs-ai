"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const modules = [
    {
        title: "AI Research Scientist",
        category: "Discovery",
        description: "Autonomous hypothesis generation and literature synthesis for trait discovery.",
        gradient: "from-emerald-900/40 to-black",
    },
    {
        title: "Gene Editing Planner",
        category: "Engineering",
        description: "CRISPR-Cas9 guide RNA design with off-target prediction and optimization.",
        gradient: "from-teal-900/40 to-black",
    },
    {
        title: "Hybrid Intelligence Engine",
        category: "Breeding",
        description: "Multi-trait genomic selection models for accelerated hybrid development.",
        gradient: "from-cyan-900/40 to-black",
    },
    {
        title: "Tissue Culture Designer",
        category: "Lab Automation",
        description: "Media formulation optimization using reinforcement learning.",
        gradient: "from-green-900/40 to-black",
    },
    {
        title: "Bio Simulation Lab",
        category: "Validation",
        description: "Digital twin modeling of plant growth under various environmental stressors.",
        gradient: "from-emerald-950/40 to-black",
    },
    {
        title: "Reports & Export Center",
        category: "Compliance",
        description: "Automated regulatory dossier generation for global biosafety approval.",
        gradient: "from-slate-900/40 to-black",
    },
];

export default function CoreModules() {
    return (
        <section className="py-32 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Core Modules</h2>
                    <div className="w-20 h-1 bg-primary mb-8" />
                    <p className="text-xl text-gray-400 max-w-2xl">
                        A unified operating system for plant biotechnology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((module, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${module.gradient} p-8 h-96 flex flex-col justify-between`}
                        >
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

                            {/* Hover Glow */}
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-500" />

                            <div>
                                <div className="text-xs font-mono text-primary-glow mb-4 tracking-widest uppercase">
                                    {module.category}
                                </div>
                                <h3 className="text-3xl font-light text-white leading-tight mb-2">
                                    {module.title}
                                </h3>
                            </div>

                            <div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {module.description}
                                </p>

                                <div className="flex items-center gap-2 text-white text-sm font-medium group-hover:text-primary-glow transition-colors">
                                    <span>Explore Module</span>
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
