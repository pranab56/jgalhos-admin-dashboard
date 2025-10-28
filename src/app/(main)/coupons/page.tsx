"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { ChevronLeft, ChevronRight, Eye, Filter, Pencil, Search, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface Coupon {
  sl: string;
  promoCode: string;
  discount: string;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Inactive';
  restaurant: string;
}

const CouponList = () => {
  const [selectedCoupons, setSelectedCoupons] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const coupons: Coupon[] = [
    { sl: '01', promoCode: 'PAYTM20', discount: '20%', startDate: '20 Dec 24', endDate: '31 Dec 24', status: 'Active', restaurant: 'Pizza Hut' },
    { sl: '02', promoCode: 'PAYTM20', discount: '20%', startDate: '20 Dec 24', endDate: '31 Dec 24', status: 'Inactive', restaurant: 'Pizza Hut' },
    { sl: '03', promoCode: 'PAYTM20', discount: '20%', startDate: '20 Dec 24', endDate: '31 Dec 24', status: 'Active', restaurant: 'Pizza Hut' },
    { sl: '04', promoCode: 'PAYTM20', discount: '20%', startDate: '20 Dec 24', endDate: '31 Dec 24', status: 'Active', restaurant: 'Pizza Hut' },
    { sl: '05', promoCode: 'PAYTM20', discount: '20%', startDate: '20 Dec 24', endDate: '31 Dec 24', status: 'Inactive', restaurant: 'Pizza Hut' },
    { sl: '06', promoCode: 'PAYTM20', discount: '20%', startDate: '20 Dec 24', endDate: '31 Dec 24', status: 'Active', restaurant: 'Pizza Hut' },
    { sl: '07', promoCode: 'PAYTM20', discount: '20%', startDate: '20 Dec 24', endDate: '31 Dec 24', status: 'Active', restaurant: 'Pizza Hut' },
    { sl: '08', promoCode: 'PAYTM20', discount: '20%', startDate: '20 Dec 24', endDate: '31 Dec 24', status: 'Active', restaurant: 'Pizza Hut' },
    { sl: '09', promoCode: 'PAYTM20', discount: '20%', startDate: '20 Dec 24', endDate: '31 Dec 24', status: 'Active', restaurant: 'Pizza Hut' },
    { sl: '10', promoCode: 'PAYTM20', discount: '20%', startDate: '20 Dec 24', endDate: '31 Dec 24', status: 'Active', restaurant: 'Pizza Hut' },
  ];

  const filteredCoupons = coupons.filter(coupon => {
    const matchesSearch = coupon.promoCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coupon.restaurant.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || coupon.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const handleSelectAll = (checked: boolean | "indeterminate"): void => {
    if (checked === true) {
      setSelectedCoupons(filteredCoupons.map(c => c.sl));
    } else {
      setSelectedCoupons([]);
    }
  };

  const handleSelectCoupon = (sl: string, checked: boolean | "indeterminate"): void => {
    if (checked === true) {
      setSelectedCoupons([...selectedCoupons, sl]);
    } else {
      setSelectedCoupons(selectedCoupons.filter(id => id !== sl));
    }
  };

  const handleEdit = (coupon: Coupon): void => {
    console.log('Edit coupon:', coupon);
  };

  const handleView = (coupon: Coupon): void => {
    console.log('View coupon:', coupon);
  };

  const handleDelete = (coupon: Coupon): void => {
    console.log('Delete coupon:', coupon);
  };

  return (
    <div className="">
      <div className="">
        <Card className="border-0 shadow-sm p-0">
          <CardContent className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Coupon List</h1>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-64 bg-white border-gray-200"
                  />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="bg-white border-gray-200">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem onClick={() => setFilterStatus('all')}>
                      All Status
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilterStatus('active')}>
                      Active
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setFilterStatus('inactive')}>
                      Inactive
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">
                      <Checkbox
                        checked={selectedCoupons.length === filteredCoupons.length && filteredCoupons.length > 0}
                        onCheckedChange={handleSelectAll}
                      />
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">SI</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Promo Code</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Discount</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Start Date</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">End Date</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Status</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Restaurant</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCoupons.map((coupon, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <Checkbox
                          checked={selectedCoupons.includes(coupon.sl)}
                          onCheckedChange={(checked) => handleSelectCoupon(coupon.sl, checked)}
                        />
                      </td>
                      <td className="py-4 px-4 text-gray-900 font-medium">{coupon.sl}</td>
                      <td className="py-4 px-4 text-gray-900">{coupon.promoCode}</td>
                      <td className="py-4 px-4 text-gray-900">{coupon.discount}</td>
                      <td className="py-4 px-4 text-gray-600">{coupon.startDate}</td>
                      <td className="py-4 px-4 text-gray-600">{coupon.endDate}</td>
                      <td className="py-4 px-4">
                        <Badge
                          className={`${coupon.status === 'Active'
                            ? 'bg-emerald-500 hover:bg-emerald-600'
                            : 'bg-red-500 hover:bg-red-600'
                            } text-white border-0 px-4 py-1`}
                        >
                          {coupon.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4 text-gray-900">{coupon.restaurant}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            className="w-8 h-8 bg-emerald-500 hover:bg-emerald-600"
                            onClick={() => handleEdit(coupon)}
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            className="w-8 h-8 bg-amber-500 hover:bg-amber-600"
                            onClick={() => handleView(coupon)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            className="w-8 h-8 bg-red-500 hover:bg-red-600"
                            onClick={() => handleDelete(coupon)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 bg-white"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                className={`w-10 h-10 ${currentPage === 1 ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-white text-gray-700 border border-gray-200'}`}
                onClick={() => setCurrentPage(1)}
              >
                1
              </Button>

              <Button
                className={`w-10 h-10 ${currentPage === 2 ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-white text-gray-700 border border-gray-200'}`}
                onClick={() => setCurrentPage(2)}
              >
                2
              </Button>

              <Button
                className={`w-10 h-10 ${currentPage === 3 ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-white text-gray-700 border border-gray-200'}`}
                onClick={() => setCurrentPage(3)}
              >
                3
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 bg-white"
                onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
                disabled={currentPage === 3}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CouponList;