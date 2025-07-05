import React from 'react';
import { GitBranch, MessageSquare, Wrench, Shield, Book, Coins } from 'lucide-react';

const ContributionOpportunities = () => {
  const opportunities = [
    {
      icon: GitBranch,
      title: "Core Development",
      description: "Contribute to the Zork Network protocol and infrastructure",
      tasks: [
        "Improve kHeavyHash algorithm efficiency",
        "Develop network optimization features",
        "Create developer SDKs and libraries",
        "Build testing and monitoring tools"
      ],
      difficulty: "Advanced"
    },
    {
      icon: Wrench,
      title: "Network Operations",
      description: "Secure the network by mining and operating full nodes",
      tasks: [
        "Set up and maintain mining operations",
        "Run full nodes to support the network",
        "Optimize kHeavyHash mining performance",
        "Breathe new life into older mining rigs"
      ],
      difficulty: "Intermediate"
    },
    {
      icon: MessageSquare,
      title: "Community Building",
      description: "Help grow and nurture our community ecosystem",
      tasks: [
        "Moderate Discord and forums",
        "Organize virtual and local meetups",
        "Create educational content",
        "Welcome and onboard new members"
      ],
      difficulty: "Beginner"
    },
    {
      icon: Book,
      title: "Documentation & Education",
      description: "Make Zork Network accessible to everyone",
      tasks: [
        "Write technical documentation",
        "Create beginner-friendly tutorials",
        "Translate content to other languages",
        "Develop interactive learning tools"
      ],
      difficulty: "Beginner"
    },
    {
      icon: Shield,
      title: "Security & Testing",
      description: "Ensure the network remains secure and robust",
      tasks: [
        "Conduct smart contract audits",
        "Perform penetration testing",
        "Report bugs and vulnerabilities",
        "Test new features and releases"
      ],
      difficulty: "Advanced"
    },
    {
      icon: Coins,
      title: "Marketing & Outreach",
      description: "Spread awareness and drive adoption",
      tasks: [
        "Create social media campaigns",
        "Write articles and blog posts",
        "Produce video content",
        "Engage with crypto communities"
      ],
      difficulty: "Intermediate"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <section id="contribute" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contribution
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Opportunities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover meaningful ways to contribute to the Zork Network ecosystem. 
            All contributions are rewarded with Zorkcoin and community recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                  <opportunity.icon className="h-6 w-6 text-white" />
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(opportunity.difficulty)}`}>
                  {opportunity.difficulty}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{opportunity.title}</h3>
              <p className="text-gray-300 mb-6">{opportunity.description}</p>
              
              <div className="space-y-2 mb-6">
                {opportunity.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-400 text-sm">{task}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContributionOpportunities;
