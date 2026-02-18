"use client";

import { useState } from "react";
import { User, Camera, Save, Loader2 } from "lucide-react";

export default function ProfileSection() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSave = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1000);
    };

    return (
        <div className="space-y-8 max-w-2xl">
            {/* Avatar */}
            <div className="flex items-center gap-6">
                <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-3xl font-bold text-white border-2 border-white/10">
                        CS
                    </div>
                    <button className="absolute bottom-0 right-0 p-2 bg-primary text-[#0A0F0D] rounded-full hover:bg-white transition-colors">
                        <Camera className="w-4 h-4" />
                    </button>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">Profile Picture</h3>
                    <p className="text-sm text-gray-400">JPG, GIF or PNG. Max size of 800K.</p>
                </div>
            </div>

            {/* Form */}
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">First Name</label>
                        <input
                            type="text"
                            defaultValue="Cortex"
                            className="w-full bg-[#0A0F0D] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Last Name</label>
                        <input
                            type="text"
                            defaultValue="Systems"
                            className="w-full bg-[#0A0F0D] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Email Address</label>
                    <input
                        type="email"
                        defaultValue="cortex@oxygenix.io"
                        className="w-full bg-[#0A0F0D] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Role</label>
                    <input
                        type="text"
                        defaultValue="Lead Scientist"
                        readOnly
                        className="w-full bg-white/5 border border-white/5 rounded-lg px-4 py-3 text-gray-400 cursor-not-allowed"
                    />
                </div>
            </div>

            <button
                onClick={handleSave}
                disabled={isLoading}
                className="flex items-center gap-2 px-6 py-2 bg-primary text-[#0A0F0D] font-bold rounded-lg hover:bg-white transition-colors disabled:opacity-50"
            >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                Save Changes
            </button>
        </div>
    );
}
