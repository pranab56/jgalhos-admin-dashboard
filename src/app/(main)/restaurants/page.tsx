"use client";

import { useState } from 'react';
import DateRangeSelector from '../../../components/restaurants/DateRangeSelector';
import RestaurantList from '../../../components/restaurants/RestaurantList';
import StatsCards from '../../../components/restaurants/StatsCards';
import TopItems from '../../../components/restaurants/TopItems';
import TopRestaurants from '../../../components/restaurants/TopRestaurants';

interface Restaurant {
  id: string;
  name: string;
  city: string;
  contact: string;
  earning: string;
  status: string;
}

interface TopRestaurant {
  id: number;
  name: string;
  logo: string;
  sales: number;
  earning: string;
}

interface TopItem {
  id: number;
  name: string;
  icon: string;
  quantity: number;
  earning: string;
}

const RestaurantDashboard = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [restaurantPage, setRestaurantPage] = useState<number>(1);
  const [itemPage, setItemPage] = useState<number>(1);
  const [dateRange, setDateRange] = useState<string>('17 Oct 2024 - 21 Oct 2024');

  // Sample data
  const restaurants: Restaurant[] = Array(9).fill(null).map((_, index) => ({
    id: `R${1001 + index}`,
    name: 'Pizza Hut',
    city: 'Austria',
    contact: '0111333774',
    earning: '€1000',
    status: 'Approved',
  }));

  const topRestaurants: TopRestaurant[] = [
    { id: 1, name: 'Pizza Hut', logo: '🍕', sales: 100, earning: '€1200' },
    { id: 2, name: 'Burger King', logo: '🍔', sales: 95, earning: '€1150' },
    { id: 3, name: 'Coffee Shop', logo: '☕', sales: 90, earning: '€1100' },
    { id: 4, name: 'Italian Restaurant', logo: '🍝', sales: 85, earning: '€1050' },
    { id: 5, name: 'Sushi Place', logo: '🍣', sales: 80, earning: '€1000' },
  ];

  const topItems: TopItem[] = [
    { id: 1, name: 'Burger', icon: '🍔', quantity: 1000, earning: '€1200' },
    { id: 2, name: 'Pizza', icon: '🍕', quantity: 950, earning: '€1150' },
    { id: 3, name: 'French fry', icon: '🍟', quantity: 900, earning: '€1100' },
    { id: 4, name: 'Donuts', icon: '🍩', quantity: 850, earning: '€1050' },
    { id: 5, name: 'Taco', icon: '🌮', quantity: 800, earning: '€1000' },
  ];

  return (
    <div className="">
      {/* Date Range Selector */}
      <div className="flex justify-end mb-6">
        <DateRangeSelector dateRange={dateRange} setDateRange={setDateRange} />
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Restaurant List */}
      <RestaurantList
        restaurants={restaurants}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Top Restaurants and Top Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <TopRestaurants
          restaurants={topRestaurants}
          currentPage={restaurantPage}
          setCurrentPage={setRestaurantPage}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />

        <TopItems
          items={topItems}
          currentPage={itemPage}
          setCurrentPage={setItemPage}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      </div>
    </div>
  );
};

export default RestaurantDashboard;