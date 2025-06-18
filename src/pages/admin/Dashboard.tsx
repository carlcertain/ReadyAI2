import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, Users, Settings } from 'lucide-react';
import AdminNav from '../../components/admin/AdminNav';
import ContentList from '../../components/admin/ContentList';
import { useAuth } from '../../hooks/useAuth';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  React.useEffect(() => {
    if (!isLoading && !user) {
      navigate('/admin/login');
    }
  }, [user, isLoading, navigate]);

  if (isLoading || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNav />
      
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Quick stats */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <FileText className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Total Pages
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">12</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Active Users
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">3</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <ContentList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;