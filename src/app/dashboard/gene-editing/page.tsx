"use client";

import { useState } from "react";
import GeneOverview from "@/components/dashboard/gene-editing/GeneOverview";
import StrategySelector from "@/components/dashboard/gene-editing/StrategySelector";
import WorkflowStepper from "@/components/dashboard/gene-editing/WorkflowStepper";
import RiskPanel from "@/components/dashboard/gene-editing/RiskPanel";
import { ArrowRight } from "lucide-react";

export default function GeneEditingPage() {
    const [selectedStrategy, setSelectedStrategy] = useState<string>("knockout");

    return (
        <div className="space-y-8 pb-20 relative">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Gene Editing Planner</h1>
                    <p className="text-gray-400">Design and validate CRISPR-Cas9 experiments.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-primary text-[#0A0F0D] font-bold rounded-lg hover:bg-white transition-colors">
                    Start Simulation <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Left Column: Overview & Strategy */}
                <div className="xl:col-span-2 space-y-6">
                    <GeneOverview />

                    <div className="space-y-4">
                        <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Editing Strategy</h3>
                        <StrategySelector
                            selectedStrategy={selectedStrategy}
                            onSelect={setSelectedStrategy}
                        />
                    </div>

                    <WorkflowStepper currentStep={2} />
                </div>

                {/* Right Column: Risk Assessment */}
                <div className="xl:col-span-1">
                    <RiskPanel />
                </div>
            </div>
        </div>
    );
}
