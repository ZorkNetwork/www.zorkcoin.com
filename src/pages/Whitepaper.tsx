
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Download } from 'lucide-react';

const Whitepaper = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zork Network <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Whitepaper</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Technical documentation outlining Zork Network's architecture, consensus mechanism, and vision.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Whitepaper Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                Our comprehensive whitepaper is currently being finalized and will be available soon. 
                It will include detailed technical specifications, economic models, and our long-term vision.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                As Zork Network is still under heavy development, we want to ensure our whitepaper 
                accurately reflects the final implementation.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">What Will Be Covered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-gray-300 space-y-2">
                  <li>• kHeavyHash algorithm details</li>
                  <li>• MWEB privacy implementation</li>
                  <li>• Litecoin derivation and improvements</li>
                  <li>• Consensus mechanism</li>
                </ul>
                <ul className="text-gray-300 space-y-2">
                  <li>• Economic model and tokenomics</li>
                  <li>• Network security analysis</li>
                  <li>• Future roadmap and features</li>
                  <li>• Comparison with other networks</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Join our community to be notified when the whitepaper is released.
              </p>
              <a 
                href="https://discord.gg/Wxc8GcHaT7" 
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all"
              >
                Join Discord for Updates
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Whitepaper;
