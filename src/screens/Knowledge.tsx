import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';


const About = () => {
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



const desktopView = (
    <section className=' bg-blackm justify-center w-screen h-screen'>
      <section className='pb-2 flex flex-col items-center pt-20 '>
      <h2 className='text-4xl border-8 border-greenm text-whitem py-4 px-4 font-bold font-[Montserrat]'>{t('Conocimiento')}</h2>
      </section>
      <section className='grid grid-cols-2   justify-center items-center  pt-10 '>

        <section className=' flex flex-col items-center px-10'>
          <h2 className='text-4xl border-8 border-greenm text-whitem py-4 px-4 font-bold font-[Montserrat]'>{t('Estudios')}</h2>
          <section className='flex flex-col items-center justify-center'>
            <section className='flex flex-row items-start justify-start mt-10'>
              <div className="h-10 w-10 flex items-center justify-center bg-greenm rounded-full px-5 "></div>
              <p className=' text-whitem px-5  font-bold font-[Open Sans]'>{t('EstudiosText1')}</p>
            </section>
            <section className='flex flex-row items-start justify-start mt-10'>
              <div className="h-10 w-10 flex items-center justify-center bg-greenm rounded-full px-5 "></div>
              <p className=' text-whitem px-5  font-bold font-[Open Sans]'>{t('EstudiosText2')}</p>
            </section>
          </section>
        </section>

        <section className=' flex flex-col items-center px-10'>
          <h2 className='text-4xl border-8 border-greenm text-whitem py-4 px-4 font-bold font-[Montserrat]'>{t('Experiencia')}</h2>
          <section className='flex flex-col items-center justify-center'>
            <section className='flex flex-row items-start justify-start mt-10'>
              <div className="h-10 w-10 flex items-center justify-center bg-greenm rounded-full px-5 "></div>
              <p className=' text-whitem px-5  font-bold font-[Open Sans]'>{t('ExperienciaText')}</p>
            </section>
            
          </section>
        </section>

      </section>
      

    </section>
)

const mobileView =(
  <section className='bg-blackm justify-center w-screen h-auto'>
  <section className='pb-2 flex flex-col items-center pt-20'>
    <h2 className='text-4xl border-8 border-greenm text-whitem py-4 px-4 font-bold font-[Montserrat]'>{t('Conocimiento')}</h2>
  </section>

  <section className='flex flex-col items-center pt-10'>
    <section className='flex flex-col items-center px-10'>
      <h2 className='text-4xl border-8 border-greenm text-whitem py-4 px-4 font-bold font-[Montserrat]'>{t('Estudios')}</h2>
      <section className='flex flex-col items-center justify-center'>
        <section className='flex flex-row items-start justify-start mt-10'>
          <div className="h-10 w-10 flex items-center justify-center bg-greenm rounded-full px-5"></div>
          <p className='text-whitem px-5 font-bold font-[Open Sans]'>{t('EstudiosText1')}</p>
        </section>
        <section className='flex flex-row items-start justify-start mt-10'>
          <div className="h-10 w-10 flex items-center justify-center bg-greenm rounded-full px-5"></div>
          <p className='text-whitem px-5 font-bold font-[Open Sans]'>{t('EstudiosText2')}</p>
        </section>
      </section>
    </section>

    <section className='flex flex-col items-center px-10 mt-10'>
      <h2 className='text-4xl border-8 border-greenm text-whitem py-4 px-4 font-bold font-[Montserrat]'>{t('Experiencia')}</h2>
      <section className='flex flex-col items-center justify-center'>
        <section className='flex flex-row items-start justify-start mt-10'>
          <div className="h-10 w-10 flex items-center justify-center bg-greenm rounded-full px-5"></div>
          <p className='text-whitem px-5 font-bold font-[Open Sans] mb-5'>{t('ExperienciaText')}</p>
        </section>
      </section>
    </section>
  </section>
</section>

  )

  return (
    <div>
    {/* Renderiza la vista según el tamaño de la pantalla */}
    {isMobile ? mobileView : desktopView}
  </div>
  );
};

export default About;
