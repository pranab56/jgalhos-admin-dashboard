"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface Admin {
  sl: string;
  name: string;
  avatar: string;
  createdAt: string;
}

interface NewAdmin {
  name: string;
  email: string;
}

const SuperAdminList = () => {
  const [selectedAdmins, setSelectedAdmins] = useState<string[]>([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState<boolean>(false);
  const [admins, setAdmins] = useState<Admin[]>([
    { sl: '01', name: 'Jenny Wilson', avatar: '👩', createdAt: '22 Oct, 2021' },
    { sl: '02', name: 'Savannah Nguyen', avatar: '👩', createdAt: '22 Nov, 2022' },
    { sl: '03', name: 'Darrell Steward', avatar: '👨', createdAt: '22 Jan, 2023' },
    { sl: '04', name: 'Esther Howard', avatar: '👩', createdAt: '22 April, 2024' },
  ]);

  const [newAdmin, setNewAdmin] = useState<NewAdmin>({
    name: '',
    email: '',
  });

  const handleSelectAll = (checked: boolean | "indeterminate"): void => {
    if (checked === true) {
      setSelectedAdmins(admins.map(a => a.sl));
    } else {
      setSelectedAdmins([]);
    }
  };

  const handleSelectAdmin = (sl: string, checked: boolean | "indeterminate"): void => {
    if (checked === true) {
      setSelectedAdmins([...selectedAdmins, sl]);
    } else {
      setSelectedAdmins(selectedAdmins.filter(id => id !== sl));
    }
  };

  const handleEdit = (admin: Admin): void => {
    console.log('Edit admin:', admin);
    // Add edit functionality here
  };

  const handleDelete = (admin: Admin): void => {
    if (window.confirm(`Are you sure you want to delete ${admin.name}?`)) {
      setAdmins(admins.filter(a => a.sl !== admin.sl));
    }
  };

  const handleAddAdmin = (): void => {
    if (newAdmin.name && newAdmin.email) {
      const newSl = String(admins.length + 1).padStart(2, '0');
      const today = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });

      setAdmins([...admins, {
        sl: newSl,
        name: newAdmin.name,
        avatar: '👤',
        createdAt: today,
      }]);

      setNewAdmin({ name: '', email: '' });
      setIsAddDialogOpen(false);
    }
  };

  return (
    <div className="">
      <div className="">
        <Card className="border-0 shadow-lg p-0">
          <CardContent className="p-8">
            {/* Header with Add Button */}
            <div className="flex justify-end mb-6">
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Super Admin
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add Super Admin</DialogTitle>
                    <DialogDescription>
                      Create a new super admin account. Fill in the details below.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter full name"
                        value={newAdmin.name}
                        onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter email address"
                        value={newAdmin.email}
                        onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddAdmin} className="bg-emerald-500 hover:bg-emerald-600">
                      Add Admin
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">
                      <Checkbox
                        checked={selectedAdmins.length === admins.length && admins.length > 0}
                        onCheckedChange={handleSelectAll}
                      />
                    </th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">SI</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Name</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Created At</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((admin, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-5 px-4">
                        <Checkbox
                          checked={selectedAdmins.includes(admin.sl)}
                          onCheckedChange={(checked) => handleSelectAdmin(admin.sl, checked)}
                        />
                      </td>
                      <td className="py-5 px-4 text-gray-900 font-medium">{admin.sl}</td>
                      <td className="py-5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-lg font-semibold shadow-md">
                            {admin.avatar}
                          </div>
                          <span className="text-gray-900 font-medium">{admin.name}</span>
                        </div>
                      </td>
                      <td className="py-5 px-4 text-gray-600">{admin.createdAt}</td>
                      <td className="py-5 px-4">
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            className="w-9 h-9 bg-emerald-500 hover:bg-emerald-600 rounded-md"
                            onClick={() => handleEdit(admin)}
                          >
                            <Pencil className="w-4 h-4 text-white" />
                          </Button>
                          <Button
                            size="icon"
                            className="w-9 h-9 bg-red-500 hover:bg-red-600 rounded-md"
                            onClick={() => handleDelete(admin)}
                          >
                            <Trash2 className="w-4 h-4 text-white" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {admins.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No super admins found.</p>
                <p className="text-gray-400 text-sm mt-2">
                  Click &quot;Add Super Admin&quot; to create one.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SuperAdminList;