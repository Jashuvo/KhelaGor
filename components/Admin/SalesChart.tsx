import React from 'react';

declare const window: Window & {
  Recharts: any;
};

interface SalesChartProps {
    data: { name: string; sales: number }[];
}

const SalesChart: React.FC<SalesChartProps> = ({ data }) => {
    if (typeof window.Recharts === 'undefined') {
        return <div>Loading chart...</div>;
    }
    const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = window.Recharts;
    
    return (
        <div style={{ width: '100%', height: 300 }}>
             <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tickFormatter={(value) => `৳${value/1000}k`} tick={{ fontSize: 12 }} />
                    <Tooltip formatter={(value: number) => [`৳${value.toLocaleString()}`, "Sales"]} />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesChart;
