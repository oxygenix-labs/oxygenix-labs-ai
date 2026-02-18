"use client";

import { useState } from "react";
import TeamTable from "@/components/dashboard/teams/TeamTable";
import InviteModal from "@/components/dashboard/teams/InviteModal";
import { UserPlus, Search, Filter } from "lucide-react";

export default function TeamsPage() {
    const [isInviteOpen, setIsInviteOpen] = useState(false);

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-20 relative h-[calc(100vh-10rem)] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between shrink-0 mb-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                        Team Management
                    </h1>
                    <p className="text-gray-400">Manage roles, permissions, and collaborate with your lab members.</p>
                </div>
                <button
                    onClick={() => setIsInviteOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-[#0A0F0D] font-bold rounded-lg hover:bg-white transition-colors"
                >
                    <UserPlus className="w-4 h-4" />
                    Invite Member
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#0A0F0D]/50 border border-white/5 rounded-2xl overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-white/5 flex gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search members..."
                            className="w-full bg-[#0A0F0D] border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-white/20 transition-colors"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 bg-[#0A0F0D] border border-white/10 rounded-lg text-gray-400 hover:text-white transition-colors text-sm">
                        <Filter className="w-4 h-4" /> Filter Role
                    </button>
                </div>

                {/* Table */}
                <div className="flex-1 overflow-auto custom-scrollbar p-6">
                    <TeamTable />
                </div>
            </div>

            <InviteModal
                isOpen={isInviteOpen}
                onClose={() => setIsInviteOpen(false)}
                onInvite={(email, role) => {
                    console.log(`Invited ${email} as ${role}`);
                }}
            />
        </div>
    );
}
