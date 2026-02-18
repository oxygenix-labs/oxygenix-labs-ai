"use client";

import { MoreHorizontal, Shield, Clock, CheckCircle, Mail } from "lucide-react";
import clsx from "clsx";

interface TeamMember {
    id: string;
    name: string;
    email: string;
    role: "Admin" | "Lead Scientist" | "Researcher" | "Viewer";
    projects: number;
    lastActive: string;
    status: "Active" | "Pending" | "Inactive";
    avatar?: string;
}

const mockMembers: TeamMember[] = [
    { id: "1", name: "Dr. Elena Rostova", email: "elena@oxygenix.io", role: "Lead Scientist", projects: 12, lastActive: "Just now", status: "Active" },
    { id: "2", name: "Marcus Chen", email: "marcus@oxygenix.io", role: "Researcher", projects: 8, lastActive: "2 hours ago", status: "Active" },
    { id: "3", name: "Sarah O'Connor", email: "sarah@oxygenix.io", role: "Admin", projects: 15, lastActive: "1 day ago", status: "Active" },
    { id: "4", name: "David Kim", email: "david.k@oxygenix.io", role: "Viewer", projects: 3, lastActive: "3 days ago", status: "Inactive" },
    { id: "5", name: "Pending User", email: "guest@institute.edu", role: "Researcher", projects: 0, lastActive: "-", status: "Pending" },
];

export default function TeamTable() {
    return (
        <div className="bg-[#0A0F0D] border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-white/5 bg-white/[0.02]">
                            <th className="px-6 py-4 font-medium text-gray-400 uppercase tracking-wider text-xs">Name</th>
                            <th className="px-6 py-4 font-medium text-gray-400 uppercase tracking-wider text-xs">Role</th>
                            <th className="px-6 py-4 font-medium text-gray-400 uppercase tracking-wider text-xs">Projects</th>
                            <th className="px-6 py-4 font-medium text-gray-400 uppercase tracking-wider text-xs">Last Active</th>
                            <th className="px-6 py-4 font-medium text-gray-400 uppercase tracking-wider text-xs">Status</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {mockMembers.map((member) => (
                            <tr key={member.id} className="group hover:bg-white/[0.02] transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white border border-white/5">
                                            {member.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-medium text-white">{member.name}</div>
                                            <div className="text-xs text-gray-500">{member.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <Shield className={clsx("w-3 h-3",
                                            member.role === "Admin" ? "text-purple-400" :
                                                member.role === "Lead Scientist" ? "text-primary" :
                                                    "text-gray-500"
                                        )} />
                                        <span className={clsx("text-sm",
                                            member.role === "Admin" ? "text-purple-300" :
                                                member.role === "Lead Scientist" ? "text-emerald-300" :
                                                    "text-gray-400"
                                        )}>{member.role}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-400 pl-8">{member.projects}</td>
                                <td className="px-6 py-4 text-gray-500 font-mono text-xs">{member.lastActive}</td>
                                <td className="px-6 py-4">
                                    <span className={clsx(
                                        "px-2 py-1 rounded-full text-[10px] font-medium border",
                                        member.status === "Active" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/10" :
                                            member.status === "Pending" ? "bg-amber-500/10 text-amber-400 border-amber-500/10" :
                                                "bg-gray-500/10 text-gray-400 border-gray-500/10"
                                    )}>
                                        {member.status}
                                    </span>
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
