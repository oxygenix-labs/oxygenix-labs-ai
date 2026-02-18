"use client";

import { BookOpen, Dna, Database, FileText } from "lucide-react";
import clsx from "clsx";

interface Category {
    id: string;
    label: string;
    icon: React.ElementType;
    count: number;
}

const categories: Category[] = [
    { id: "papers", label: "Research Papers", icon: FileText, count: 124 },
    { id: "genomic", label: "Genomic Data", icon: Dna, count: 45 },
    { id: "markers", label: "Marker Libraries", icon: Database, count: 12 },
    { id: "uploaded", label: "Uploaded Documents", icon: BookOpen, count: 8 },
];

interface LibrarySidebarProps {
    activeCategory: string;
    onSelectCategory: (id: string) => void;
}

export default function LibrarySidebar({ activeCategory, onSelectCategory }: LibrarySidebarProps) {
    return (
        <div className="bg-[#0A0F0D]/50 border border-white/5 rounded-2xl h-full p-4 flex flex-col">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4 px-2">Library</h3>
            <div className="space-y-1">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => onSelectCategory(cat.id)}
                        className={clsx(
                            "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group",
                            activeCategory === cat.id
                                ? "bg-primary/10 text-primary border border-primary/20"
                                : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                        )}
                    >
                        <div className="flex items-center gap-3">
                            <cat.icon className={clsx("w-4 h-4", activeCategory === cat.id ? "text-primary" : "text-gray-500 group-hover:text-gray-300")} />
                            {cat.label}
                        </div>
                        <span className="text-xs text-gray-500 group-hover:text-gray-400">{cat.count}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
