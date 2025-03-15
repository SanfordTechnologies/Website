import React from 'react';
import Layout from '../components/Layout';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">
            Building Tomorrow's Software Solutions
          </h1>
          <p className="text-xl mb-8">
            Innovative software products and services by Chris Sanford
          </p>
        </div>
      </section>

      {/* Current Project Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Current Project</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Billd</h3>
            <p className="text-gray-600 mb-6">
              Making billable hours tracking easier and faster for attorneys through:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
              <li>Quick-access widgets on the lockscreen for time tracking and note taking</li>
              <li>AI-powered billing justifications that clients understand and accept</li>
            </ul>
            <p className="text-lg font-semibold text-indigo-600">
              Bill more, track less.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              My journey in technology began at age 4 with a Nintendo 64 and a curiosity about how things work. That early fascination with technology has evolved into a career spanning nearly a decade in the tech industry.
            </p>
            <p className="mb-6">
              Starting as a helpdesk support technician at the Town of Islip, I discovered my passion for coding and its potential to create impact. This led to the foundation of Sanford Technologies, through which I share innovative applications with the world.
            </p>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Connect</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/Chris-Sanford" 
               className="text-gray-600 hover:text-gray-900">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/christopher-sanford1/" 
               className="text-gray-600 hover:text-gray-900">
              <FaLinkedin size={32} />
            </a>
            <a href="https://x.com/ChrisSanford0" 
               className="text-gray-600 hover:text-gray-900">
              <FaTwitter size={32} />
            </a>
            <a href="mailto:Chris@SanfordTechLLC.com" 
               className="text-gray-600 hover:text-gray-900">
              <FaEnvelope size={32} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
} 