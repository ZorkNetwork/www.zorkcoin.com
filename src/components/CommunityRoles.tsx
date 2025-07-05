
import React from 'react';
import { Code, Palette, Megaphone, TrendingUp, Users, Coins } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CommunityRoles = () => {
  const { t } = useLanguage();

  const roles = [
    {
      icon: Code,
      title: t('community.developers'),
      description: t('community.developersDesc'),
      skills: ["Smart Contract Development", "Core Protocol", "DeFi Applications", "Developer Tools"],
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Palette,
      title: t('community.artists'),
      description: t('community.artistsDesc'),
      skills: ["NFT Creation", "UI/UX Design", "Brand Identity", "Digital Art"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Megaphone,
      title: t('community.marketers'),
      description: t('community.marketersDesc'),
      skills: ["Content Marketing", "Social Media", "Community Growth", "Brand Strategy"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: t('community.business'),
      description: t('community.businessDesc'),
      skills: ["Partnership Development", "Strategy Planning", "Market Analysis", "Adoption Growth"],
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Users,
      title: t('community.leaders'),
      description: t('community.leadersDesc'),
      skills: ["Community Management", "Event Organization", "Mentorship", "Governance"],
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Coins,
      title: t('community.enthusiasts'),
      description: t('community.enthusiastsDesc'),
      skills: ["Beta Testing", "User Feedback", "Documentation", "Education"],
      color: "from-blue-500 to-blue-700"
    }
  ];

  return (
    <section id="community" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('community.title')}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> {t('community.subtitle')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('community.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all hover:transform hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${role.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <role.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-3">{role.title}</h3>
              <p className="text-gray-300 mb-6">{role.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wide">Key Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="text-xs bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full border border-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityRoles;
