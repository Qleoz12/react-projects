import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Modal } from "@mui/material";
import { useState } from "react";
import { SwiperNavButton } from "../../../components/SwiperNavButton";
import { EstrellaIcon } from "../../../components/Icons/EstrellaIcon";
import styles from './styles.module.css'

export const Eventos = () => {
  return (
    <>
      <section className="relative mx-auto max-w-5xl">
        <div className="flex flex-col z-0 sm:flex-row absolute inset-x-0 inset-y-0">
          <img
            src="/assets/eventos/BANNER_EVENTOS.jpg"
            className="h-[500px] sm:h-96 lg:h-72 w-full object-none"
            alt="foto"
          />
        </div>
        <div className="h-[500px] sm:h-96 lg:h-72 flex flex-col sm:flex-row sm:justify-between pt-4 sm:pb-4 sm:pt-9 md:pt-5 mx-auto max-w-5xl px-11 sm:px-14">
          <div className="mt-64 sm:mt-36 lg:mt-11">
            <aside className="flex z-10 flex-col font-ifc-insane-rodeo-bold">
              <div className="inline-flex items-center h-11 mb-2">
                <h3 className="ml-0 sm:ml-9 mt-36 text-8xl z-10 lg:text-9xl text-light-ivory drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)]">
                  Eventos
                </h3>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center mx-auto max-w-xl md:max-w-5xl px-2 py-0 sm:py-2 md:py-2">
          <header className="flex justify-center items-center gap-8 sm:gap-16">
            <span className="text-9xl font-ifc-insane-rodeo-bold text-intense-orange">
              -
            </span>
            <h2 className="md:mx-0 text-3xl text-center sm:text-4xl lg:text-6xl text-chocolate-brown font-ifc-insane-rodeo-bold">
              Crea momentos inolvidables
            </h2>
            <span className="text-9xl font-ifc-insane-rodeo-bold text-intense-orange">
              -
            </span>
          </header>
          <p className="max-w-3xl mb-14 flex items-center justify-center  text-center text-chocolate-brown font-extrabold text-lg sm:text-xl lg:text-[28px] leading-[29px]">
            Eleva tu ocasión especial con nuestros servicios de eventos premium,
            diseñados a la perfección en Hamburguesas del Rodeo.
          </p>
        </div>
      </section>
      <section className="relative max-w-5xl mx-auto">
        <div className="max-w-4xl mx-auto mb-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              340: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className={`${styles['swiper_content']}`}
          >
            <SwiperSlide style={{ background: "transparent" }}>
              <ItemSwiper
                title="Fiestas"
                subtitle="infantiles"
                img="FIESTAS_INFANTILES.jpg"
              ></ItemSwiper>
            </SwiperSlide>
            <SwiperSlide style={{ background: "transparent" }}>
              <ItemSwiper
                title="Eventos"
                subtitle="Corporativos"
                img="FIESTAS_CORPORATIVAS.jpg"
              ></ItemSwiper>
            </SwiperSlide>
            <SwiperSlide style={{ background: "transparent" }}>
              <ItemSwiper
                subtitle="Reservaciones"
                img="RESERVACIONES.jpg"
              ></ItemSwiper>
            </SwiperSlide>
            <SwiperNavButton />
          </Swiper>
        </div>
      </section>
    </>
  );
};

const ItemSwiper = ({ title, subtitle, img, secondSubtitle }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onlyTitleClass = !title ? "top-5" : "top-8";
  const twoSubtitle = !secondSubtitle ? "" : "top-11";
  return (
    <>
      <div className="bg-white rounded-t-full">
        <div className="h-96 mt-[2rem]">
          <div className="h-3/4">
            <img
              className="h-full rounded-t-[40px]"
              src={`/assets/eventos/${img}`}
              alt="foto"
            />
          </div>
          <div className="relative h-1/4 border-t-8 border-intense-orange flex flex-col items-center text-center">
            <span className="absolute z-10 text-chocolate-brown font-ifc-insane-rodeo-bold text-5xl">
              {title}
            </span>
            <span
              className={`absolute top-3 inset-x-0 text-chocolate-brown font-ifc-insane-rodeo-bold text-4xl`}
            >
              {secondSubtitle}
            </span>
            <span
              className={`absolute ${onlyTitleClass} ${twoSubtitle} inset-x-0 text-chocolate-brown font-ifc-insane-rodeo-bold text-4xl`}
            >
              {subtitle}
            </span>
          </div>
        </div>
        <button
          onClick={handleOpen}
          className="mb-4 bg-intense-orange rounded-box text-white font-bold px-8 py-1"
        >
          Más información
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-light-ivory w-[620px] rounded-[40px]  mx-auto absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
          <div className="border-t-intense-orange mt-16 py-4 border-t-8">
            <h2 className="flex-2 text-5xl text-center font-ifc-insane-rodeo-bold text-intense-orange">
              Fiestas Infantiles
            </h2>
          </div>
          <div className="mx-11">
            <div className="w-full h-[220px]">
              <img 
                className="w-full object-top object-cover h-[220px] rounded-t-[50px]"
                src="/assets/eventos/FIESTAS_INFANTILES.jpg" 
                alt=""/>
            </div>
          </div>
          <div className="flex mb-4 gap-10 px-20">
            <div className="flex flex-col gap-3">
              <header className="flex flex-col text-center justify-center">
                <span className="flex justify-center mb-4 mt-6">
                  <div className="fill-intense-orange w-8">
                    <EstrellaIcon />
                  </div>
                </span>
                
                <h2 className="text-intense-orange text-2xl font-bold">
                  ¿Quieres celebrar por lo alto?
                </h2>
              </header>
              <div>
                <p className="text-chocolate-brown text-center text-sm">
                  Del rodeo y Unión Recreativa hacen de tu fiesta una fecha
                  inolvidable, con recreación dirigida, música, decoración
                  temática, pintucaritas, Globoflexia y mucho más. ¡Qué esperas
                  para celebrar junto a nosotros
                </p>
              </div>
            </div>
          </div>
          <section className="flex justify-center px-20 pb-8">
            <button className="px-9 py-2 bg-vibrant-yellow text-xl font-bold text-chocolate-brown">
              Contiza y reserva aquí
            </button>
          </section>
          <section className="text-center px-20">
            <h2 className="text-chocolate-brown text-2xl font-bold">
              Paquete completo para 15 niños
            </h2>
            <span className="flex justify-between items-center mx-4">
              <div className="flex gap-6">
                <div className="fill-intense-orange w-5">
                  <EstrellaIcon />
                </div>
                <div className="fill-intense-orange w-5">
                  <EstrellaIcon />
                </div>
              </div>
              <h3 className="text-xl text-chocolate-brown font-bold my-4">Incluye</h3>
              <div className="flex gap-6">
                <div className="fill-intense-orange w-5">
                  <EstrellaIcon />
                </div>
                <div className="fill-intense-orange w-5">
                  <EstrellaIcon />
                </div>
              </div>
            </span>
            <div className="flex justify-between gap-8">
              <div className="flex-1 text-left flex flex-col gap-8">
                <article className="text-chocolate-brown">
                  <h4 className="font-bold mb-2">Vaqueritos del Rodeo</h4>
                  <span>Sombreros de vaquero</span>
                </article>
                <article className="text-chocolate-brown">
                  <h4 className="font-bold mb-2">Actividades Del Rodeo</h4>
                  <span>1 recreador</span>
                  <span>Parque del Rode</span>
                  <span>Pitucaritas</span>
                </article>
              </div>
              <div className="flex-1 text-left flex flex-col gap-8">
                <article className="text-chocolate-brown">
                  <h4 className="font-bold mb-2">Salón Del Rodeo</h4>
                  <span>Salón de fiestas Luces, camara de humo y sonido Decoración con bombas</span>
                </article>
                <article className="text-chocolate-brown">
                  <h4 className="font-bold mb-2">Menú infantil Del Rodeo</h4>
                  <span>Hamburguesa, perro o nuggets</span>
                </article>
              </div>
            </div>
          </section>
        </div>
      </Modal>
    </>
  );
};
