"use client";

import { useState } from "react";
import ReportList from "@/components/dashboard/reports/ReportList";
import DocumentPreview from "@/components/dashboard/reports/DocumentPreview";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Plus } from "lucide-react";

export default function ReportsPage() {
    const [selectedReportId, setSelectedReportId] = useState<string | null>(null);

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-20 relative h-screen overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between shrink-0 mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                        Reports & Export Center
                    </h1>
                    <p className="text-gray-400">Manage, view, and share your research findings.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors">
                    <Plus className="w-4 h-4" />
                    New Report
                </button>
            </div>

            <div className="flex-1 relative flex gap-6 overflow-hidden">
                {/* Report List - Fades or shrinks when preview is open on mobile/tablet, but let's keep it simple for now */}
                <div className="flex-1 min-w-0">
                    <ReportList onViewReport={setSelectedReportId} />
                </div>

                {/* Preview Overlay */}
                <AnimatePresence>
                    {selectedReportId && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedReportId(null)}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"
                            />

                            {/* Panel */}
                            <div className="absolute right-0 top-0 bottom-0 z-20 flex items-center pr-4">
                                <DocumentPreview
                                    reportId={selectedReportId}
                                    onClose={() => setSelectedReportId(null)}
                                />
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
