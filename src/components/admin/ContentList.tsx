import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Edit2, Trash2 } from 'lucide-react';
import Button from '../ui/Button';
import { useContent } from '../../hooks/useContent';
import type { Content } from '../../types/admin';

const ContentList: React.FC = () => {
  const { content, isLoading, error } = useContent();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading content</div>;
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Content</h3>
        <Link to="/admin/content/new">
          <Button>New Content</Button>
        </Link>
      </div>
      <ul role="list" className="divide-y divide-gray-200">
        {content?.map((item: Content) => (
          <li key={item.id}>
            <div className="px-4 py-4 flex items-center sm:px-6">
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FileText className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-primary truncate">{item.title}</p>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.type} • Version {item.current_version}
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-5 flex-shrink-0 flex space-x-2">
                <Link
                  to={`/admin/content/${item.id}`}
                  className="text-accent hover:text-accent-dark"
                >
                  <Edit2 className="h-5 w-5" />
                </Link>
                <button className="text-red-500 hover:text-red-700">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;