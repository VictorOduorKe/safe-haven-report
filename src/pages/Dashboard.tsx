import { PlusCircle, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

// Minimalistic StatCard component included here
const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-5'>
    <div className='flex items-center'>
      <div className={`p-3 rounded-full ${color} bg-opacity-20`}>
         <Icon className={`h-6 w-6 ${color}`} />
      </div>
      <div className='ml-4'>
        <p className='text-sm font-medium text-gray-500 dark:text-gray-400 truncate'>{title}</p>
        <p className='text-2xl font-semibold text-gray-900 dark:text-white'>{value}</p>
      </div>
    </div>
  </div>
);

// Mock data for recent reports
const recentReports = [
  { id: 'RPT-001', type: 'Physical Assault', status: 'Pending', date: '2025-11-28' },
  { id: 'RPT-002', type: 'Verbal Abuse', status: 'Resolved', date: '2025-11-27' },
  { id: 'RPT-003', type: 'Cyberbullying', status: 'In Progress', date: '2025-11-27' },
  { id: 'RPT-004', type: 'Physical Assault', status: 'Pending', date: '2025-11-26' },
];

// RecentReportsTable component included here
const RecentReportsTable = () => (
  <div className='bg-white dark:bg-gray-800 rounded-lg shadow mt-8'>
     <h3 className='text-lg leading-6 font-medium text-gray-900 dark:text-white p-5'>Recent Reports</h3>
    <div className='overflow-x-auto'>
      <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
        <thead className='bg-gray-50 dark:bg-gray-700'>
          <tr>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>Report ID</th>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>Type</th>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>Status</th>
            <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>Date</th>
          </tr>
        </thead>
        <tbody className='bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700'>
          {recentReports.map((report) => (
            <tr key={report.id}>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white'>{report.id}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300'>{report.type}</td>
              <td className='px-6 py-4 whitespace-nowrap text-sm'>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${report.status === 'Resolved' ? 'bg-green-100 text-green-800' : report.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                  {report.status}
                </span>
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300'>{report.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>Dashboard</h1>
        <button 
          onClick={() => toast.success('New report form opened!')}
          className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          <PlusCircle className='-ml-1 mr-2 h-5 w-5' />
          Report New Incident
        </button>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        <StatCard title='Total Reports' value='1,284' icon={TrendingUp} color='text-indigo-500' />
        <StatCard title='Pending Review' value='72' icon={Clock} color='text-yellow-500' />
        <StatCard title='Cases Resolved' value='1,198' icon={CheckCircle} color='text-green-500' />
      </div>

      {/* Recent Reports Table */}
      <RecentReportsTable />
    </div>
  );
}
