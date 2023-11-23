import { useTranslation } from 'react-i18next';



const Contact = () => {
  const { t } = useTranslation();


  

  return (
    <section className='flex flex-col items-center bg-blackm justify-center h-screen'>
      <section className='pb-2'>
        <h2 className='text-4xl border-8 border-greenm text-whitem py-4 px-4 font-bold font-[Montserrat]'>{t('Contact')}</h2>
      </section>
      <section className='w-full max-w-screen-lg overflow-hidden'>
        <iframe
          title="Contact Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSd7AaPJtAl_esHaYuEFjIpRcRYc48H3czPxdMUA7lk-aIADlg/viewform?embedded=true"
          width="100%"
          height="800"
          
        >
          Cargando…
        </iframe>
      </section>
    </section>
    
  );
};

export default Contact;
