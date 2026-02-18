"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";

const data = [
    { trait: "Low", count: 15 },
    { trait: "Low-Med", count: 25 },
    { trait: "Medium", count: 45 },
    { trait: "Med-High", count: 30 },
    { trait: "High", count: 10 },
];

export default function TraitDistribution() {
    return (
        <div className="bg-[#0A0F0D] border border-white/5 rounded-2xl p-6 h-[300px]">
            <h3 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">Trait Distribution (F10)</h3>
            <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis
                            dataKey="trait"
                            stroke="#64748b"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis hide />
                        <Tooltip
                            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                            contentStyle={{ backgroundColor: '#0A0F0D', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                            itemStyle={{ color: '#fff', fontSize: '12px' }}
                        />
                        <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index > 2 ? "#10b981" : "#334155"} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
