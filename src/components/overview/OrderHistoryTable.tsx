"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight, Download, Filter } from "lucide-react";
import Image from 'next/image';
import { useState } from "react";

interface Order {
  id: string;
  orderId: string;
  customer: {
    name: string;
    avatar: string;
  };
  items: string;
  amount: string;
  date: string;
  status: "Pending" | "Delivered" | "Canceled";
}

const orders: Order[] = [
  {
    id: "1",
    orderId: "#210987",
    customer: {
      name: "Jane Cooper",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
    items: "02",
    amount: "$41",
    date: "22 Oct, 2020",
    status: "Pending",
  },
  {
    id: "2",
    orderId: "#456789",
    customer: {
      name: "Kristin Watson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kristin",
    },
    items: "04",
    amount: "$11",
    date: "1 Feb, 2020",
    status: "Delivered",
  },
  {
    id: "3",
    orderId: "#890123",
    customer: {
      name: "Theresa Webb",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Theresa",
    },
    items: "06",
    amount: "$12",
    date: "17 Oct, 2020",
    status: "Delivered",
  },
  {
    id: "4",
    orderId: "#678901",
    customer: {
      name: "Marvin McKinney",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marvin",
    },
    items: "01",
    amount: "$44",
    date: "24 May, 2020",
    status: "Canceled",
  },
  {
    id: "5",
    orderId: "#345678",
    customer: {
      name: "Eleanor Pena",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eleanor",
    },
    items: "10",
    amount: "$31",
    date: "8 Sep, 2020",
    status: "Delivered",
  },
  {
    id: "6",
    orderId: "#345678",
    customer: {
      name: "Darrell Steward",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Darrell",
    },
    items: "05",
    amount: "$18",
    date: "1 Feb, 2020",
    status: "Delivered",
  },
  {
    id: "7",
    orderId: "#654321",
    customer: {
      name: "Courtney Henry",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Courtney",
    },
    items: "05",
    amount: "$21",
    date: "22 Oct, 2020",
    status: "Delivered",
  },
  {
    id: "8",
    orderId: "#987123",
    customer: {
      name: "Brooklyn Simmons",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Brooklyn",
    },
    items: "05",
    amount: "$15",
    date: "17 Oct, 2020",
    status: "Delivered",
  },
  {
    id: "9",
    orderId: "#123456",
    customer: {
      name: "Darlene Robertson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Darlene",
    },
    items: "06",
    amount: "$37",
    date: "21 Sep, 2020",
    status: "Delivered",
  },
  {
    id: "10",
    orderId: "#543210",
    customer: {
      name: "Leslie Alexander",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leslie",
    },
    items: "03",
    amount: "$20",
    date: "17 Oct, 2020",
    status: "Delivered",
  },
];

export default function OrderHistoryTable() {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleOrderSelection = (orderId: string) => {
    setSelectedOrders((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  const toggleAllOrders = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(orders.map((o) => o.id));
    }
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-50 text-green-700 hover:bg-green-50 border-green-200";
      case "Canceled":
        return "bg-red-50 text-red-700 hover:bg-red-50 border-red-200";
      case "Pending":
        return "bg-blue-50 text-blue-700 hover:bg-blue-50 border-blue-200";
      default:
        return "bg-gray-50 text-gray-700 hover:bg-gray-50 border-gray-200";
    }
  };

  return (
    <Card className="border-0 shadow-sm bg-white rounded-2xl">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-gray-900">
            Order History
          </CardTitle>
          <div className="flex items-center gap-3">
            {/* Filter Button */}
            <Button
              variant="outline"
              className="h-9 px-4 gap-2 text-sm border-gray-200 hover:bg-gray-50"
            >
              <Filter className="h-4 w-4" />
              Filter
            </Button>

            {/* Export Button */}
            <Button
              variant="outline"
              className="h-9 px-4 gap-2 text-sm border-gray-200 hover:bg-gray-50"
            >
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="rounded-xl border border-gray-100 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-white hover:bg-white border-b border-gray-100">
                <TableHead className="w-12 pl-6">
                  <Checkbox
                    checked={selectedOrders.length === orders.length}
                    onCheckedChange={toggleAllOrders}
                    className="border-gray-300"
                  />
                </TableHead>
                <TableHead className="font-medium text-gray-600 text-sm">Order Id</TableHead>
                <TableHead className="font-medium text-gray-600 text-sm">Customer</TableHead>
                <TableHead className="font-medium text-gray-600 text-sm">Items</TableHead>
                <TableHead className="font-medium text-gray-600 text-sm">Amount</TableHead>
                <TableHead className="font-medium text-gray-600 text-sm">Date</TableHead>
                <TableHead className="font-medium text-gray-600 text-sm">Status</TableHead>
                <TableHead className="font-medium text-gray-600 text-sm">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow
                  key={order.id}
                  className={`hover:bg-gray-50 ${index !== orders.length - 1 ? 'border-b border-gray-50' : ''}`}
                >
                  <TableCell className="pl-6">
                    <Checkbox
                      checked={selectedOrders.includes(order.id)}
                      onCheckedChange={() => toggleOrderSelection(order.id)}
                      className="border-gray-300"
                    />
                  </TableCell>
                  <TableCell className="font-medium text-gray-600 text-sm">
                    {order.orderId}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={order.customer.avatar}
                          alt={order.customer.name}
                          width={1000}
                          height={1000}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-medium text-gray-900 text-sm">
                        {order.customer.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600 text-sm">{order.items}</TableCell>
                  <TableCell className="text-gray-900 text-sm font-medium">{order.amount}</TableCell>
                  <TableCell className="text-gray-600 text-sm">{order.date}</TableCell>
                  <TableCell>
                    <Badge
                      className={`${getStatusStyles(order.status)} font-normal text-xs px-3 py-1 border`}
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 px-4 text-sm font-medium text-white bg-[#5d3fd3] hover:bg-[#4d2fb3] rounded-lg"
                    >
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-6 gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-lg hover:bg-gray-100"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant={currentPage === 1 ? "default" : "ghost"}
            size="sm"
            className={`h-9 w-9 rounded-lg ${currentPage === 1
                ? "bg-[#5d3fd3] hover:bg-[#4d2fb3] text-white"
                : "hover:bg-gray-100 text-gray-700"
              }`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </Button>

          <Button
            variant={currentPage === 2 ? "default" : "ghost"}
            size="sm"
            className={`h-9 w-9 rounded-lg ${currentPage === 2
                ? "bg-[#5d3fd3] hover:bg-[#4d2fb3] text-white"
                : "hover:bg-gray-100 text-gray-700"
              }`}
            onClick={() => setCurrentPage(2)}
          >
            2
          </Button>

          <Button
            variant={currentPage === 3 ? "default" : "ghost"}
            size="sm"
            className={`h-9 w-9 rounded-lg ${currentPage === 3
                ? "bg-[#5d3fd3] hover:bg-[#4d2fb3] text-white"
                : "hover:bg-gray-100 text-gray-700"
              }`}
            onClick={() => setCurrentPage(3)}
          >
            3
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-lg hover:bg-gray-100"
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}