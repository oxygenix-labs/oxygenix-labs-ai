"use client";

import { MoreHorizontal, FileText, Database, Code, CheckCircle, Clock } from "lucide-react";
import clsx from "clsx";

interface LibraryItem {
    id: string;
    title: string;
    source: string;
    crop: string;
    date: string;
    status: "Indexed" | "Processing" | "Archived";
    type: "paper" | "data" | "marker";
}

const mockData: LibraryItem[] = [
    { id: "1", title: "CRISPR-Cas9 optimization in Wheat", source: "Nature Biotechnology", crop: "Wheat", date: "Oct 24, 2025", status: "Indexed", type: "paper" },
    { id: "2", title: "Oryza sativa Genome v4.0", source: "IRGSP", crop: "Rice", date: "Oct 20, 2025", status: "Indexed", type: "data" },
    { id: "3", title: "Drought Tolerance Markers (Chr12)", source: "Internal", crop: "All", date: "Oct 18, 2025", status: "Indexed", type: "marker" },
    { id: "4", title: "Validation of OsDREB1A", source: "Lab Notes", crop: "Rice", date: "Oct 15, 2025", status: "Processing", type: "paper" },
    { id: "5", title: "Yield QTL Methodology", source: "Science", crop: "Maize", date: "Oct 10, 2025", status: "Indexed", type: "paper" },
    { id: "6", title: "Soybean Rust Resistance Alleles", source: "USDA", crop: "Soybean", date: "Oct 05, 2025", status: "Archived", type: "marker" },
];

export default function LibraryTable() {
    return (
        <div className="bg-[#0A0F0D] border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-white/5 bg-white/[0.02]">
                            <th className="px-6 py-4 font-medium text-gray-400 uppercase tracking-wider text-xs">Title</th>
                            <th className="px-6 py-4 font-medium text-gray-400 uppercase tracking-wider text-xs">Source</th>
                            <th className="px-6 py-4 font-medium text-gray-400 uppercase tracking-wider text-xs">Crop</th>
                            <th className="px-6 py-4 font-medium text-gray-400 uppercase tracking-wider text-xs">Date Added</th>
                            <th className="px-6 py-4 font-medium text-gray-400 uppercase tracking-wider text-xs">Status</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {mockData.map((item) => (
                            <tr key={item.id} className="group hover:bg-white/[0.02] transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-white/5 rounded text-gray-400 group-hover:text-primary transition-colors">
                                            {item.type === 'paper' ? <FileText className="w-4 h-4" /> :
                                                item.type === 'data' ? <Database className="w-4 h-4" /> :
                                                    <Code className="w-4 h-4" />}
                                        </div>
                                        <div className="font-medium text-white">{item.title}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-400">{item.source}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400 border border-white/5">
                                        {item.crop}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-500 font-mono text-xs">{item.date}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        {item.status === "Indexed" && <CheckCircle className="w-3 h-3 text-emerald-500" />}
                                        {item.status === "Processing" && <Clock className="w-3 h-3 text-amber-500" />}
                                        {item.status === "Archived" && <Database className="w-3 h-3 text-gray-500" />}
                                        <span className={clsx(
                                            "text-xs font-medium",
                                            item.status === "Indexed" ? "text-emerald-400" :
                                                item.status === "Processing" ? "text-amber-400" : "text-gray-500"
                                        )}>
                                            {item.status}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-1 text-gray-500 hover:text-white transition-colors">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
