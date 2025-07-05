
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://1drv.ms/i/c/9c3a1fd509f5dde2/IQQwawkJeOXzQZRnq-jJJr9FASJWZj9hcoVFtftBOYs5k_0?width=1024" 
              alt="Zork Network Logo" 
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-2xl font-bold text-white">Zork Network</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#community" className="text-gray-300 hover:text-blue-400 transition-colors">{t('nav.community')}</a>
            <a href="/#getting-started" className="text-gray-300 hover:text-blue-400 transition-colors">{t('nav.getStarted')}</a>
            <a href="/#contribute" className="text-gray-300 hover:text-blue-400 transition-colors">{t('nav.contribute')}</a>
            <a href="/#zorkcoin" className="text-gray-300 hover:text-blue-400 transition-colors">{t('nav.zorkcoin')}</a>
            <a href="/#pathfinders" className="text-gray-300 hover:text-blue-400 transition-colors">{t('nav.pathfinders')}</a>
            <LanguageSelector />
            <a href="https://discord.gg/Wxc8GcHaT7" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all">
              {t('nav.joinCommunity')}
            </a>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-blue-500/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="/#community" className="text-gray-300 hover:text-blue-400 transition-colors">{t('nav.community')}</a>
              <a href="/#getting-started" className="text-gray-300 hover:text-blue-400 transition-colors">{t('nav.getStarted')}</a>
              <a href="/#contribute" className="text-gray-300 hover:text-blue-400 transition-colors">{t('nav.contribute')}</a>
              <a href="/#zorkcoin" className="text-gray-300 hover:text-blue-400 transition-colors">{t('nav.zorkcoin')}</a>
              <a href="/#pathfinders" className="text-gray-300 hover:text-blue-400 transition-colors">{t('nav.pathfinders')}</a>
              <div className="pt-2">
                <LanguageSelector />
              </div>
              <a href="https://discord.gg/Wxc8GcHaT7" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all w-full">
                {t('nav.joinCommunity')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
