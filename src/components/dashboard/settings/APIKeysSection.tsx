"use client";

import { useState } from "react";
import { Key, Copy, Trash2, Plus, Check } from "lucide-react";
import clsx from "clsx";

interface ApiKey {
    id: string;
    name: string;
    prefix: string;
    created: string;
    lastUsed: string;
}

export default function APIKeysSection() {
    const [keys, setKeys] = useState<ApiKey[]>([
        { id: "1", name: "Development Key", prefix: "ox_live_...", created: "Oct 20, 2025", lastUsed: "Just now" },
        { id: "2", name: "CI/CD Pipeline", prefix: "ox_test_...", created: "Sep 15, 2025", lastUsed: "2 days ago" },
    ]);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const copyKey = (id: string, prefix: string) => {
        // Mock copy
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const deleteKey = (id: string) => {
        setKeys(keys.filter(k => k.id !== id));
    };

    const createKey = () => {
        const newKey = {
            id: Math.random().toString(),
            name: `New Key ${keys.length + 1}`,
            prefix: "ox_live_...",
            created: "Just now",
            lastUsed: "Never"
        };
        setKeys([newKey, ...keys]);
    };

    return (
        <div className="space-y-6 max-w-3xl">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-white">API Keys</h3>
                    <p className="text-sm text-gray-400">Manage API keys for accessing the Oxygenix Engine programmatically.</p>
                </div>
                <button
                    onClick={createKey}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors text-sm"
                >
                    <Plus className="w-4 h-4" /> Generate New Key
                </button>
            </div>

            <div className="space-y-4">
                {keys.map((key) => (
                    <div key={key.id} className="bg-[#0A0F0D] border border-white/10 rounded-xl p-4 flex items-center justify-between group hover:border-white/20 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Key className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="font-medium text-white">{key.name}</div>
                                <div className="text-xs text-gray-500 font-mono flex items-center gap-2">
                                    {key.prefix} • Created {key.created}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => copyKey(key.id, key.prefix)}
                                className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                title="Copy Key"
                            >
                                {copiedId === key.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                            </button>
                            <button
                                onClick={() => deleteKey(key.id)}
                                className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                title="Revoke Key"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
