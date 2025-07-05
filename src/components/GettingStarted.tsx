
import React from 'react';
import { BookOpen, Download, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const GettingStarted = () => {
  const { t } = useLanguage();

  const pathways = [
    {
      icon: BookOpen,
      title: t('gettingStarted.beginner'),
      description: t('gettingStarted.beginnerDesc'),
      steps: [
        "Learn blockchain basics with our interactive guide",
        "Understand Zork Network's privacy and security features",
        "Set up your first secure Zorkcoin wallet",
        "Join our welcoming Discord community"
      ],
      cta: t('gettingStarted.startLearning'),
      color: "from-blue-500 to-blue-700",
      link: "/start-learning"
    },
    {
      icon: Download,
      title: t('gettingStarted.technical'),
      description: t('gettingStarted.technicalDesc'),
      steps: [
        "Download the Zork Network node software",
        "Explore our Litecoin-derived codebase documentation",
        "Set up a secure development environment",
        "Start mining with kHeavyHash or run a validator node"
      ],
      cta: t('gettingStarted.getTechnical'),
      color: "from-blue-600 to-blue-800",
      link: "/get-technical"
    },
    {
      icon: Users,
      title: t('gettingStarted.contributor'),
      description: t('gettingStarted.contributorDesc'),
      steps: [
        "Join our contributor onboarding program",
        "Choose your area of expertise",
        "Connect with team leads in your field",
        "Start your first privacy-focused community project"
      ],
      cta: t('gettingStarted.getInvolved'),
      color: "from-blue-400 to-blue-600",
      link: "/get-involved"
    },
    {
      icon: Shield,
      title: t('gettingStarted.advocate'),
      description: t('gettingStarted.advocateDesc'),
      steps: [
        "Apply for our secure builder program",
        "Access developer grants and privacy-focused resources",
        "Connect with like-minded privacy advocates",
        "Launch your secure project with community support"
      ],
      cta: t('gettingStarted.getInvolved'),
      color: "from-blue-400 to-blue-600",
      link: "/get-involved"
    }
  ];

  return (
    <section id="getting-started" className="py-16 px-4 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('gettingStarted.title')}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> {t('gettingStarted.subtitle')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('gettingStarted.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pathways.map((pathway, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/40 transition-all"
            >
              <div className={`bg-gradient-to-r ${pathway.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <pathway.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-3">{pathway.title}</h3>
              <p className="text-gray-300 mb-6">{pathway.description}</p>
              
              <div className="space-y-3 mb-8">
                {pathway.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-semibold">{stepIndex + 1}</span>
                    </div>
                    <span className="text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
              
              <Link to={pathway.link}>
                <button className={`w-full bg-gradient-to-r ${pathway.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all`}>
                  {pathway.cta}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
