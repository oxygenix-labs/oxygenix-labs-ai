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
    LogOut
} from "lucide-react";

const navItems = [
    { name: "Research Workspace", href: "/dashboard", icon: LayoutDashboard },
    { name: "Gene Editing", href: "/dashboard/gene-editing", icon: Dna },
    { name: "Hybrid Design", href: "/dashboard/hybrid-design", icon: Sprout },
    { name: "Simulation Lab", href: "/dashboard/simulation", icon: FlaskConical },
    { name: "Reports", href: "/dashboard/reports", icon: FileText },
    { name: "Data Library", href: "/dashboard/data", icon: Database },
];

const secondaryItems = [
    { name: "Teams", href: "/dashboard/teams", icon: Users },
    { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen bg-[#0A0F0D] border-r border-white/5 flex flex-col fixed left-0 top-0 z-40">
            <div className="p-6">
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-emerald-900 rounded-lg flex items-center justify-center">
                        <span className="font-bold text-white">O</span>
                    </div>
                    <span className="font-bold text-white tracking-tight">OXYGENIX</span>
                </div>

                <div className="space-y-1">
                    <p className="text-xs font-mono text-gray-500 mb-3 px-3 uppercase tracking-wider">Research</p>
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200",
                                    isActive
                                        ? "text-white bg-white/5 border border-white/5 shadow-sm"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <item.icon className={clsx("w-4 h-4", isActive ? "text-primary" : "text-gray-500")} />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-8 space-y-1">
                    <p className="text-xs font-mono text-gray-500 mb-3 px-3 uppercase tracking-wider">Organization</p>
                    {secondaryItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200",
                                    isActive
                                        ? "text-white bg-white/5 border border-white/5"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                <item.icon className={clsx("w-4 h-4", isActive ? "text-primary" : "text-gray-500")} />
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="mt-auto p-4 border-t border-white/5">
                <button className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-red-400 w-full rounded-lg hover:bg-white/5 transition-colors">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
