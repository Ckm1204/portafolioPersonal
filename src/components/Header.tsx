import { useTranslation } from 'react-i18next';
import { languageData } from '../data/data';
import { useState, useEffect } from 'react';
import Cool from '../assets/cool.svg'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


const Header = () => {
  const { i18n, t } = useTranslation();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };


  const desktopView = (
    <header className='h-14 grid grid-cols-2 items-center justify-around bg-transparent'>

        <section className='h-full w-full bg-whitem ' >

        <section className='flex items-end justify-between  pr-4'>
          <img  className= " pl-8 h-12 w-auto pt-1" src={Cool} alt="logo" />

        <select
        defaultValue={i18n.language}
        onChange={onChangeLang}
        className='block px-3 py-2  bg-blackm text-whitem border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500'
      >
        
        {languageData().map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>

      </section>
        </section>

        <section className='bg-blackm w-full h-full flex flex-rows items-center  justify-center space-x-6 '>
            <button className="w-[80px] h-5  justify-center pb-6 font-bold font-['Montserrat'] text-whitem bg-transparent  rounded-lg"><p>{t('Home')} </p></button>
            <button className="w-[80px] h-5 justify-center pb-6 font-bold font-['Montserrat']  text-whitem bg-transparent  rounded-lg">{t('About')}</button>
            <button className="w-[80px] h-5 justify-center pb-6 font-bold font-['Montserrat'] text-whitem bg-transparent   rounded-lg">{t('Skills')}</button>
            <button className="w-[80px] h-5  justify-center pb-6 font-bold font-['Montserrat'] text-whitem bg-transparent  rounded-lg">{t('Proyectos')}</button>
            <button className="rounded-full bg-transparent border-double  font-bold font-['Montserrat'] border-4 border-greenm w-[150px] h-[40px] py-1 text-center text-white   ">{t('Contact')}</button>
        </section>
    </header>
  )



    const mobileView=(
        <header className='h-auto lg:h-14 grid grid-cols-2 items-center justify-around bg-transparent'>
      <section className='h-full w-full lg:w-auto bg-whitem'>
        <section className='flex items-end justify-between pr-4'>
          <img className="h-12 w-auto pt-1" src={Cool} alt="logo" />
          <select
            defaultValue={i18n.language}
            onChange={onChangeLang}
            className='block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm lg:w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500'
          >
            {languageData().map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
        </section>
      </section>

      <section className='bg-blackm w-full h-full lg:h-auto flex flex-col lg:flex-row items-center lg:px-5 justify-center lg:space-x-2'>
        <section className=''>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className="rounded-full bg-transparent border-double border-4 border-greenm w-[150px] h-[40px] py-1 text-center text-white flex items-center justify-center space-x-1">
                <span>{t('Menu')}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{t('Menu')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{t('Home')}</DropdownMenuItem>
              <DropdownMenuItem>{t('About')}</DropdownMenuItem>
              <DropdownMenuItem>{t('Skills')}</DropdownMenuItem>
              <DropdownMenuItem>{t('Portafolio')}</DropdownMenuItem>
              <DropdownMenuItem>{t('Contact')}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </section>
    </header>
    )
  return (

    <div>
    {/* Renderiza la vista según el tamaño de la pantalla */}
    {isMobile ? mobileView : desktopView}
  </div>
    

  );
};

export default Header;
