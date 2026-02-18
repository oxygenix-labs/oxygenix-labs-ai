"use client";

import { useState } from "react";
import ResearchForm from "@/components/dashboard/research/ResearchForm";
import ResultPanel from "@/components/dashboard/research/ResultPanel";
import ProjectSidebar from "@/components/dashboard/research/ProjectSidebar"; // Import ProjectSidebar
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ResearchPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [currentProject, setCurrentProject] = useState<any>(null); // State for selected project

    const handleSearch = async (data: any) => {
        setIsLoading(true);
        setResult(null);

        try {
            const response = await fetch("/api/research", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const resultData = await response.json();
            setResult(resultData);
        } catch (error) {
            console.error("Research failed:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex bg-[#0A0F0D] min-h-screen">
            {/* Sidebar */}
            <ProjectSidebar
                currentProject={currentProject}
                onSelectProject={setCurrentProject}
            />

            {/* Main Content Area */}
            <div className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-4xl mx-auto pb-20">
                    <div className="mb-8">
                        <Link href="/dashboard" className="inline-flex items-center text-sm text-gray-500 hover:text-white transition-colors mb-4 group">
                            <MoveLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                            Back to Dashboard
                        </Link>
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Research Workspace
                            {currentProject && <span className="text-gray-500 font-normal text-lg ml-4">/ {currentProject.name}</span>}
                        </h1>
                        <p className="text-gray-400">Configure parameters for AI-driven genomic analysis.</p>
                    </div>

                    <AnimatePresence mode="wait">
                        {!result ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="w-full"
                            >
                                <ResearchForm onSubmit={handleSearch} isLoading={isLoading} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <div className="flex justify-end mb-4">
                                    <button
                                        onClick={() => setResult(null)}
                                        className="text-sm text-primary hover:underline"
                                    >
                                        Start New Analysis
                                    </button>
                                </div>
                                <ResultPanel data={result} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
