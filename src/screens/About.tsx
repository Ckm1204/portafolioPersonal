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
    <section className='flex flex-col items-center bg-blackm justify-center w-screen h-screen'>
      <section className='pb-2'>
      <h2 className='text-4xl border-8 border-greenm text-whitem py-4 px-4 font-bold font-[Montserrat]'>{t('About')}</h2>
      </section>
      <section className='flex  flex-row  space-x-72 justify-between  '>
        <section className='w-[400px] flex flex-col items-center'>
          <h3 className='text-3xl  text-whitem py-4 px-4 font-bold font-[Montserrat]'>{t('Design')}</h3>
          <p className=' text-justify text-whitem text-sm font-bold font-[Open Sans]'>{t('DesignText')}</p>
        </section>
        <section className='w-[400px] flex flex-col items-center'>
          <h3 className='text-3xl  text-whitem py-4 px-4 font-bold font-[Montserrat]'>{t('Development')}</h3>
          <p className=' text-justify text-whitem text-sm font-bold font-[Open Sans]'>{t('DevelopmentText')}</p>
        </section>
      </section>
      <section className='w-[400px] flex flex-col items-center'>
          <h3 className='text-3xl  text-whitem py-4 px-4 font-bold font-[Montserrat]'>{t('Maintenance')}</h3>
          <p className=' text-justify text-whitem text-sm font-bold font-[Open Sans]'>{t('MaintenanceText')}</p>
        </section>

    </section>
)

const mobileView =(
  <section className='flex flex-col items-center px-7 bg-blackm justify-center w-screen h-screen'>
  <section className='pb-2'>
    <h2 className='text-4xl border-8 border-greenm text-whitem py-4 px-4 font-bold font-[Montserrat]'>{t('About')}</h2>
  </section>

  <section className='flex flex-col items-center w-[90%]'>
    <section className='w-full mb-8'>
      <h3 className='text-3xl text-whitem py-4 px-4 font-bold font-[Montserrat]'>{t('Design')}</h3>
      <p className='text-justify text-whitem text-sm font-bold font-[Open Sans]'>{t('DesignText')}</p>
    </section>

    <section className='w-full mb-8'>
      <h3 className='text-3xl text-whitem py-4 px-4 font-bold font-[Montserrat]'>{t('Development')}</h3>
      <p className='text-justify text-whitem text-sm font-bold font-[Open Sans]'>{t('DevelopmentText')}</p>
    </section>

    <section className='w-full'>
      <h3 className='text-3xl text-whitem py-4 px-4 font-bold font-[Montserrat]'>{t('Maintenance')}</h3>
      <p className='text-justify text-whitem text-sm font-bold font-[Open Sans]'>{t('MaintenanceText')}</p>
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
