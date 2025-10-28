"use client";

import { useState } from 'react';
import DateRangeSelector from '../../../components/order/DateRangeSelector';
import OrderTable from '../../../components/order/OrderTable';
import StatsCards from '../../../components/order/StatsCards';
import { Order } from '../../../components/order/types';

const OrderDashboard = () => {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dateRange, setDateRange] = useState('17 Oct 2024 - 21 Oct 2024');

  const orders: Order[] = [
    { id: '#210987', customer: 'Jane Cooper', avatar: '👩', items: '02', amount: '$41', date: '22 Oct, 2020', status: 'Pending' },
    { id: '#456789', customer: 'Kristin Watson', avatar: '👨', items: '04', amount: '$11', date: '1 Feb, 2020', status: 'Delivered' },
    { id: '#890123', customer: 'Theresa Webb', avatar: '👩', items: '08', amount: '$12', date: '17 Oct, 2020', status: 'Delivered' },
    { id: '#678901', customer: 'Marvin McKinney', avatar: '👨', items: '01', amount: '$44', date: '24 May, 2020', status: 'Canceled' },
    { id: '#345678', customer: 'Eleanor Pena', avatar: '👩', items: '10', amount: '$31', date: '8 Sep, 2020', status: 'Delivered' },
    { id: '#345678', customer: 'Darrell Steward', avatar: '👨', items: '05', amount: '$18', date: '1 Feb, 2020', status: 'Delivered' },
    { id: '#654321', customer: 'Courtney Henry', avatar: '👩', items: '05', amount: '$21', date: '22 Oct, 2020', status: 'Delivered' },
    { id: '#987123', customer: 'Brooklyn Simmons', avatar: '👨', items: '05', amount: '$15', date: '17 Oct, 2020', status: 'Delivered' },
    { id: '#123456', customer: 'Darlene Robertson', avatar: '👩', items: '08', amount: '$37', date: '21 Sep, 2020', status: 'Delivered' },
    { id: '#543210', customer: 'Leslie Alexander', avatar: '👨', items: '03', amount: '$20', date: '17 Oct, 2020', status: 'Delivered' },
  ];

  return (
    <div className="">
      <div className="space-y-6">
        {/* Header with Date Range */}
        <div className="flex justify-end">
          <DateRangeSelector dateRange={dateRange} setDateRange={setDateRange} />
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Order History Table */}
        <OrderTable
          orders={orders}
          selectedOrders={selectedOrders}
          setSelectedOrders={setSelectedOrders}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default OrderDashboard;