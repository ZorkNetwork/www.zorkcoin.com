
import React from 'react';
import { ArrowRight, Shield, Users, Code, Lock, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        {/* Development Notice */}
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-yellow-400">
            <AlertTriangle className="h-5 w-5" />
            <p className="text-sm font-medium">
              {t('hero.devNotice')}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.welcome')}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> {t('hero.zorkNetwork')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all flex items-center justify-center space-x-2">
              <span>{t('hero.getStarted')}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500/10 transition-all">
              {t('hero.learnZorkcoin')}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('hero.provenTech')}</h3>
              <p className="text-gray-400">{t('hero.provenTechDesc')}</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('hero.enhancedPrivacy')}</h3>
              <p className="text-gray-400">{t('hero.enhancedPrivacyDesc')}</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('hero.inclusiveCommunity')}</h3>
              <p className="text-gray-400">{t('hero.inclusiveCommunityDesc')}</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t('hero.kHeavyHash')}</h3>
              <p className="text-gray-400">{t('hero.kHeavyHashDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
