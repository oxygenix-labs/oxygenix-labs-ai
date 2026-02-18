"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Loader2, Sprout, TestTube2, Globe2 } from "lucide-react";

interface ResearchFormData {
    crop: string;
    trait: string;
    environment: string;
}

interface ResearchFormProps {
    onSubmit: (data: ResearchFormData) => void;
    isLoading: boolean;
}

export default function ResearchForm({ onSubmit, isLoading }: ResearchFormProps) {
    const [formData, setFormData] = useState<ResearchFormData>({
        crop: "",
        trait: "",
        environment: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl mx-auto space-y-6 bg-[#0A0F0D] border border-white/5 p-8 rounded-2xl"
            onSubmit={handleSubmit}
        >
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-white">Research Parameters</h2>
                <p className="text-sm text-gray-400">Enter details to initiate analysis.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <Sprout className="w-3 h-3" /> Target Crop
                    </label>
                    <input
                        type="text"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                        placeholder="e.g. Maize, Wheat"
                        value={formData.crop}
                        onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <TestTube2 className="w-3 h-3" /> Desired Trait
                    </label>
                    <input
                        type="text"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                        placeholder="e.g. Drought Resistance"
                        value={formData.trait}
                        onChange={(e) => setFormData({ ...formData, trait: e.target.value })}
                    />
                </div>

                <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider flex items-center gap-2">
                        <Globe2 className="w-3 h-3" /> Target Environment
                    </label>
                    <textarea
                        required
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600 resize-none"
                        placeholder="Descibe the environmental conditions (e.g., Arid, High Salinity, Temperate)..."
                        value={formData.environment}
                        onChange={(e) => setFormData({ ...formData, environment: e.target.value })}
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary to-emerald-600 text-[#0A0F0D] font-bold py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Analyzing...
                    </>
                ) : (
                    <>
                        <Search className="w-5 h-5" />
                        Start Research Analysis
                    </>
                )}
            </button>
        </motion.form>
    );
}
