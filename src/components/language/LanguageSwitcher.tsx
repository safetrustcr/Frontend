import switchLanguage from '@/utils/i18n';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n/config';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('EN');
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setLanguage(i18n.language.toUpperCase());
  }, [i18n.language]);

  const handleChangeLanguage = (lang: string) => {
    setLanguage(lang.toUpperCase());
    switchLanguage(lang.toLowerCase());
    setIsOpen(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-default-color dark:bg-dark-surface dark:border-gray-700 dark:text-gray-200"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        {language}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 z-50 mt-2 w-28 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-800"
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
            {['EN', 'ES'].map((lang) => (
              <li
                key={lang}
                className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${
                  language === lang
                    ? 'font-bold text-gray-900 dark:text-white'
                    : ''
                }`}
                onClick={() => handleChangeLanguage(lang)}
              >
                {lang}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
