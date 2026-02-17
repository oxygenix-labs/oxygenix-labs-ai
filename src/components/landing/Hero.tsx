"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import PlantDNA from "../3d/DNAHelix";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-background flex items-center">
            {/* Background Gradient & Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#050A08] via-[#0F1F1C] to-[#0A1612]" />
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#0FAF9A]/10 to-transparent opacity-50 blur-3xl pointer-events-none" /> {/* Right side glow */}

                {/* Left Side Organic Cells Background */}
                <div className="absolute left-0 top-0 w-1/2 h-full opacity-40 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/leaf-cells.svg')] bg-repeat opacity-50 scale-150 origin-top-left" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F1F1C]" /> {/* Fade out to right */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F1C] via-transparent to-[#0F1F1C]" /> {/* Fade top/bottom */}
                </div>

                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] scale-150" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-20 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">

                    {/* Left Content Endpoint */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-8 max-w-2xl"
                    >


                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                            Engineering the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Future of Crops</span> <br />
                            with <span className="text-primary-glow">AI</span>.
                        </h1>

                        <p className="text-lg text-gray-400 max-w-lg font-light leading-relaxed">
                            An autonomous digital biologist for gene editing, hybrid breeding, and plant biotechnology research.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start gap-6 pt-4">
                            <button className="group relative px-8 py-4 bg-white text-black rounded-full text-lg font-medium transition-transform hover:scale-105 flex items-center gap-2">
                                <span>Start Research</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button className="flex items-center gap-3 px-6 py-4 text-white hover:text-primary-glow transition-colors group">
                                <PlayCircle className="w-12 h-12 stroke-[1px] text-white/50 group-hover:text-primary group-hover:scale-110 transition-all" />
                                <span className="text-sm font-medium text-left">
                                    Watch System <br /> Demo
                                </span>
                            </button>
                        </div>

                        <div className="pt-12 flex gap-8 border-t border-white/5 w-full">
                            {[
                                { label: "Generations Simulated", val: "10M+" },
                                { label: "Accuracy Rate", val: "99.8%" },
                                { label: "Species Supported", val: "140+" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-bold text-white mb-1">{stat.val}</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right 3D Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="relative h-screen w-full lg:translate-x-10"
                    >
                        {/* Glow backdrop for DNA */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-40 pointer-events-none" />

                        <Canvas camera={{ position: [0, 0, 20], fov: 35 }}>
                            <ambientLight intensity={0.2} />
                            <pointLight position={[10, 10, 10]} intensity={1.5} color="#4ADE80" />
                            <pointLight position={[-10, -5, 5]} intensity={0.5} color="#2DD4BF" />
                            <PlantDNA />
                            <Environment preset="night" />
                            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
                        </Canvas>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
