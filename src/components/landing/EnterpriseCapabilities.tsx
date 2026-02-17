"use client";

import { Shield, LayoutDashboard, Globe, Zap, FileText, Users } from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
    { icon: Shield, title: "Enterprise Security", desc: "SOC 2 Type II compliant with end-to-end encryption for all genomic data." },
    { icon: LayoutDashboard, title: "Custom Workflows", desc: "Drag-and-drop workflow builder adaptable to any lab protocol." },
    { icon: Globe, title: "Global Collaboration", desc: "Real-time multi-user editing and data sharing across international teams." },
    { icon: Zap, title: "High-Performance Compute", desc: "Distributed cloud architecture for petabyte-scale bioinformatic analysis." },
    { icon: FileText, title: "Regulatory Audit Trails", desc: "Immutable logging of every experiment action for FDA/USDA submissions." },
    { icon: Users, title: "Role-Based Access", desc: "Granular permission settings for internal teams and external partners." },
];

export default function EnterpriseCapabilities() {
    return (
        <section className="py-24 bg-background relative z-10 border-b border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for Scale</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Secure, scalable, and compliant infrastructure for the world's leading biotech organizations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-start p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <div className="p-3 bg-primary/10 rounded-lg mb-4 text-primary">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
