"use client";

import { useState } from "react";
import { Shield, Lock, Save, Loader2 } from "lucide-react";

export default function SecuritySection() {
    const [isLoading, setIsLoading] = useState(false);

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1500);
    };

    return (
        <div className="space-y-8 max-w-2xl">
            <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl flex items-start gap-4">
                <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                    <h4 className="text-sm font-bold text-white mb-1">Two-Factor Authentication</h4>
                    <p className="text-xs text-gray-400 mb-3">Add an extra layer of security to your account by enabling 2FA.</p>
                    <button className="text-xs font-bold text-primary hover:text-emerald-400 transition-colors">
                        Enable 2FA
                    </button>
                </div>
            </div>

            <form onSubmit={handleUpdate} className="space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Lock className="w-5 h-5 text-gray-500" /> Change Password
                </h3>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Current Password</label>
                    <input
                        type="password"
                        className="w-full bg-[#0A0F0D] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">New Password</label>
                    <input
                        type="password"
                        className="w-full bg-[#0A0F0D] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Confirm New Password</label>
                    <input
                        type="password"
                        className="w-full bg-[#0A0F0D] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors disabled:opacity-50 mt-4"
                >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Update Password"}
                </button>
            </form>
        </div>
    );
}
