"use client";

import { motion } from "framer-motion";
import { X, ExternalLink, Download, Printer } from "lucide-react";

interface DocumentPreviewProps {
    reportId: string | null;
    onClose: () => void;
}

export default function DocumentPreview({ reportId, onClose }: DocumentPreviewProps) {
    if (!reportId) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="w-full lg:w-[600px] xl:w-[800px] h-[calc(100vh-12rem)] bg-[#F5F5F5] text-black rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        >
            {/* Toolbar */}
            <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-gray-600" />
                    </button>
                    <span className="text-sm font-medium text-gray-500">Preview Mode</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600" title="Print">
                        <Printer className="w-4 h-4" />
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                        <Download className="w-4 h-4" /> Export PDF
                    </button>
                </div>
            </div>

            {/* Document Content - A4 Proportions */}
            <div className="flex-1 overflow-y-auto bg-gray-100 p-8 flex justify-center custom-scrollbar">
                <div className="bg-white w-full max-w-[21cm] min-h-[29.7cm] shadow-sm p-12 text-[11pt] leading-relaxed">
                    {/* Header */}
                    <div className="border-b-2 border-black pb-6 mb-8 flex justify-between items-end">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Executive Report</h1>
                            <p className="text-gray-500 mt-1 uppercase tracking-widest text-xs">Oxygenix Labs AI • Confidential</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold">Project Alpha</p>
                            <p className="text-gray-500 text-sm">Oct 24, 2025</p>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-lg font-bold uppercase tracking-wider mb-3 border-l-4 border-black pl-3">Summary</h2>
                            <p className="text-gray-700 text-justify">
                                Simulation analysis indicates a <strong>15.4% increase in drought tolerance</strong> for the target Wheat variety
                                (Triticum aestivum) when introducing the specific trait markers identified in generation F5.
                                The projected yield stability remains above 85% even under severe RCP 4.5 climate scenarios.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold uppercase tracking-wider mb-3 border-l-4 border-black pl-3">Key Findings</h2>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>
                                    <strong>Genetic Gain:</strong> The breeding cycle was accelerated by 3 generations using predictive selection.
                                </li>
                                <li>
                                    <strong>Trait Introgression:</strong> Successful segregation of the desired allele was observed in 92% of the F3 population.
                                </li>
                                <li>
                                    <strong>Risk Profile:</strong> Off-target effects were minimal, with a confidence score of 98.2%.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold uppercase tracking-wider mb-3 border-l-4 border-black pl-3">Recommendations</h2>
                            <div className="bg-gray-50 p-4 border border-gray-100 rounded">
                                <p className="text-gray-700 font-medium">
                                    Proceed to multi-location field trials (MLT) for the top 5 selection lines.
                                    Prioritize locations with high salinity indices to validate secondary trait resistance.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-lg font-bold uppercase tracking-wider mb-3 border-l-4 border-black pl-3">Data Visualization</h2>
                            <div className="h-48 bg-gray-50 border border-gray-200 rounded flex items-center justify-center text-gray-400 text-sm italic">
                                [Chart: Yield Projection Curve Placeholder]
                            </div>
                        </section>
                    </div>

                    {/* Footer */}
                    <div className="mt-16 pt-6 border-t border-gray-200 flex justify-between text-[10px] text-gray-400 uppercase tracking-widest">
                        <span>Generated by Oxygenix AI</span>
                        <span>Page 1 of 1</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
