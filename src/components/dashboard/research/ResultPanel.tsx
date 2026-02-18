"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    Copy,
    Dna,
    FlaskConical,
    BookOpen,
    Scissors,
    FileText,
    Check
} from "lucide-react";

interface SectionProps {
    title: string;
    icon: React.ElementType;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const CollapsibleSection = ({ title, icon: Icon, children, defaultOpen = false }: SectionProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-white/5 rounded-xl overflow-hidden bg-[#0A0F0D]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg text-primary">
                        <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-white">{title}</span>
                </div>
                <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="p-4 pt-0 border-t border-white/5">
                            <div className="pt-4 text-gray-300 text-sm leading-relaxed">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface ResultPanelProps {
    data: any;
}

export default function ResultPanel({ data }: ResultPanelProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (!data) return;
        const text = JSON.stringify(data, null, 2);
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!data) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl mx-auto mt-8 space-y-6"
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Analysis Results</h2>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/5"
                >
                    {copied ? (
                        <>
                            <Check className="w-3 h-3 text-green-400" />
                            Copied
                        </>
                    ) : (
                        <>
                            <Copy className="w-3 h-3" />
                            Copy Results
                        </>
                    )}
                </button>
            </div>

            <div className="space-y-4">
                <CollapsibleSection title="Candidate Genes" icon={Dna} defaultOpen={true}>
                    <ul className="space-y-3">
                        {data.candidateGenes?.map((gene: any, i: number) => (
                            <li key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                                <div>
                                    <span className="font-mono text-primary font-medium block sm:inline">{gene.id}</span>
                                    <span className="text-xs text-gray-500 ml-0 sm:ml-2 block sm:inline">{gene.name}</span>
                                </div>
                                <span className="text-xs px-2 py-1 bg-white/10 rounded text-gray-300 mt-2 sm:mt-0 w-fit">
                                    Confidence: {gene.confidence}%
                                </span>
                            </li>
                        ))}
                    </ul>
                </CollapsibleSection>

                <CollapsibleSection title="Gene Functions" icon={FlaskConical}>
                    <p>{data.geneFunctions}</p>
                </CollapsibleSection>

                <CollapsibleSection title="Literature" icon={BookOpen}>
                    <ul className="space-y-2">
                        {data.literature?.map((lit: any, i: number) => (
                            <li key={i} className="text-sm">
                                <a href="#" className="text-blue-400 hover:underline block font-medium">{lit.title}</a>
                                <span className="text-xs text-gray-500">{lit.authors} - {lit.year}</span>
                            </li>
                        ))}
                    </ul>
                </CollapsibleSection>

                <CollapsibleSection title="Editing Strategy" icon={Scissors}>
                    <div className="prose prose-invert prose-sm max-w-none">
                        <p>{data.editingStrategy}</p>
                        {data.guides && (
                            <div className="mt-4">
                                <h5 className="text-xs font-medium text-gray-400 uppercase mb-2">Recommended gRNAs</h5>
                                <div className="space-y-2">
                                    {data.guides.map((guide: string, i: number) => (
                                        <div key={i} className="font-mono text-xs bg-black/40 p-2 rounded border border-white/5 flex justify-between">
                                            <span>{guide}</span>
                                            <span className="text-gray-500">PAM: NGG</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="Protocol" icon={FileText}>
                    <div className="space-y-4">
                        {data.protocol?.steps?.map((step: string, i: number) => (
                            <div key={i} className="flex gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold border border-primary/20">
                                    {i + 1}
                                </div>
                                <p className="text-gray-300 text-sm">{step}</p>
                            </div>
                        ))}
                    </div>
                </CollapsibleSection>
            </div>
        </motion.div>
    );
}
