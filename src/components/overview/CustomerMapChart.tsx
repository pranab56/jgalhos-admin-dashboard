"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface CustomerData {
  day: number;
  value: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: CustomerData;
    value: number;
  }>;
}

const CustomerMapTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-gray-800 text-white px-3 py-2 rounded shadow-lg">
        <p className="text-xs">Day {data.day}: {data.value} customers</p>
      </div>
    );
  }
  return null;
};

const CustomerMapChart = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>('October');

  const data: CustomerData[] = Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    value: Math.floor(Math.random() * 800) + 200
  }));

  // Set specific values for highlighted days
  data[12].value = 1000; // Day 13
  data[16].value = 980; // Day 17

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Customer Map</CardTitle>
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="October">📅 October</SelectItem>
            <SelectItem value="September">📅 September</SelectItem>
            <SelectItem value="August">📅 August</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 11 }}
              interval="preserveStartEnd"
              ticks={[1, 5, 10, 15, 20, 25, 31]}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9ca3af', fontSize: 11 }}
              ticks={[0, 250, 500, 750, 1000]}
            />
            <Tooltip content={<CustomerMapTooltip />} cursor={{ fill: 'rgba(0,0,0,0.05)' }} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={20}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.day === 13 || entry.day === 17 ? '#fbbf24' : '#fcd34d'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CustomerMapChart;