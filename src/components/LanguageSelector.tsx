
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: t('language.english') },
    { code: 'ru', name: t('language.russian') },
    { code: 'zh', name: t('language.chinese') },
    { code: 'de', name: t('language.german') },
    { code: 'fr', name: t('language.french') },
    { code: 'es', name: t('language.spanish') },
    { code: 'pt', name: t('language.portuguese') },
    { code: 'ar', name: t('language.arabic') },
    { code: 'hi', name: t('language.hindi') },
    { code: 'ms', name: t('language.malay') },
    { code: 'ta', name: t('language.tamil') },
    { code: 'tl', name: t('language.filipino') },
  ];

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-400" />
      <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
        <SelectTrigger className="w-[140px] bg-slate-800/50 border-blue-500/20 text-white">
          <SelectValue placeholder={t('language.select')} />
        </SelectTrigger>
        <SelectContent className="bg-slate-800 border-blue-500/20 text-white">
          {languages.map((lang) => (
            <SelectItem 
              key={lang.code} 
              value={lang.code}
              className="text-white hover:bg-slate-700 focus:bg-slate-700"
            >
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
