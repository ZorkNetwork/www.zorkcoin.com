
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Code, Download, Terminal, GitBranch, Coins, Shield, Network, Zap } from 'lucide-react';

const GetTechnical = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Technical</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to dive deep into Zork Network's technology? Here's everything you need to get started with development and node operations.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Node Software</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Download and run the Zork Network node software to participate in the network.
              </p>
              <p className="text-gray-300 text-sm mb-4">
                <strong>Status:</strong> Currently in development. TestNet coming soon!
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Coins className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Advanced Digital Assets</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Zork Network integrates cutting-edge digital asset technologies for enhanced functionality and utility.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Ordinals & Inscriptions:</strong> Store arbitrary data directly on the blockchain</li>
                <li>• <strong>Runes:</strong> Fungible token protocol for advanced tokenomics</li>
                <li>• <strong>NFTs:</strong> Native support for non-fungible token creation and trading</li>
                <li>• <strong>Basic Swap:</strong> Built-in decentralized exchange capabilities</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-600 to-green-800 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Privacy & Anonymity</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Advanced privacy features and anonymous networking protocols ensure maximum security and confidentiality.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>MWEB (MimbleWimble Extension Block):</strong> Enhanced transaction privacy and scalability</li>
                <li>• <strong>Tor Network Integration:</strong> Anonymous network routing for enhanced privacy</li>
                <li>• <strong>i2p Network Support:</strong> Expanding to invisible internet project protocols</li>
                <li>• <strong>CJDNS Compatibility:</strong> Mesh networking for decentralized communication</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <GitBranch className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Source Code</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Explore our Litecoin-derived codebase and contribute to development.
              </p>
              <a 
                href="https://github.com/ZorkNetwork" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Visit GitHub Repository →
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-600 to-orange-800 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">kHeavyHash Mining Utility</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Zork Network provides new utility to the large community of kHeavyHash miners, extending the life and profitability of existing mining infrastructure.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Utilize existing kHeavyHash mining hardware</li>
                <li>• Enhanced mining rewards and incentives</li>
                <li>• Support for both ASIC and GPU miners</li>
                <li>• Community-driven mining pool development</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Terminal className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Network Operations</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Learn about kHeavyHash mining and how to secure the network through various node operations.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Set up mining operations</li>
                <li>• Configure your mining rig</li>
                <li>• Run validator nodes</li>
                <li>• Monitor network health</li>
                <li>• <strong>Full Node Rewards (R&D):</strong> Research in progress on rewarding all Full Node operators for maintaining complete blockchain copies, eliminating the need for pruning</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Simplified & Secure Architecture</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Our primary goal is to ease network usage through tool simplification and deprecation of legacy features, while building on proven technologies.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong>Risk Reduction:</strong> Building on battle-tested, existing technologies</li>
                <li>• <strong>Increased Utility:</strong> Enhanced functionality through proven integrations</li>
                <li>• <strong>Easy Integration:</strong> Seamless compatibility with other tools, blockchains, and platforms</li>
                <li>• <strong>User-Friendly Tools:</strong> Simplified interfaces and deprecated legacy complexity</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Development Resources</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Documentation and tools for developers building on Zork Network.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• API documentation (coming soon)</li>
                <li>• Development guides</li>
                <li>• Testing frameworks</li>
                <li>• Community support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetTechnical;
