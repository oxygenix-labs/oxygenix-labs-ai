"use client";

import { useState } from "react";
import ProfileSection from "@/components/dashboard/settings/ProfileSection";
import APIKeysSection from "@/components/dashboard/settings/APIKeysSection";
import SecuritySection from "@/components/dashboard/settings/SecuritySection";
import clsx from "clsx";

const tabs = [
    { id: "profile", label: "Profile" },
    { id: "org", label: "Organization" },
    { id: "api", label: "API Keys" },
    { id: "security", label: "Security" },
    { id: "notifications", label: "Notifications" },
];

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="max-w-7xl mx-auto pb-20">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
                <p className="text-gray-400">Manage your account preferences and workspace configuration.</p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/5 mb-8 overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={clsx(
                            "px-6 py-3 text-sm font-medium transition-colors relative whitespace-nowrap",
                            activeTab === tab.id
                                ? "text-primary"
                                : "text-gray-500 hover:text-white"
                        )}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full shadow-[0_-2px_8px_rgba(16,185,129,0.5)]" />
                        )}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="min-h-[400px]">
                {activeTab === "profile" && <ProfileSection />}
                {activeTab === "api" && <APIKeysSection />}
                {activeTab === "security" && <SecuritySection />}
                {(activeTab === "org" || activeTab === "notifications") && (
                    <div className="flex flex-col items-center justify-center h-64 text-gray-500 border border-dashed border-white/5 rounded-2xl">
                        <p>This section is under development.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
