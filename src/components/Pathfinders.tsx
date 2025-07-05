
import React from 'react';
import { Mail, Users, Star, ArrowRight } from 'lucide-react';

const Pathfinders = () => {
  return (
    <section id="pathfinders" className="py-16 px-4 bg-gradient-to-r from-blue-900/20 to-slate-900/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-16 h-16 rounded-xl flex items-center justify-center">
              <Star className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"> Pathfinders</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Be among the first to explore the Zork Network frontier. Our exclusive early adopters program 
            gives you insider access to updates, beta features, and direct communication with the development team.
          </p>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Exclusive Updates</h3>
                <p className="text-gray-400 text-sm">First to know about new features, partnerships, and developments</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Beta Access</h3>
                <p className="text-gray-400 text-sm">Early access to tools, wallets, and network features before public release</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Direct Impact</h3>
                <p className="text-gray-400 text-sm">Shape the future of Zork Network with your feedback and suggestions</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-300 mb-6">
                Ready to become a Pathfinder? Join our exclusive early adopters community today.
              </p>
              
              <a 
                href="mailto:pathfinders@zork.network?subject=Join Pathfinders"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Mail className="h-5 w-5" />
                <span>Join Pathfinders</span>
              </a>
              
              <p className="text-sm text-gray-400 mt-4">
                Click to send an email to pathfinders@zork.network
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pathfinders;
