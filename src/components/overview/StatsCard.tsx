"use client"

import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  bgColor: string;
  iconColor: string;
}

const StatsCard = ({ icon: Icon, title, value, bgColor, iconColor }: StatsCardProps) => {
  return (
    <Card className="border-0 shadow-sm p-0">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className={`${bgColor} p-3 rounded-xl`}>
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;