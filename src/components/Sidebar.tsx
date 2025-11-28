import { NavLink } from 'react-router-dom';
import { Home, FileText, BarChart3, Settings, Shield, Bell } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className='hidden md:flex md:flex-shrink-0'>
      <div className='flex flex-col w-64'>
        <div className='flex items-center h-16 flex-shrink-0 px-4 bg-gray-900'>
           <Shield className='h-8 w-8 text-indigo-400' />
           <span className='ml-2 text-white text-lg font-semibold'>SalamaReport</span>
        </div>
        <div className='flex-1 flex flex-col overflow-y-auto bg-gray-800'>
          <nav className='flex-1 px-2 py-4 space-y-1'>
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ` +
                  (isActive
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white')
                }
              >
                <item.icon
                  className='mr-3 flex-shrink-0 h-6 w-6'
                />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
