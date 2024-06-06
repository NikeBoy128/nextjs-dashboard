import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-4 py-6 bg-gray-100 shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <img src="/logogym.jpg" alt="logo" className="w-24 h-24 object-cover rounded-full shadow-md" />
      </div>
      <div className="flex flex-col grow space-y-4">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <Link href="/">
          <button className="flex items-center justify-center gap-2 rounded-md bg-red-500 p-3 text-sm font-medium text-white shadow-md transition duration-300 ease-in-out hover:bg-red-600 md:flex-none md:justify-start md:px-4">
            <PowerIcon className="w-6 h-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
