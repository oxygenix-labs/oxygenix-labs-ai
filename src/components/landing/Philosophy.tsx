"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
    return (
        <section className="py-32 bg-background relative z-10 px-6">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-4xl font-light leading-relaxed text-gray-300"
                >
                    We believe the future of agriculture lies not in chemical intervention, but in <span className="text-white font-medium">computational biology</span>. By decoding the language of DNA with artificial intelligence, we accelerate the evolution of resilient, high-yield crops to feed a changing world.
                </motion.p>
            </div>
        </section>
    );
}
