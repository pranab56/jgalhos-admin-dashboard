"use client"

import { Package, Target, TrendingUp, Users } from 'lucide-react';
import CustomerMapChart from './CustomerMapChart';
import EarningProfitChart from './EarningProfitChart';
import StatsCard from './StatsCard';
import TrendingItems from './TrendingItems';


const Dashboard = () => {
  return (
    <div className="">
      <div className="  space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            icon={Users}
            title="Total User"
            value="10,000"
            bgColor="bg-blue-100"
            iconColor="text-blue-600"
          />
          <StatsCard
            icon={Package}
            title="Total Order"
            value="500"
            bgColor="bg-amber-100"
            iconColor="text-amber-600"
          />
          <StatsCard
            icon={TrendingUp}
            title="Total Earning"
            value="€5000"
            bgColor="bg-emerald-100"
            iconColor="text-emerald-600"
          />
          <StatsCard
            icon={Target}
            title="Total Profit"
            value="€5000"
            bgColor="bg-purple-100"
            iconColor="text-purple-600"
          />
        </div>

        {/* Earning & Profit Chart */}
        <EarningProfitChart />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CustomerMapChart />
          </div>
          <div>
            <TrendingItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;