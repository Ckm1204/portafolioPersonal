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
        Design:'Design',
        DesignText:'I fuse technical skills with a focus on design to create intuitive and effective solutions. I excel at designing attractive and functional user interfaces, focusing on user experience to develop products that are not only robust in operation, but also enjoyable to use.',
        Development:'Development',
        DevelopmentText:'My focus is on developing high-performance and scalable solutions. With experience developing complex applications and systems, my work is highlighted by efficient implementation of clean code and effective problem resolution. I constantly challenge myself to adopt new technologies and methodologies to guarantee innovative and robust solutions.',
        Maintenance:'Maintenance',
        MaintenanceText:'I focus my efforts on guaranteeing the stability and reliability of the systems. I bring solid experience in efficiently identifying and solving problems, performing preventive and corrective maintenance to ensure operational continuity. My proactive approach is based on process optimization and the implementation of best practices, ensuring the integrity and functionality of the systems.',
        Proyectos:'Projects',
        Aprendiendo:'Learning',
        Idiomas:'Languages',
        Espaniol:'Spanish',
        Nativo:'Native',
        Ingles:'English',
        EstudiosText1:'I am currently a Software Engineering student at UCC, where I am acquiring solid knowledge in software development, system design and problem solving.',
        EstudiosText2:'I obtained my international IELTS qualification at B2+ level at Cambridge Academy, marking a significant milestone in my education and language skills.',
        ExperienciaText:'Currently, I have no formal professional experience; However, my focus has been on my academic and personal development. Despite the absence of work experience, I am committed to applying my skills, knowledge and determination to embark on new challenges and grow professionally.',
        Conocimiento:'Knowledges',
        Estudios:'Studies',
        Experiencia:'Experience',
        Volver:'back to top'
        



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
        Design:'Diseño',
        DesignText:'Fusiono habilidades técnicas con un enfoque en el diseño para crear soluciones intuitivas y efectivas. Me destaco en el diseño de interfaces de usuario atractivas y funcionales, enfocándome en la experiencia del usuario para desarrollar productos que no solo sean robustos en su funcionamiento, sino también agradables de usar',
        Development:'Desarrollo',
        DevelopmentText:'Mi enfoque se centra en el desarrollo de soluciones de alto rendimiento y escalables. Con experiencia en el desarrollo de aplicaciones y sistemas complejos, mi trabajo se destaca por la implementación eficiente de código limpio y la resolución efectiva de problemas. Constantemente me desafío a adoptar nuevas tecnologías y metodologías para garantizar soluciones innovadoras y robustas',
        Maintenance:'Mantenimiento',
        MaintenanceText:'Enfoco mis esfuerzos en garantizar la estabilidad y confiabilidad de los sistemas. Aporto una sólida experiencia en identificar y solucionar eficientemente problemas, realizando mantenimiento preventivo y correctivo para asegurar la continuidad operativa. Mi enfoque proactivo se basa en la optimización de procesos y la implementación de mejores prácticas, asegurando la integridad y funcionalidad de los sistemas',
        Proyectos:'Proyectos',
        Aprendiendo:'Aprendiendo',
        Idiomas:'Idiomas',
        Espaniol:'Español',
        Nativo:'Nativo',
        Ingles:'Ingles',
        EstudiosText1:'Actualmente soy estudiante de Ingeniería de Software en la UCC, donde estoy adquiriendo conocimientos sólidos en el desarrollo de software, diseño de sistemas y resolución de problemas',
        EstudiosText2:'Obtuve mi título internacional IELTS con nivel B2+ en Cambridge Academy, marcando un hito significativo en mi educación y habilidades lingüísticas.',
        ExperienciaText:'Actualmente, no cuento con experiencia profesional formal; sin embargo, mi enfoque se ha centrado en mi desarrollo académico y personal. A pesar de la ausencia de experiencia laboral, estoy comprometido a aplicar mis habilidades, conocimientos y determinación para embarcarme en nuevos desafíos y crecer profesionalmente',
        Conocimiento:'Conocimientos',
        Estudios:'Estudios',
        Experiencia:'Experiencia',
        Volver:'Volver al inicio',
          },

    },

  },
});

export default i18n;