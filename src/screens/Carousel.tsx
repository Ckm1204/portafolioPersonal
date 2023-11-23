import { useTranslation } from 'react-i18next';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagen1 from '../assets/carrusel/imagen1.webp';
import imagen2 from '../assets/carrusel/imagen2.webp';
import imagen3 from '../assets/carrusel/imagen3.webp';
import imagen5 from '../assets/carrusel/imagen5.webp';
import imagen4 from '../assets/carrusel/imagen4.webp';
import imagen6 from '../assets/carrusel/imagen6.webp';
import imagen7 from '../assets/carrusel/imagen7.webp';
import { useEffect , useState} from "react";

const Responsive = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
          slidesPerRow: 2,
          rows: 2,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          arrows: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          centerMode: false,
          rows: 2,
          slidesPerRow: 2,
        },
      },
    ],
  };

  const slideContentStyles = {
    width: "150px", // Ajusta el tamaño de la imagen
    height: "175px", // Ajusta el tamaño de la imagen
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "8px",
    margin: "0 8px",
    boxSizing: "border-box" as const,
  };

  const imageStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    borderRadius: "8px",
  };

  const { t } = useTranslation();

  const images = [imagen1, imagen2,imagen5, imagen3, imagen4, imagen6, imagen7, imagen1, imagen2, imagen4, imagen6, imagen7];

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
  const desktopView = (<section className="bg-whitem h-screen  ">
<section className='pb-2 flex flex-col items-center pt-20 '>
      <h2 className='text-4xl border-8 border-greenm text-blackm py-4 px-4 font-bold font-[Montserrat]'>{t('Proyectos')}</h2>
      </section>

  <Slider {...settings}>
    {images.map((image, index) => (
      <section key={index}>
        <section style={slideContentStyles}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={imageStyles}
          />
        </section>
      </section>
    ))}
  </Slider>

  <Slider className=' py-10'{...settings}>
    {images.map((image, index) => (
      <section key={index}>
        <section style={slideContentStyles}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={imageStyles}
          />
        </section>
      </section>
    ))}
  </Slider>
</section>)

  const mobileView = (<section className="bg-whitem h-auto  ">
    <section className='pb-2 flex flex-col items-center py-20 '>
      <h2 className='text-4xl border-8 border-greenm text-blackm py-4 px-4 font-bold font-[Montserrat]'>{t('Proyectos')}</h2>
      </section>

  <Slider {...settings}>
    {images.map((image, index) => (
      <section key={index}>
        <section style={slideContentStyles}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={imageStyles}
          />
        </section>
      </section>
    ))}
  </Slider>
</section>)

  return (
    <div>
    {/* Renderiza la vista según el tamaño de la pantalla */}
    {isMobile ? mobileView : desktopView}
  </div>
  );
};

export default Responsive;
