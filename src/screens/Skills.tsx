import { useTranslation } from 'react-i18next';
import Python from '../assets/skills/python.svg';
import Js from '../assets/skills/js.svg';
import Ts from '../assets/skills/ts.svg';
import Spanish from '../assets/skills/spain.svg';
import Css from '../assets/skills/css.svg';
import Django from '../assets/skills/django.svg';
import English from '../assets/skills/english.svg';
import Git from '../assets/skills/git.svg';
import React from '../assets/skills/react.svg';
import Html from '../assets/skills/hml.svg';
import Linux from '../assets/skills/linux.svg';
import Mysql from '../assets/skills/mysql.svg';
import Figma from '../assets/skills/figma.svg';




const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-whitem h-auto flex flex-col items-center justify-center py-10">
    <section className='pb-2'>
      <h2 className='text-4xl border-8 border-greenm text-blackm py-4 px-4 font-bold font-[Montserrat]'>{t('Skills')}</h2>
    </section>
  
    <section className='w-auto flex flex-col items-center'>
      <h3 className='text-3xl text-blackm py-4 px-4 font-bold font-[Montserrat]'>{t('Conocimientos')}</h3>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:space-x-10  ">

      <section className="flex flex-col items-center justify-center h-auto sm:h-auto w-60 sm:py-10 py-4  ">
          <img className="h-40 sm:h-52" src={Js} alt="python svg" />
          <section className="pb-4 pt-2 flex justify-items-start text-blackm text-3xl font-semibold font-Raleway">JavaScript</section>
        </section>

        <section className="flex flex-col items-center justify-center h-auto sm:h-96 w-60 sm:py-10 py-4  ">
          <img className="h-40 sm:h-52" src={Python} alt="python svg" />
          <section className="pb-4 pt-2 flex justify-items-start text-blackm text-3xl font-semibold font-Raleway">Python</section>
        </section>

        <section className="flex flex-col items-center justify-center h-auto sm:h-96 w-60 sm:py-10 py-4  ">
          <img className="h-40 sm:h-52" src={Ts} alt="python svg" />
          <section className="pb-4 pt-2 flex justify-items-start text-blackm text-3xl font-semibold font-Raleway">TypeScript</section>
        </section>

        <section className="flex flex-col items-center justify-center h-auto sm:h-96 w-60 sm:py-10 py-4  ">
          <img className="h-40 sm:h-52" src={Css} alt="python svg" />
          <section className="pb-4 pt-2 flex justify-items-start text-blackm text-3xl font-semibold font-Raleway">CSS3</section>
        </section>

        <section className="flex flex-col items-center justify-center h-auto sm:h-96 w-60 sm:py-10 py-4  ">
          <img className="h-40 sm:h-52" src={Html} alt="python svg" />
          <section className="pb-4 pt-2 flex justify-items-start text-blackm text-3xl font-semibold font-Raleway">HTML5</section>
        </section>

        <section className="flex flex-col items-center justify-center h-auto sm:h-96 w-60 sm:py-10 py-4  ">
          <img className="h-40 sm:h-52" src={Git} alt="python svg" />
          <section className="pb-4 pt-2 flex justify-items-start text-blackm text-3xl font-semibold font-Raleway">Git</section>
        </section>

        <section className="flex flex-col items-center justify-center h-auto sm:h-96 w-60 sm:py-10 py-4  ">
          <img className="h-40 sm:h-52" src={React} alt="python svg" />
          <section className="pb-4 pt-2 flex justify-items-start text-blackm text-3xl font-semibold font-Raleway">React</section>
        </section>

        <section className="flex flex-col items-center justify-center h-auto sm:h-96 w-60 sm:py-10 py-4  ">
          <img className="h-40 sm:h-52" src={Figma} alt="python svg" />
          <section className="pb-4 pt-2 flex justify-items-start text-blackm text-3xl font-semibold font-Raleway">Figma</section>
        </section>

      </section>
      <h3 className='text-3xl text-blackm py-4 px-4 font-bold font-[Montserrat]'>{t('Aprendiendo')}</h3>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:space-x-10  ">
      <section className="flex flex-col items-center justify-center h-auto sm:h-96 w-60 sm:py-10 py-4  ">
          <img className="h-40 sm:h-52" src={Django} alt="python svg" />
          <section className="pb-4 pt-2 flex justify-items-start text-blackm text-3xl font-semibold font-Raleway">Django</section>
        </section>

        <section className="flex flex-col items-center justify-center h-auto sm:h-96 w-60 sm:py-10 py-4  ">
          <img className="h-40 sm:h-52" src={Linux} alt="python svg" />
          <section className="pb-4 pt-2 flex justify-items-start text-blackm text-3xl font-semibold font-Raleway">Linux</section>
        </section>

        <section className="flex flex-col items-center justify-center h-auto sm:h-96 w-60 sm:py-10 py-4  ">
          <img className="h-40 sm:h-52" src={Mysql} alt="python svg" />
          <section className="pb-4 pt-2 flex justify-items-start text-blackm text-3xl font-semibold font-Raleway">MySql</section>
        </section>

        
      </section>
      <h3 className='text-3xl text-blackm py-4 px-4 font-bold font-[Montserrat]'>{t('Idiomas')}</h3>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:space-x-10  ">
      <section className="flex flex-col items-center justify-center h-auto sm:h-96 w-60 sm:py-10 py-4  ">
          <img className="h-40 sm:h-52" src={Spanish} alt="python svg" />
          <section className="pb-4 pt-2 flex justify-items-start text-blackm text-3xl font-semibold font-Raleway">{t('Espaniol')} <br /> ({t('Nativo')})</section>
        </section>

        <section className="flex flex-col items-center justify-center h-auto sm:h-96 w-60 sm:py-10 py-4  ">
          <img className="h-40 sm:h-52" src={English} alt="python svg" />
          <section className="pb-4 pt-2 flex justify-items-start text-blackm text-3xl font-semibold font-Raleway">{t('Ingles')}</section>
        </section>

        

        
      </section>
    </section>

    
  </section>
  

    
  );
};

export default Skills;