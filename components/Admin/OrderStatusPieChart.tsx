import React from 'react';

declare const window: Window & {
  Recharts: any;
};

interface OrderStatusPieChartProps {
    data: { name: string; value: number; fill: string }[];
}

const OrderStatusPieChart: React.FC<OrderStatusPieChartProps> = ({ data }) => {
     if (typeof window.Recharts === 'undefined') {
        return <div>Loading chart...</div>;
    }
    const { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } = window.Recharts;
    
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend iconType="circle" layout="vertical" verticalAlign="middle" align="right" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default OrderStatusPieChart;
