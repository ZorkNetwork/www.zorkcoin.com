
import React from 'react';
import { Store, Zap, Users, TrendingUp, Coins, ShoppingCart, Calendar, CheckCircle, Clock, Rocket } from 'lucide-react';

const ZorkcoinUtility = () => {
  const useCases = [
    {
      icon: Store,
      title: "Merchant Adoption",
      description: "Accept Zorkcoin payments for your products and services",
      benefits: [
        "Low transaction fees",
        "Fast settlement times",
        "Global reach without borders",
        "No chargebacks or fraud"
      ]
    },
    {
      icon: Zap,
      title: "Network Governance",
      description: "Participate in protocol decisions and improvements",
      benefits: [
        "Vote on network upgrades",
        "Propose new features",
        "Influence development roadmap",
        "Shape the future of Zork"
      ]
    },
    {
      icon: Coins,
      title: "Mining Rewards",
      description: "Earn Zorkcoin through mining and network participation",
      benefits: [
        "Block rewards for miners",
        "Transaction fee earnings",
        "Network security participation",
        "Proof-of-work validation rewards"
      ]
    },
    {
      icon: TrendingUp,
      title: "DeFi Integration",
      description: "Use Zorkcoin in decentralized finance applications",
      benefits: [
        "NFT marketplace transactions",
        "Basic swap functionality",
        "Trading pair listings",
        "Decentralized exchange integration"
      ]
    }
  ];

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
    <section id="zorkcoin" className="py-16 px-4 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Zorkcoin</span>
            <span className="text-white"> Utility</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the many ways to use and earn Zorkcoin within our ecosystem. 
            From merchant payments to governance participation, Zorkcoin powers the entire network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all"
            >
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <useCase.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-3">{useCase.title}</h3>
              <p className="text-gray-300 mb-6">{useCase.description}</p>
              
              <div className="space-y-2">
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Development <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Roadmap</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Follow our journey from TestNet to MainNet and beyond. Each phase builds upon proven Litecoin-derived 
              technology while introducing innovative features for the future of blockchain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmapPhases.map((phase, index) => {
              const StatusIcon = getStatusIcon(phase.status);
              return (
                <div key={index} className="bg-slate-800/50 border border-slate-600 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className={`bg-gradient-to-r ${getStatusColor(phase.status)} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                      <phase.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{phase.phase}</h4>
                      <div className="flex items-center space-x-2">
                        <StatusIcon className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-400 capitalize">{phase.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{phase.description}</p>
                  
                  <div className="space-y-2">
                    {phase.subEvents.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        <span className="text-sm text-gray-400">{event}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZorkcoinUtility;
