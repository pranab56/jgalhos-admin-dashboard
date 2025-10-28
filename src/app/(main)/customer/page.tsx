"use client";

import { useState } from 'react';
import CustomerTable from '../../../components/customer/CustomerTable';
import StatsCards from '../../../components/customer/StatsCards';
import { Customer } from '../../../components/customer/types';

const CustomerList = () => {
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const customers: Customer[] = [
    { id: 'C1001', name: 'Sazzad Chowdhury', email: 'sazzad.cse@gmail.com', phone: '01113337774', order: '25', status: 'Active' },
    { id: 'C1001', name: 'Robert Fox', email: 'sazzad.cse@gmail.com', phone: '01113337774', order: '25', status: 'Inactive' },
    { id: 'C1001', name: 'Arlene McCoy', email: 'sazzad.cse@gmail.com', phone: '01113337774', order: '25', status: 'Active' },
    { id: 'C1001', name: 'Eleanor Pena', email: 'sazzad.cse@gmail.com', phone: '01113337774', order: '25', status: 'Active' },
    { id: 'C1001', name: 'Kathryn Murphy', email: 'sazzad.cse@gmail.com', phone: '01113337774', order: '25', status: 'Suspended' },
    { id: 'C1001', name: 'Esther Howard', email: 'sazzad.cse@gmail.com', phone: '01113337774', order: '25', status: 'Active' },
    { id: 'C1001', name: 'Brooklyn Simmons', email: 'sazzad.cse@gmail.com', phone: '01113337774', order: '25', status: 'Active' },
    { id: 'C1001', name: 'Darrell Steward', email: 'sazzad.cse@gmail.com', phone: '01113337774', order: '25', status: 'Active' },
    { id: 'C1001', name: 'Leslie Alexander', email: 'sazzad.cse@gmail.com', phone: '01113337774', order: '25', status: 'Active' },
    { id: 'C1001', name: 'Jacob Jones', email: 'sazzad.cse@gmail.com', phone: '01113337774', order: '25', status: 'Active' },
  ];

  const handleEdit = (customer: Customer) => {
    console.log('Edit customer:', customer);
  };

  const handleView = (customer: Customer) => {
    console.log('View customer:', customer);
  };

  const handleDelete = (customer: Customer) => {
    console.log('Delete customer:', customer);
  };

  return (
    <div className="">
      <div className="space-y-6">
        {/* Stats Cards */}
        <StatsCards />

        {/* Customer List Table */}
        <CustomerTable
          customers={customers}
          selectedCustomers={selectedCustomers}
          setSelectedCustomers={setSelectedCustomers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          onEdit={handleEdit}
          onView={handleView}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default CustomerList;