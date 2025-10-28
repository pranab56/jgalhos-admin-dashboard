"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TrendingItem {
  rank: number;
  name: string;
  price: string;
  orders: string;
  emoji: string;
}

const TrendingItems = () => {
  const items: TrendingItem[] = [
    { rank: 1, name: 'Burger', price: '$5.6', orders: '89x', emoji: '🍔' },
    { rank: 2, name: 'Pizza', price: '$5.6', orders: '59x', emoji: '🍕' },
    { rank: 3, name: 'Taco', price: '$5.6', orders: '30x', emoji: '🌮' },
    { rank: 4, name: 'Kebab', price: '$5.6', orders: '28x', emoji: '🥙' }
  ];

  return (
    <Card className="border-0 shadow-sm h-[375px] overflow-y-scroll">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Trending Items</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div key={item.rank} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3 flex-1">
              <span className="text-sm font-semibold text-gray-400 w-6">#{item.rank}</span>
              <div className="bg-orange-50 p-2 rounded-lg">
                <span className="text-2xl">{item.emoji}</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">Order {item.orders}</p>
              </div>
            </div>
            <span className="font-semibold text-gray-900">{item.price}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrendingItems;