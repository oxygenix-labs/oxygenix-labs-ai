"use client";

import { motion } from "framer-motion";
import YieldChart from "./charts/YieldChart";
import TraitDistribution from "./charts/TraitDistribution";
import AdaptabilityScore from "./charts/AdaptabilityScore";

export default function SimulationResults() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="lg:col-span-2">
                    <YieldChart />
                </div>
                <TraitDistribution />
                <AdaptabilityScore />
            </div>
        </motion.div>
    );
}
