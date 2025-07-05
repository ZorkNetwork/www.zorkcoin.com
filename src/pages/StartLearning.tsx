
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpen, Users, Shield, ArrowRight } from 'lucide-react';

const StartLearning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Start Your <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Learning Journey</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              New to blockchain and crypto? Welcome! This guide will help you understand the fundamentals and get started with Zork Network.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Blockchain Basics</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Learn the fundamental concepts of blockchain technology, how it works, and why it's revolutionary.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• What is a blockchain and how does it work?</li>
                <li>• Understanding decentralization and consensus</li>
                <li>• Proof of Work vs other consensus mechanisms</li>
                <li>• Digital wallets and cryptocurrency basics</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Zork Network Features</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Discover what makes Zork Network unique and how our privacy-focused features work.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• kHeavyHash mining algorithm</li>
                <li>• MWEB (MimbleWimble Extension Block) for privacy</li>
                <li>• Litecoin-derived security and stability</li>
                <li>• Energy-efficient mining</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Join Our Community</h2>
              </div>
              <p className="text-gray-300 mb-6">
                Connect with other learners and experienced community members who can help guide your journey.
              </p>
              <a 
                href="https://discord.gg/Wxc8GcHaT7" 
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all"
              >
                Join Discord Community
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StartLearning;
