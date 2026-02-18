"use client";

import { useState } from "react";
import LibrarySidebar from "@/components/dashboard/library/LibrarySidebar";
import LibraryTable from "@/components/dashboard/library/LibraryTable";
import UploadModal from "@/components/dashboard/library/UploadModal";
import { Plus, Search, Filter } from "lucide-react";

export default function LibraryPage() {
    const [activeCategory, setActiveCategory] = useState("papers");
    const [isUploadOpen, setIsUploadOpen] = useState(false);

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-20 relative h-[calc(100vh-10rem)] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between shrink-0 mb-2">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                        Data Library
                    </h1>
                    <p className="text-gray-400">Central repository for genomic datasets and research papers.</p>
                </div>
                <button
                    onClick={() => setIsUploadOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-[#0A0F0D] font-bold rounded-lg hover:bg-white transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Upload Data
                </button>
            </div>

            <div className="flex-1 flex gap-6 overflow-hidden">
                {/* Sidebar */}
                <div className="w-64 shrink-0 hidden lg:block">
                    <LibrarySidebar
                        activeCategory={activeCategory}
                        onSelectCategory={setActiveCategory}
                    />
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col min-w-0 bg-[#0A0F0D]/50 border border-white/5 rounded-2xl overflow-hidden">
                    {/* Toolbar */}
                    <div className="p-4 border-b border-white/5 flex gap-4">
                        <div className="relative flex-1">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search library..."
                                className="w-full bg-[#0A0F0D] border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-white/20 transition-colors"
                            />
                        </div>
                        <button className="flex items-center gap-2 px-3 py-2 bg-[#0A0F0D] border border-white/10 rounded-lg text-gray-400 hover:text-white transition-colors text-sm">
                            <Filter className="w-4 h-4" /> Filter
                        </button>
                    </div>

                    {/* Table */}
                    <div className="flex-1 overflow-auto custom-scrollbar p-6">
                        <LibraryTable />
                    </div>
                </div>
            </div>

            <UploadModal
                isOpen={isUploadOpen}
                onClose={() => setIsUploadOpen(false)}
                onUploadComplete={() => {
                    // Refresh data logic here
                    console.log("Upload complete, refreshing list...");
                }}
            />
        </div>
    );
}
