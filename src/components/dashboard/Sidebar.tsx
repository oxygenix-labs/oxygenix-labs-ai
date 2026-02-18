"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import {
    LayoutDashboard,
    Dna,
    Sprout,
    FlaskConical,
    FileText,
    Database,
    Users,
    CreditCard,
    Settings,
    LogOut,
    Microscope
} from "lucide-react";

const navItems = [
    { name: "Research Workspace", href: "/dashboard", icon: LayoutDashboard },
    { name: "Research", href: "/dashboard/research", icon: Microscope },
    { name: "Gene Editing", href: "/dashboard/gene-editing", icon: Dna },
    { name: "Hybrid Design", href: "/dashboard/hybrid-design", icon: Sprout },
    { name: "Simulation Lab", href: "/dashboard/simulation", icon: FlaskConical },
    { name: "Reports", href: "/dashboard/reports", icon: FileText },
    { name: "Data Library", href: "/dashboard/library", icon: Database },
];

const secondaryItems = [
    { name: "Teams", href: "/dashboard/teams", icon: Users },
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen bg-[#0A0F0D] border-r border-white/5 flex flex-col fixed left-0 top-0 z-40 backdrop-blur-xl">
            <div className="p-6">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-emerald-900 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                        <span className="font-bold text-white">O</span>
                    </div>
                    <span className="font-bold text-white tracking-tight text-lg">OXYGENIX</span>
                </div>

                <div className="space-y-1">
                    <p className="text-[10px] font-bold text-gray-500 mb-4 px-3 uppercase tracking-widest opacity-80">Research Workspace</p>
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group",
                                    isActive
                                        ? "text-white bg-white/[0.03] border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
                                        : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
                                )}
                            >
                                <item.icon className={clsx("w-4 h-4 transition-colors", isActive ? "text-primary drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" : "text-gray-500 group-hover:text-gray-300")} />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-8 space-y-1">
                    <p className="text-[10px] font-bold text-gray-500 mb-4 px-3 uppercase tracking-widest opacity-80">Organization</p>
                    {secondaryItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group",
                                    isActive
                                        ? "text-white bg-white/[0.03] border border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
                                        : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
                                )}
                            >
                                <item.icon className={clsx("w-4 h-4 transition-colors", isActive ? "text-primary drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" : "text-gray-500 group-hover:text-gray-300")} />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="mt-auto p-6 border-t border-white/5">
                <button className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-400 hover:text-red-400 w-full rounded-lg hover:bg-red-500/5 transition-colors group">
                    <LogOut className="w-4 h-4 group-hover:text-red-400 transition-colors" />
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
