import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        
        Home: 'Home',
        About: 'About',
        Contact: 'Contact',
        Skills: 'Skills',
        Bienvenido: 'Welcome',
        Hi:'Hi, I am ',
        
      },
    },
    es: {
      translation: {
        Home: 'Inicio',
        About: 'Acerca de',
        Contact: 'Contacto',
        Skills: 'Habilidades',
        Bienvenido: 'Bienvenido',
        Hi:'Yo soy ',
        
          },

    },

  },
});

export default i18n;