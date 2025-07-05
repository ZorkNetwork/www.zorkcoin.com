
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg text-gray-300">Last updated: January 2025</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                This Privacy Policy is currently under development. As Zork Network is still in heavy development, 
                our privacy practices and policies are being finalized.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-300 mb-6">
                Details about data collection practices will be outlined here once finalized.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">How We Use Information</h2>
              <p className="text-gray-300 mb-6">
                Information about how we use collected data will be detailed here.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 mb-6">
                Our commitment to protecting your data will be described here.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300">
                For questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:admin@zork.network" className="text-blue-400 hover:text-blue-300">
                  admin@zork.network
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
