"use client";

import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";

const data = [
    { name: "Heat", score: 80, fill: "#ef4444" },
    { name: "Drought", score: 70, fill: "#f59e0b" },
    { name: "Salinity", score: 60, fill: "#3b82f6" },
    { name: "Disease", score: 90, fill: "#10b981" },
];

export default function AdaptabilityScore() {
    return (
        <div className="bg-[#0A0F0D] border border-white/5 rounded-2xl p-6 h-[300px]">
            <h3 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">Adaptability Score</h3>
            <div className="h-[220px] w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="20%"
                        outerRadius="100%"
                        barSize={10}
                        data={data}
                        startAngle={180}
                        endAngle={-180}
                    >
                        <RadialBar
                            background={{ fill: 'rgba(255,255,255,0.05)' }}
                            dataKey="score"
                            cornerRadius={10}
                        />
                        <Legend iconSize={8} layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ fontSize: '10px', color: '#94a3b8' }} />
                        <Tooltip contentStyle={{ backgroundColor: '#0A0F0D', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }} />
                    </RadialBarChart>
                </ResponsiveContainer>
                {/* Center Score */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">82</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">Overall</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
