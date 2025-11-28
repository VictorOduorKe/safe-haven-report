import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className='flex h-screen bg-gray-50 dark:bg-gray-900'>
      <Sidebar />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <Header />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 md:p-8'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </main>
      </div>
      <Toaster richColors position='top-right' />
    </div>
  );
}
