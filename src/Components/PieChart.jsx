'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const salesData = [
  {
    name: 'Jan',
    revenue: 4000,
    profit: 2400,
  },
  {
    name: 'Feb',
    revenue: 3000,
    profit: 1398,
  },
  {
    name: 'Mar',
    revenue: 9800,
    profit: 2000,
  },
  {
    name: 'Apr',
    revenue: 3908,
    profit: 2780,
  },
  {
    name: 'May',
    revenue: 4800,
    profit: 1890,
  },
  {
    name: 'Jun',
    revenue: 3800,
    profit: 2390,
  },
];

const COLORS = ['#2563eb', '#8b5cf6', '#3b82f6', '#7c3aed', '#6366f1', '#a78bfa'];

const data = [
  { name: 'Revenue', value: salesData.reduce((acc, item) => acc + item.revenue, 0) },
  { name: 'Profit', value: salesData.reduce((acc, item) => acc + item.profit, 0) },
];

const PieChartComponent = () => {
  return (
    <div style={{ width: '50%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
