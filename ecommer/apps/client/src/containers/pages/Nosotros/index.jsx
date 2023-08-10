import { NavLink } from "react-router-dom"
import { BackgroundImage, EstrellaIcon, HamburguesaIcon, Toro } from "../../../components"
import { Compromiso, Gratitud, Honestidad, Lealtad, Respeto } from "./components"

export const Nosotros = () => {
  return (
    <>
      <section className="relative mx-auto max-w-5xl">
        <BackgroundImage className={"bg-cover"} image={"/assets/nosotros/BANNER_NOSOTROS.jpg"}>
          <div className="relative flex flex-col pt-48 md:pt-80 pb-14 sm:pb-28 px-10 sm:px-20">
            <section className="flex flex-col gap-3 pt-10">
              <h3 className="flex justify-center z-10 sm:justify-start text-center font-ifc-insane-rodeo-bold text-3xl sm:text-[42px] md:text-5xl text-light-gold drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)]">
                Acerca de
              </h3>
              <div className="inline-flex items-center justify-center sm:justify-start h-11 mb-6">
                <span className="font-ifc-insane-rodeo-bold text-7xl z-10 lg:text-9xl text-light-ivory drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)] mb-0 lg:mb-4">
                  Nosotros
                </span>
              </div>
            </section>
          </div>
        </BackgroundImage>
      </section>
      <section className="max-w-5xl mx-auto mt-9">
        <article className="max-w-xs sm:max-w-4xl mx-auto">
          <h1 className="leading-5 font-ifc-insane-rodeo-bold text-fire-red text-center text-3xl lg:text-5xl">Somos hamburgesas del rodeo</h1>
          <article className="flex flex-col lg:flex-row gap-5 items-center">
            <span className="w-32 mt-6 sm:mt-0 sm:w-40 fill-chocolate-brown">
              <Toro />
            </span>
            <div className="max-w-[32rem] mx-auto text-xs text-chocolate-brown text-center">
              <br />
              <p>Somos una organización de servicio 100% colombiana dedicada a satisfacer el gusto por la hamburguesa, 100% sin adictivos</p>
              <br />
              <p>Nuestros objetivos de rentabilidad, crecimiento y competitividad estarán en función de
                las necesidades de los clientes y de las condiciones del mercado, siempre enmarcadas
                por los más claros principios éticos y legales</p>
              <br />
              <p>
                Nuestra ventaja competitiva es la excelencia en nuestros productos y servicios.
                Fundamentada en la calidad de las personas que la conformamos y en la eficiente
                utilización que hacemos de los recursos disponibles para la prestación del mismo.
                Nuestra empresa siempre será reconocida como una organización competitiva con el
                desarrollo de la gente, de sus clientes y del país.
              </p>
            </div>
            <span className="w-40 fill-chocolate-brown">
              <HamburguesaIcon />
            </span>
          </article>
        </article>
      </section>
      <div className="mt-40 md:mt-0">
        <BackgroundImage className={"bg-cover"} image={"/assets/button-maderado-green.png"}>
          <section className="mt-10 pb-10 pt-6">
            <div className="mx-auto max-w-4xl px-4 lg:px-0 flex flex-col-reverse md:flex-row gap-10">
              <article className="md:w-5/12">
                <div className="flex flex-col md:flex-row gap-4 items-center max-w-4xl">
                  <i className="w-8 md:w-24 fill-white">
                    <EstrellaIcon />
                  </i>
                  <p className="text-light-ivory text-center md:text-left max-w-xs leading-5 font-medium text-sm">
                    Nuestra visión es, una mejor alternativa en
                    cuanto a productos, calidad y precios. Ser
                    reconocidos como una empresa modelo de
                    calidad y servicio en todos nuestros
                    restaurantes
                  </p>
                </div>
                <span className="flex justify-center mt-8 md:justify-start">
                  <BackgroundImage image={"/assets/button-maderado-amarillo.png"} className={"bg-cover"}>
                    <div 
                      className="flex items-center text-chocolate-brown py-6 px-5 h-10 text-lg font-bold"
                    >
                      <NavLink to="/menu" >
                        Conoce nuestro menú 
                      </NavLink>
                    </div>
                  </BackgroundImage>
                </span>
              </article>
              <aside className="w-full md:w-7/12 relative">
                <div
                  className="absolute -top-32 sm:-top-48 left-2/4 md:left-0 translate-x-[-50%] md:translate-x-0 md:mb-20 md:-top-20"
                >
                  <img
                    className="w-80 md:w-full"
                    src="/assets/nosotros/BURGUER_UNO.png" 
                    alt=""/>
                </div>
              </aside>
            </div>
          </section>
        </BackgroundImage>
      </div>
      <section className="max-w-5xl mx-auto text-center mt-16">
        <h2 className="font-ifc-insane-rodeo-bold text-2xl sm:text-4xl md:text-[3.5rem] text-chocolate-brown">Aportando nuestros valores</h2>
        <div className="flex flex-wrap gap-12 justify-center mt-6">
          <div className="flex flex-col justify-center">
            <div className="h-20 flex justify-center">
              <div className="w-20">
                <Compromiso />
              </div>
            </div>
            <span className="text-chocolate-brown text-xl font-bold">Compromiso</span>
          </div>
          <div>
            <div className="h-20 flex justify-center">
              <div className="w-16 fill-intense-orange">
                <Lealtad />
              </div>
            </div>
            <span className="text-intense-orange font-bold text-xl">Lealtad</span>
          </div>
          <div>
            <div className="h-20 flex justify-center">
              <div className="w-20 fill-fire-red">
                <Gratitud />
              </div>
            </div>
            <span className="text-fire-red font-bold text-xl">Gratitud</span>
          </div>
          <div>
            <div className="h-20 flex justify-center">
              <div className="w-20 fill-fire-red">
                <Respeto />
              </div>
            </div>
            <span className="text-moss-green font-bold text-xl">Respeto</span>
          </div>
          <div>
            <div className="h-20 flex justify-center">
              <div className="w-20">
                <Honestidad />
              </div>
            </div>
            <span className="text-light-gold font-bold text-xl">Honestidad</span>
          </div>
        </div>
      </section>
      <section className="relative text-center mt-14">
        <h2 className="font-ifc-insane-rodeo-bold text-3xl md:text-5xl text-intense-orange mb-10">Y nuestros objetivos</h2>
        <div className="flex gap-5 lg:gap-10 flex-col lg:flex-row lg:my-12">
          <div className="flex flex-1 justify-between h-20">
            <div className="w-8 sm:w-20 lg:w-1/2 h-20 bg-fire-red rounded-r-[24px]" />
            <div className="w-1/2">
              <p className="text-chocolate-brown leading-[1.10rem] lg:text-right line-clamp-6 ml-0 lg:ml-4 text-[13px]">
                Consolidarnos como una empresa a nivel
                nacional, obteniendo beneficios no solo a
                nivel particular sino beneficios a todos los
                integrantes, no solo por medio del trabajo,
                sino de la capacitación y participación
                directa de nuestros trabajadores
              </p>
            </div>
            <div className="lg:hidden w-8 sm:w-20 lg:w-1/2 h-20 bg-fire-red rounded-l-[24px]" />
          </div>
          <div className="flex-none h-20 flex justify-center">
            <div className="w-16 lg:w-20 fill-fire-red">
              <EstrellaIcon />
            </div>
          </div>
          <div className="hidden lg:block flex-none lg:flex-1 h-20 bg-fire-red rounded-l-[24px]"/>
        </div>
        <div className="flex gap-5 lg:gap-10 flex-col-reverse lg:flex-row lg:my-12">
          <div className="hidden lg:block flex-none lg:flex-1 h-20 bg-vibrant-yellow rounded-r-[24px]"/>
          <div className="flex-none h-20 flex justify-center">
            <div className="w-16 lg:w-20 fill-vibrant-yellow">
              <EstrellaIcon />
            </div>
          </div>
          <div className="flex flex-1 justify-between h-20">
            <div className="lg:hidden w-8 sm:w-20 lg:w-1/2 h-20 bg-vibrant-yellow rounded-r-[24px]" />
            <div className="w-1/2">
              <p className="text-chocolate-brown leading-[1.10rem] lg:text-left line-clamp-6 mr-0 lg:mr-6 text-[13px]">
                Garantizar la calidad y optimización en
                todos los procesos de producción,
                desarrollando programas de control de
                calidad en cada uno de nuestros puntos de
                venta.
              </p>
            </div>
            <div className="w-8 sm:w-20 lg:w-1/2 h-20 bg-vibrant-yellow rounded-l-[24px]" />
          </div>
        </div>
        <div className="flex gap-5 lg:gap-10 flex-col lg:flex-row lg:my-12">
          <div className="flex flex-1 justify-between h-20">
            <div className="w-8 sm:w-20 lg:w-1/2 h-20 bg-moss-green rounded-r-[24px]" />
            <div className="w-1/2">
              <p className="text-chocolate-brown leading-[1.10rem] lg:text-right ml-0 lg:ml-6 text-[13px]">
                Controlar permanentemente la calidad de
                los insumos y proveedores con el objeto
                de mantener una alta calidad y muy
                buenos precios.
              </p>
            </div>
            <div className="lg:hidden w-8 sm:w-20 lg:w-1/2 h-20 bg-moss-green rounded-l-[24px]" />
          </div>
          <div className="flex-none h-20 flex justify-center">
            <div className="w-16 lg:w-20 fill-moss-green">
              <EstrellaIcon />
            </div>
          </div>
          <div className="hidden lg:block flex-none lg:flex-1 h-20 bg-moss-green rounded-l-[24px]"/>
        </div>
        <div className="flex gap-5 lg:gap-10 flex-col-reverse lg:flex-row lg:my-12">
          <div className="hidden lg:block flex-none lg:flex-1 h-20 bg-intense-orange rounded-r-[24px]"/>
          <div className="flex-none h-20 flex justify-center">
            <div className="w-16 lg:w-20 fill-intense-orange">
              <EstrellaIcon />
            </div>
          </div>
          <div className="flex flex-1 justify-between h-20">
            <div className="lg:hidden w-8 sm:w-20 lg:w-1/2 h-20 bg-intense-orange rounded-r-[24px]" />
            <div className="w-1/2">
              <p className="text-chocolate-brown leading-[1.10rem] lg:text-left mr-0 lg:mr-6 text-[13px]">
                Diseñar programas de consulta periódica a
                los clientes, con el fin de integrarlos a la
                empresa y optimizar nuestra cadena de
                producción.
              </p>
            </div>
            <div className="w-8 sm:w-20 lg:w-1/2 h-20 bg-intense-orange rounded-l-[24px]" />
          </div>
        </div>
        <section className="bg-fire-red">
          <div className="flex justify-center sm:justify-start max-w-4xl mx-auto py-8 lg:mt-20 relative">
            <section className="sm:flex-1 ml-0 sm:ml-20 lg:max-w-[480px]">
              <h2 className="font-ifc-insane-rodeo-bold text-center sm:text-left pb-2 text-light-ivory text-xl sm:text-3xl md:text-4xl">Trabaja con nosotros</h2>
              <section className="flex items-center gap-5 pb-2">
                <i className="hidden md:block w-8 fill-light-ivory">
                  <EstrellaIcon />
                </i>
                <div className="flex items-center ">
                  <BackgroundImage image={"/assets/button-maderado-amarillo.png"} className={"bg-cover w-48 sm:w-auto"}>
                    <div 
                      className="flex items-center text-chocolate-brown leading-5 py-8 sm:py-5 px-6 h-10 font-bold"
                    >
                      <NavLink to="/menu" >
                        Envia tus datos en el formulario
                      </NavLink>
                    </div>
                  </BackgroundImage>
                </div>
                <i className="hidden md:block w-8 fill-light-ivory">
                  <EstrellaIcon />
                </i>
              </section>
            </section>
            <aside className="hidden sm:block absolute bottom-0 right-0 lg:right-20">
              <img
                className="w-64"
                src="/assets/nosotros/PERSONA.png" 
                alt=""/>
            </aside>
          </div>
        </section>
        <aside className="absolute top-32 sm:top-24 lg:-top-12 right-0">
          <img
            className="h-48 w-[100px] sm:h-64 sm:w-[180px] xl:h-80 xl:w-[420px] object-left object-cover"
            src="/assets/nosotros/MANO_BURGUER_UNO.png" 
            alt=""/>
        </aside>
        <aside className="absolute bottom-[304px] -left-40 sm:bottom-64 sm:-left-52 lg:bottom-28 lg:left-0">
          <img
            className="h-48 sm:h-64 xl:h-80"
            src="/assets/nosotros/MANO_BURGUER_DOS.png" 
            alt=""/>
        </aside>
      </section>
    </>
  )
}
