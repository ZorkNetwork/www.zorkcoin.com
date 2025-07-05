
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Rocket, CheckCircle, Clock, Calendar, Zap, TrendingUp } from 'lucide-react';

const Roadmap = () => {
  const roadmapPhases = [
    {
      phase: "TestNet Launch",
      icon: Rocket,
      status: "upcoming",
      description: "Initial testing phase to validate network functionality",
      subEvents: [
        "Core protocol testing",
        "Mining algorithm validation", 
        "Network stability assessment",
        "Initial node deployment"
      ]
    },
    {
      phase: "MainNet Launch",
      icon: CheckCircle,
      status: "planned",
      description: "Official network launch with full functionality",
      subEvents: [
        "Binary release process finalization",
        "Multi-language node implementations",
        "Comprehensive documentation",
        "Translation to major languages"
      ]
    },
    {
      phase: "Smart Contracts",
      icon: Zap,
      status: "future",
      description: "Addition of programmable smart contract capabilities",
      subEvents: [
        "Smart contract VM integration",
        "Developer tooling creation",
        "Security audit completion",
        "DeFi protocol compatibility"
      ]
    },
    {
      phase: "Continued Development",
      icon: TrendingUp,
      status: "ongoing",
      description: "Ongoing support and feature enhancement",
      subEvents: [
        "Community-driven feature requests",
        "Performance optimizations",
        "Enhanced privacy features",
        "Cross-chain compatibility"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming": return "from-blue-500 to-blue-600";
      case "planned": return "from-yellow-500 to-orange-500";
      case "future": return "from-purple-500 to-purple-600";
      case "ongoing": return "from-green-500 to-green-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "upcoming": return Clock;
      case "planned": return Calendar;
      case "future": return Rocket;
      case "ongoing": return CheckCircle;
      default: return Clock;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Development <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Roadmap</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Follow our journey from TestNet to MainNet and beyond. Each phase builds upon proven Litecoin-derived 
              technology while introducing innovative features for the future of blockchain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roadmapPhases.map((phase, index) => {
              const StatusIcon = getStatusIcon(phase.status);
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${getStatusColor(phase.status)} w-16 h-16 rounded-xl flex items-center justify-center mr-6`}>
                      <phase.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-2">{phase.phase}</h2>
                      <div className="flex items-center space-x-2">
                        <StatusIcon className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-400 capitalize">{phase.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg">{phase.description}</p>
                  
                  <div className="space-y-3">
                    {phase.subEvents.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <span className="text-gray-300">{event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6">
              Join our community to get the latest updates on our development progress and be the first to know about major milestones.
            </p>
            <a 
              href="https://discord.gg/Wxc8GcHaT7" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all"
            >
              Join Our Discord Community
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Roadmap;
