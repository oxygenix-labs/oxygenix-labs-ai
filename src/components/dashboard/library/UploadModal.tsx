"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, UploadCloud, FileText, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import clsx from "clsx";

interface UploadModalProps {
    isOpen: boolean;
    onClose: () => void;
    onUploadComplete: () => void;
}

export default function UploadModal({ isOpen, onClose, onUploadComplete }: UploadModalProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [uploadState, setUploadState] = useState<"idle" | "uploading" | "processing" | "complete" | "error">("idle");
    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const startUpload = () => {
        if (!file) return;
        setUploadState("uploading");

        // Simulate upload progress
        let p = 0;
        const interval = setInterval(() => {
            p += 5;
            setProgress(p);
            if (p >= 100) {
                clearInterval(interval);
                setUploadState("processing");

                // Simulate processing delay
                setTimeout(() => {
                    setUploadState("complete");
                    setTimeout(() => {
                        onUploadComplete();
                        // Reset after delay
                        setTimeout(() => {
                            setFile(null);
                            setUploadState("idle");
                            setProgress(0);
                            onClose();
                        }, 1000);
                    }, 1500);
                }, 2000);
            }
        }, 100);
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
                            className="bg-[#0A0F0D] border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white rounded-lg transition-colors z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8">
                                <h2 className="text-xl font-bold text-white mb-2">Upload Scientific Data</h2>
                                <p className="text-gray-400 text-sm mb-6">Supported formats: FASTA, BAM, CSV, PDF (Max 500MB)</p>

                                {/* Drop Zone */}
                                {!file ? (
                                    <div
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        onClick={() => fileInputRef.current?.click()}
                                        className={clsx(
                                            "border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer transition-colors duration-300",
                                            isDragging
                                                ? "border-primary bg-primary/5"
                                                : "border-white/10 hover:border-white/20 hover:bg-white/5"
                                        )}
                                    >
                                        <input
                                            type="file"
                                            className="hidden"
                                            ref={fileInputRef}
                                            onChange={handleFileSelect}
                                        />
                                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                                            <UploadCloud className="w-8 h-8 text-gray-400" />
                                        </div>
                                        <p className="text-white font-medium mb-1">Click to upload or drag and drop</p>
                                        <p className="text-xs text-gray-500">Genomic sequences or research papers</p>
                                    </div>
                                ) : (
                                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 bg-white/5 rounded-lg">
                                                <FileText className="w-6 h-6 text-primary" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-white font-medium truncate">{file.name}</div>
                                                <div className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
                                            </div>
                                            {uploadState === "idle" && (
                                                <button onClick={() => setFile(null)} className="p-2 hover:bg-white/10 rounded-lg text-gray-500 transition-colors">
                                                    <X className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>

                                        {/* Progress Bar & Status */}
                                        {uploadState !== "idle" && (
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs font-mono">
                                                    <span className={clsx(
                                                        uploadState === "complete" ? "text-emerald-400" :
                                                            uploadState === "error" ? "text-red-400" : "text-primary"
                                                    )}>
                                                        {uploadState === "uploading" && "UPLOADING..."}
                                                        {uploadState === "processing" && "INDEXING & EMBEDDING..."}
                                                        {uploadState === "complete" && "UPLOAD COMPLETE"}
                                                    </span>
                                                    <span className="text-gray-400">{progress}%</span>
                                                </div>
                                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className={clsx(
                                                            "h-full",
                                                            uploadState === "complete" ? "bg-emerald-500" : "bg-primary"
                                                        )}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${progress}%` }}
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {uploadState === "idle" && (
                                            <button
                                                onClick={startUpload}
                                                className="w-full py-2 bg-primary text-[#0A0F0D] font-bold rounded-lg hover:bg-white transition-colors mt-2"
                                            >
                                                Start Upload
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
