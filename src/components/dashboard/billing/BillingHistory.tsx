"use client";

import { Download, FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const invoices = [
    { id: "INV-2025-001", date: "Oct 01, 2025", amount: "$49.00", status: "Paid" },
    { id: "INV-2025-002", date: "Sep 01, 2025", amount: "$49.00", status: "Paid" },
    { id: "INV-2025-003", date: "Aug 01, 2025", amount: "$49.00", status: "Paid" },
    { id: "INV-2025-004", date: "Jul 01, 2025", amount: "$49.00", status: "Paid" },
    { id: "INV-2025-005", date: "Jun 01, 2025", amount: "$49.00", status: "Paid" },
];

export default function BillingHistory() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#0A0F0D] border border-white/5 rounded-2xl p-8 h-full"
        >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-500" /> Billing History
            </h3>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-white/5 text-gray-500">
                            <th className="pb-3 font-medium">Invoice ID</th>
                            <th className="pb-3 font-medium">Date</th>
                            <th className="pb-3 font-medium">Amount</th>
                            <th className="pb-3 font-medium">Status</th>
                            <th className="pb-3 font-medium text-right">Invoice</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {invoices.map((invoice) => (
                            <tr key={invoice.id} className="group hover:bg-white/[0.02] transition-colors">
                                <td className="py-4 text-white font-mono text-xs">{invoice.id}</td>
                                <td className="py-4 text-gray-400">{invoice.date}</td>
                                <td className="py-4 text-white font-medium">{invoice.amount}</td>
                                <td className="py-4">
                                    <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full w-fit">
                                        <CheckCircle className="w-3 h-3" /> {invoice.status}
                                    </span>
                                </td>
                                <td className="py-4 text-right">
                                    <button className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Download PDF">
                                        <Download className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-xs text-gray-500 mb-2">Need help with billing?</p>
                <a href="#" className="text-sm text-primary hover:underline">Contact Support</a>
            </div>
        </motion.div>
    );
}
