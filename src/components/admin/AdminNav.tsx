import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Users, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Content', href: '/admin/content', icon: FileText },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

const AdminNav: React.FC = () => {
  const location = useLocation();
  const { signOut } = useAuth();

  return (
    <div className="h-16 fixed w-full z-50 flex bg-white shadow">
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  location.pathname === item.href
                    ? 'border-b-2 border-accent text-primary'
                    : 'text-gray-500 hover:text-primary'
                }`}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="ml-4 flex items-center md:ml-6">
          <button
            onClick={signOut}
            className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <LogOut className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;