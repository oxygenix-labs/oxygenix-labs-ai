"use client";

import { motion } from "framer-motion";
import { FileText, Download, Share2, Eye, Clock, CheckCircle, Loader2 } from "lucide-react";
import clsx from "clsx";

export interface Report {
    id: string;
    title: string;
    project: string;
    date: string;
    crop: string;
    status: "ready" | "processing";
    type: "Gene Editing" | "Hybrid Design" | "Simulation";
}

interface ReportCardProps {
    report: Report;
    onView: (id: string) => void;
}

export default function ReportCard({ report, onView }: ReportCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="group bg-[#0A0F0D] border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors relative overflow-hidden"
        >
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white/5 rounded-lg text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                        <FileText className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-white group-hover:text-primary transition-colors cursor-pointer" onClick={() => onView(report.id)}>
                            {report.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">{report.project} • {report.date}</p>
                    </div>
                </div>

                <div className={clsx(
                    "px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1.5",
                    report.status === "ready"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/10"
                        : "bg-amber-500/10 text-amber-400 border border-amber-500/10"
                )}>
                    {report.status === "ready" ? <CheckCircle className="w-3 h-3" /> : <Loader2 className="w-3 h-3 animate-spin" />}
                    {report.status === "ready" ? "Generated" : "Processing"}
                </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-gray-400 border border-white/5">
                        {report.crop}
                    </span>
                    <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-gray-400 border border-white/5">
                        {report.type}
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    <button
                        onClick={() => onView(report.id)}
                        className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        title="View Report"
                    >
                        <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Download PDF">
                        <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Share Link">
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
