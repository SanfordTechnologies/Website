import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const basePath = process.env.NODE_ENV === 'production' ? '/Website' : '';
  
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={`${basePath}/`} className="text-2xl font-bold text-gray-900">
              Sanford Technologies
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href={`${basePath}/#about`} className="text-gray-700 hover:text-gray-900">About</Link>
            <Link href={`${basePath}/#projects`} className="text-gray-700 hover:text-gray-900">Projects</Link>
            <Link href={`${basePath}/#support`} className="text-gray-700 hover:text-gray-900">Support</Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 