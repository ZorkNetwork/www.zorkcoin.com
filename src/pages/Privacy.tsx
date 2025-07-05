
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, Key } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy & <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Security</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Zork Network is built with privacy and security at its core. Learn about our privacy features and how to use them.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">MWEB Privacy</h2>
              </div>
              <p className="text-gray-300 mb-4">
                MimbleWimble Extension Block (MWEB) provides enhanced transaction privacy by obscuring transaction amounts and improving fungibility.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Confidential transactions</li>
                <li>• Improved fungibility</li>
                <li>• Reduced blockchain bloat</li>
                <li>• Optional privacy features</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Secure by Design</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Built on proven Litecoin technology with decades of battle-tested security and enhanced with modern privacy features.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Litecoin-derived security model</li>
                <li>• Proof-of-work consensus</li>
                <li>• kHeavyHash algorithm</li>
                <li>• Decentralized network</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Key className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Your Keys, Your Coins</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Maintain full control over your funds with non-custodial wallets and secure key management.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Self-custody solutions</li>
                <li>• Hardware wallet support</li>
                <li>• Multi-signature options</li>
                <li>• Secure backup methods</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Transparent Development</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Our development process is completely open source, allowing anyone to audit and contribute to the codebase.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Open source code</li>
                <li>• Public development roadmap</li>
                <li>• Community governance</li>
                <li>• Regular security audits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
