import { useTranslation } from 'react-i18next';
import Up from '../assets/up.svg';
import  Instagram  from '../assets/instagram.svg';
import  Github  from '../assets/github.svg';
import Linkedin  from '../assets/linkedin.svg';

const Contact
 = () => {
    const { t } = useTranslation();

    return (
        <section className=" flex flex-col  items-center w-screen bg-blackm ">
            <button className='flex flex-col  items-center'>
                <img className='  h-16 pt-5' src={Up} alt="" />
                <h4 className='text-xl  text-whitem  font-bold font-[Open Sans]'>{t('Volver')}</h4>
            </button>
            <section className='flex flex-row space-x-4 py-3 justify-center'>
              <a href='https://www.instagram.com/camilotello_12/'><img className='h-14 w-12 px-3   py-4 bg-whitem rounded-full' src= {Instagram} alt="instagram icon" /></a>
              <a href="https://github.com/Ckm1204"><img className='h-14 w-12 px-3   py-4 bg-whitem rounded-full' src={Github} alt="" /></a>
              <a href="https://www.linkedin.com/in/camilo-tello-001978206/"><img className='h-14 w-16 px-3   py-4 bg-whitem rounded-full' src={Linkedin} alt="" /></a>

            </section>

        </section>
        
    );
};

export default Contact
;