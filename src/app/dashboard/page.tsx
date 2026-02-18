"use client";

import { motion } from "framer-motion";
import { ArrowUp, MoreHorizontal, Activity, Dna, Clock } from "lucide-react";
import clsx from "clsx";

const stats = [
    { label: "Active Projects", value: "12", change: "+2", icon: Activity, color: "text-blue-400" },
    { label: "Running Simulations", value: "84", change: "+15%", icon: Clock, color: "text-amber-400" },
    { label: "Sequences Analyzed", value: "1.2M", change: "+8%", icon: Dna, color: "text-primary" },
];

const projects = [
    { id: "PRJ-2491", name: "Drought Resistance V2", species: "Soybean", progress: 78, status: "Simulation", lastUpdate: "2h ago" },
    { id: "PRJ-3302", name: "Yield Enhancement Alpha", species: "Corn", progress: 45, status: "Gene Editing", lastUpdate: "5h ago" },
    { id: "PRJ-1193", name: "Pest Resistance Beta", species: "Cotton", progress: 92, status: "Tissue Culture", lastUpdate: "1d ago" },
    { id: "PRJ-4421", name: "Nitrogen Efficiency", species: "Wheat", progress: 12, status: "Discovery", lastUpdate: "2d ago" },
    { id: "PRJ-5002", name: "Salinity Tolerance", species: "Rice", progress: 66, status: "Validation", lastUpdate: "3d ago" },
];

export default function DashboardHome() {
    return (
        <div className="space-y-8">

            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Research Overview</h1>
                    <p className="text-gray-400">Welcome back, Dr. Chen. Your simulation queue is active.</p>
                </div>
                <button className="px-5 py-2.5 bg-primary text-[#0A0F0D] font-bold rounded-lg hover:bg-white transition-colors text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                    + New Project
                </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 bg-[#0A0F0D] border border-white/5 rounded-2xl hover:border-white/10 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreHorizontal className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer" />
                        </div>
                        <div className="flex items-start justify-between mb-6">
                            <div className={`p-3 rounded-xl bg-white/5 ${stat.color} border border-white/5`}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <div className="flex items-center text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full border border-emerald-400/10">
                                {stat.change} <ArrowUp className="w-3 h-3 ml-0.5" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-widest">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Projects Table */}
            <div className="bg-[#0A0F0D] border border-white/5 rounded-2xl overflow-hidden flex flex-col">
                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <Activity className="w-4 h-4 text-primary" /> Active Research Queue
                    </h2>
                    <button className="text-xs font-medium text-primary hover:text-white transition-colors uppercase tracking-wider">View All Projects</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-gray-400 text-left">
                        <thead className="bg-white/[0.02] text-gray-400 font-medium uppercase text-[10px] tracking-widest border-b border-white/5">
                            <tr>
                                <th className="px-6 py-4">Project ID</th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Species</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Progress</th>
                                <th className="px-6 py-4">Last Update</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {projects.map((project, i) => (
                                <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="px-6 py-4 font-mono text-xs text-gray-500 group-hover:text-primary transition-colors">{project.id}</td>
                                    <td className="px-6 py-4 font-medium text-white">{project.name}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                                            {project.species}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={clsx(
                                            "px-2.5 py-1 rounded-full text-[10px] font-bold border",
                                            project.status === 'Simulation' ? 'bg-amber-400/10 text-amber-400 border-amber-400/10' :
                                                project.status === 'Gene Editing' ? 'bg-blue-400/10 text-blue-400 border-blue-400/10' :
                                                    project.status === 'Validation' ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/10' :
                                                        'bg-gray-400/10 text-gray-400 border-gray-400/10'
                                        )}>
                                            {project.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 w-48">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-primary to-emerald-500 rounded-full"
                                                    style={{ width: `${project.progress}%` }}
                                                />
                                            </div>
                                            <span className="text-xs font-mono w-8 text-right text-gray-500">{project.progress}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-xs font-mono text-gray-500">{project.lastUpdate}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-500 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
