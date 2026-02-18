"use client";

import { useState } from "react";
import ReportCard, { Report } from "./ReportCard";
import { Search, Filter, Calendar } from "lucide-react";

const mockReports: Report[] = [
    { id: "1", title: "Drought Resistance Analysis", project: "Project Alpha", date: "Oct 24, 2025", crop: "Wheat", status: "ready", type: "Simulation" },
    { id: "2", title: "CRISPR Target Validation", project: "OsDREB1A Study", date: "Oct 22, 2025", crop: "Rice", status: "ready", type: "Gene Editing" },
    { id: "3", title: "Hybrid Yield Forecast", project: "Project Beta", date: "Oct 20, 2025", crop: "Maize", status: "processing", type: "Hybrid Design" },
    { id: "4", title: "Salinity Stress Report", project: "Project Gamma", date: "Oct 18, 2025", crop: "Soybean", status: "ready", type: "Simulation" },
    { id: "5", title: "Off-Target Risk Assessment", project: "OsDREB1A Study", date: "Oct 15, 2025", crop: "Rice", status: "ready", type: "Gene Editing" },
];

interface ReportListProps {
    onViewReport: (id: string) => void;
}

export default function ReportList({ onViewReport }: ReportListProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCrop, setFilterCrop] = useState("All");

    const filteredReports = mockReports.filter(report => {
        const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            report.project.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCrop = filterCrop === "All" || report.crop === filterCrop;
        return matchesSearch && matchesCrop;
    });

    return (
        <div className="bg-[#0A0F0D]/50 border border-white/5 rounded-2xl flex flex-col h-[calc(100vh-12rem)]">
            {/* Toolbar */}
            <div className="p-4 border-b border-white/5 flex flex-wrap gap-4 items-center justify-between">
                <div className="relative flex-1 min-w-[240px]">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search reports..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-[#0A0F0D] border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-white/20 transition-colors"
                    />
                </div>

                <div className="flex gap-2">
                    <div className="relative">
                        <Filter className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        <select
                            value={filterCrop}
                            onChange={(e) => setFilterCrop(e.target.value)}
                            className="bg-[#0A0F0D] border border-white/10 rounded-lg py-2 pl-10 pr-8 text-sm text-gray-300 focus:outline-none focus:border-white/20 appearance-none cursor-pointer"
                        >
                            <option value="All">All Crops</option>
                            <option value="Wheat">Wheat</option>
                            <option value="Rice">Rice</option>
                            <option value="Maize">Maize</option>
                            <option value="Soybean">Soybean</option>
                        </select>
                    </div>

                    <button className="p-2 bg-[#0A0F0D] border border-white/10 rounded-lg text-gray-400 hover:text-white hover:border-white/20 transition-colors">
                        <Calendar className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3">
                {filteredReports.length > 0 ? (
                    filteredReports.map(report => (
                        <ReportCard key={report.id} report={report} onView={onViewReport} />
                    ))
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                            <Search className="w-8 h-8 text-gray-600" />
                        </div>
                        <p className="text-gray-400">No reports found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
