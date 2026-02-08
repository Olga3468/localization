import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { i18n } from '@/src/i18n';

type Lang = 'en' | 'et' | 'ru';

const LanguageContext = createContext({
  language: 'en' as Lang,
  setLanguage: (lang: Lang) => {},
});

export function LanguageProvider({ children }: any) {
  const [language, setLanguageState] = useState<Lang>('en');

  useEffect(() => {
    AsyncStorage.getItem('language').then((saved) => {
      if (saved) {
        setLanguageState(saved as Lang);
        i18n.locale = saved;
      }
    });
  }, []);

  const setLanguage = (lang: Lang) => {
    setLanguageState(lang);
    i18n.locale = lang;
    AsyncStorage.setItem('language', lang);
  };

  return (
  <LanguageContext.Provider value={{ language, setLanguage }}>
    {children}
  </LanguageContext.Provider>
);

}

export const useLanguage = () => useContext(LanguageContext);
