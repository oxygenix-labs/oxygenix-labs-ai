"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = Array.from({ length: 20 }, (_, i) => ({
    gen: `G${i + 1}`,
    yield: 40 + Math.pow(i, 0.8) * 2 + Math.random() * 2,
    baseline: 40 + i * 0.5
}));

export default function YieldChart() {
    return (
        <div className="bg-[#0A0F0D] border border-white/5 rounded-2xl p-6 h-[300px]">
            <h3 className="text-sm font-medium text-white mb-4 uppercase tracking-wider">Yield Projection</h3>
            <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <XAxis
                            dataKey="gen"
                            stroke="#64748b"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                            interval={4}
                        />
                        <YAxis
                            stroke="#64748b"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}
                            unit=" bu/ac"
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#0A0F0D', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                            itemStyle={{ color: '#fff', fontSize: '12px' }}
                            labelStyle={{ color: '#64748b', fontSize: '10px', marginBottom: '4px' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="yield"
                            stroke="#10b981"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{ r: 4, fill: '#10b981' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="baseline"
                            stroke="#64748b"
                            strokeWidth={1}
                            strokeDasharray="4 4"
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
