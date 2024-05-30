'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Search() {
  return (
    <div className="relative flex flex-1 flex-shrink-0">
    <input
      id="search"
      className="peer block w-full rounded-lg border border-gray-300 py-2 pl-12 pr-4 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-500"
    />
    <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 peer-focus:text-blue-500" />
  </div>
  );
}
