import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} Sanford Technologies LLC. All rights reserved.
          </p>
          <p>
            For support, contact{' '}
            <a 
              href="mailto:Chris@SanfordTechLLC.com" 
              className="text-blue-400 hover:text-blue-300"
            >
              Chris@SanfordTechLLC.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
} 