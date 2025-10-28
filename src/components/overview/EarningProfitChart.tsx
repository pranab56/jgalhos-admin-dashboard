"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface ChartData {
  month: string;
  earning: number;
  profit: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: ChartData;
    value: number;
  }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-gray-800 text-white px-3 py-2 rounded shadow-lg">
        <p className="text-sm font-semibold">{data.month}</p>
        <p className="text-xs text-indigo-300">Earning: €{data.earning.toLocaleString()}</p>
        <p className="text-xs text-amber-300">Profit: €{data.profit.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

const EarningProfitChart = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2024');

  const data: ChartData[] = [
    { month: 'Jan', earning: 5000, profit: 500 },
    { month: 'Feb', earning: 3000, profit: 400 },
    { month: 'Mar', earning: 9000, profit: 1500 },
    { month: 'Apr', earning: 9500, profit: 1800 },
    { month: 'May', earning: 9000, profit: 1500 },
    { month: 'Jun', earning: 9500, profit: 1500 },
    { month: 'Jul', earning: 9950, profit: 1670 },
    { month: 'Aug', earning: 5500, profit: 600 },
    { month: 'Sep', earning: 3000, profit: 1500 },
    { month: 'Oct', earning: 9000, profit: 1500 },
    { month: 'Nov', earning: 9500, profit: 1500 },
    { month: 'Dec', earning: 9500, profit: 1500 }
  ];

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Total Earning & Profit</CardTitle>
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">📅 2024</SelectItem>
            <SelectItem value="2023">📅 2023</SelectItem>
            <SelectItem value="2022">📅 2022</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              tickFormatter={(value: number) => `€${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.05)' }} />
            <Bar dataKey="earning" fill="#4f46e5" radius={[4, 4, 0, 0]} maxBarSize={40} />
            <Bar dataKey="profit" fill="#fbbf24" radius={[4, 4, 0, 0]} maxBarSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default EarningProfitChart;