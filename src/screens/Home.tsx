import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import  Instagram  from '../assets/instagram.svg';
import  Github  from '../assets/github.svg';
import Linkedin  from '../assets/linkedin.svg';
import Portada from '../assets/foto.png';

const Home = () => {
  const { t } = useTranslation();
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



  const desktopView =(
    <section className="grid grid-cols-2  w-screen  h-screen  ">
      <section className=' bg-whitem py-4 flex items-center justify-center  '>
      <section className='   text-left'>
            <h1 className="text-left text-4xl  py-2 font-Raleway flex-col order-start">{t('Hi')}</h1>
            <h2 className="text-left text-6xl py-2 font-bold flex-col order-start">Camilo Tello</h2>
            <p className='  text-2xl text-center font-Raleway max-w-lg text-gray-700  whitespace-pre-line leading-normal  '>Ing. Software</p>
            <section className='flex flex-row space-x-4 py-3 justify-center'>
              <a href='https://www.instagram.com/camilotello_12/'><img className='h-16 w-16 px-3   py-4 bg-greenm' src= {Instagram} alt="instagram icon" /></a>
              <a href="https://github.com/Ckm1204"><img className='h-16 w-16 px-3   py-4 bg-greenm' src={Github} alt="" /></a>
              <a href="https://www.linkedin.com/in/camilo-tello-001978206/"><img className='h-16 w-16 px-3   py-4 bg-greenm' src={Linkedin} alt="" /></a>

            </section>
        </section>
      </section>
      <section className="bg-greenm flex flex-col items-end justify-end h-[screen]">
  <img className='h-[570px]  mb-0 ' src={Portada} alt="Portada" />
</section>

      

      
    </section>
)

 const mobileView =(
  <section className="grid grid-cols-1  w-screen h-screen">
  <section className="bg-greenm flex flex-col items-center justify-end h-full">
    <img className="h-[50vh] mb-0" src={Portada} alt="Portada" />
  </section>
  <section className="bg-whitem flex flex-col items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl py-2 font-Raleway">{t('Hi')}</h1>
      <h2 className="text-6xl py-2 font-bold">Camilo Tello</h2>
      <p className="text-2xl text-center font-Raleway max-w-lg text-gray-700 leading-normal">
        Ing. Software
      </p>
      <section className="flex flex-row space-x-4 py-2 justify-center">
        <a href="https://www.instagram.com/camilotello_12/">
          <img
            className="h-16 w-16 px-3 py-4 bg-greenm"
            src={Instagram}
            alt="instagram icon"
          />
        </a>
        <a href="https://github.com/Ckm1204">
          <img
            className="h-16 w-16 px-3 py-4 bg-greenm"
            src={Github}
            alt=""
          />
        </a>
        <a href="https://www.linkedin.com/in/camilo-tello-001978206/">
          <img
            className="h-16 w-16 px-3 py-4 bg-greenm"
            src={Linkedin}
            alt=""
          />
        </a>
      </section>
    </div>
  </section>
</section>
  )




  return (
    <div>
    {isMobile ? mobileView : desktopView}
  </div>
);
};

export default Home;