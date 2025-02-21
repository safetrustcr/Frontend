import i18n from 'i18next';

export function switchLanguage(language: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('i18nextLng', language);
  }
  i18n.changeLanguage(language);
}

export default switchLanguage;
