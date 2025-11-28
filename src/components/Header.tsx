import { Search, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className='w-full bg-white dark:bg-gray-800 shadow-sm'>
      <div className='relative z-10 flex-shrink-0 h-16 flex'>
        <div className='flex-1 flex justify-between px-4 sm:px-6 md:px-8'>
          <div className='flex-1 flex'>
            <form className='w-full flex md:ml-0' action='#' method='GET'>
              <label htmlFor='search-field' className='sr-only'>
                Search
              </label>
              <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                  <Search className='h-5 w-5' aria-hidden='true' />
                </div>
                <input
                  id='search-field'
                  className='block w-full h-full pl-8 pr-3 py-2 border-transparent bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
                  placeholder='Search reports...'
                  type='search'
                  name='search'
                />
              </div>
            </form>
          </div>
          <div className='ml-4 flex items-center md:ml-6'>
            <button
              type='button'
              className='p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              <span className='sr-only'>View notifications</span>
              <Bell className='h-6 w-6' aria-hidden='true' />
            </button>

            {/* Profile dropdown */}
            <div className='ml-3 relative'>
              <div>
                <button
                  type='button'
                  className='max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  id='user-menu-button'
                  aria-expanded='false'
                  aria-haspopup='true'
                >
                  <span className='sr-only'>Open user menu</span>
                  <img
                    className='h-8 w-8 rounded-full'
                    src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
