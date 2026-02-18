"use client";

import { Bell, Search, ChevronDown } from "lucide-react";

export default function Header() {
    return (
        <header className="h-16 border-b border-white/5 bg-[#0A0F0D]/50 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-6 pl-72">
            {/* Search */}
            <div className="relative w-96">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search projects, genes, or sequences..."
                    className="w-full bg-white/5 border border-white/5 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                    <Bell className="w-5 h-5" />
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border border-[#0A0F0D]" />
                </button>

                <div className="h-6 w-[1px] bg-white/10" />

                <button className="flex items-center gap-3 hover:bg-white/5 p-1.5 pr-3 rounded-full transition-colors border border-transparent hover:border-white/5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 border border-white/10" />
                    <div className="text-left hidden md:block">
                        <div className="text-xs font-medium text-white">Dr. Sarah Chen</div>
                        <div className="text-[10px] text-gray-500">Lead Geneticist</div>
                    </div>
                    <ChevronDown className="w-3 h-3 text-gray-500" />
                </button>
            </div>
        </header>
    );
}
