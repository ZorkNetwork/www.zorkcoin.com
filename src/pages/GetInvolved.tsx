
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Heart, MessageSquare, Star } from 'lucide-react';

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Involved</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Join our growing community and help shape the future of Zork Network. There are many ways to contribute!
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Join the Conversation</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Connect with our community across various platforms and participate in discussions.
              </p>
              <div className="space-y-2">
                <a href="https://discord.gg/Wxc8GcHaT7" className="block text-blue-400 hover:text-blue-300 transition-colors">Discord Community</a>
                <a href="https://x.com/Zorkcoin" className="block text-blue-400 hover:text-blue-300 transition-colors">X (Twitter)</a>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Contributor Program</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Join our structured contributor onboarding program and find your place in the ecosystem.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Development and coding</li>
                <li>• Community management</li>
                <li>• Content creation and marketing</li>
                <li>• Documentation and tutorials</li>
                <li>• Testing and quality assurance</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Pathfinders Program</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Join our elite Pathfinders program for dedicated community leaders and contributors.
              </p>
              <a 
                href="mailto:pathfinders@zork.network?subject=Join Pathfinders" 
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                Apply to Pathfinders →
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Support the Project</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Help support Zork Network development through various means:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Run network nodes</li>
                <li>• Participate in mining</li>
                <li>• Spread awareness</li>
                <li>• Provide feedback and testing</li>
                <li>• Create educational content</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetInvolved;
