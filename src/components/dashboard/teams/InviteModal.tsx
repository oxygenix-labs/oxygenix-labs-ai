"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Shield, UserPlus, CheckCircle, Loader2 } from "lucide-react";
import clsx from "clsx";

interface InviteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onInvite: (email: string, role: string) => void;
}

export default function InviteModal({ isOpen, onClose, onInvite }: InviteModalProps) {
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("Researcher");
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus("sent");
        onInvite(email, role);
        setTimeout(() => {
            onClose();
            // Reset after closing
            setTimeout(() => {
                setStatus("idle");
                setEmail("");
                setRole("Researcher");
            }, 300);
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0A0F0D] border border-white/10 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white rounded-lg transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <UserPlus className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-xl font-bold text-white mb-2">Invite Team Member</h2>
                                <p className="text-gray-400 text-sm mb-6">Send an invitation to collaborate on your genomic projects.</p>

                                {status === "sent" ? (
                                    <div className="flex flex-col items-center justify-center py-8 text-center">
                                        <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle className="w-8 h-8 text-emerald-500" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">Invitation Sent!</h3>
                                        <p className="text-gray-400 text-sm">An email has been sent to <span className="text-white">{email}</span>.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                                <Mail className="w-3 h-3" /> Email Address
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="colleague@institute.edu"
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                                <Shield className="w-3 h-3" /> Role Assignment
                                            </label>
                                            <div className="grid grid-cols-1 gap-2">
                                                {["Lead Scientist", "Researcher", "Viewer", "Admin"].map((r) => (
                                                    <label
                                                        key={r}
                                                        className={clsx(
                                                            "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all",
                                                            role === r
                                                                ? "bg-primary/5 border-primary/50 shadow-[0_0_10px_rgba(16,185,129,0.1)]"
                                                                : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                                                        )}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name="role"
                                                            value={r}
                                                            checked={role === r}
                                                            onChange={(e) => setRole(e.target.value)}
                                                            className="accent-primary"
                                                        />
                                                        <span className={clsx("text-sm", role === r ? "text-white font-medium" : "text-gray-400")}>{r}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === "sending" || !email}
                                            className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-[#0A0F0D] font-bold rounded-lg hover:bg-white transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {status === "sending" ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Invite"}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
