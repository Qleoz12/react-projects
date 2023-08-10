import { NavLink } from "react-router-dom";
import { BackgroundImage } from "../../../../components";

export const HomeItemInformation = () => {
  return (
    <div className="relative">
      <BackgroundImage
        className={"bg-cover bg-left"}
        image={"/assets/home/BANNER_HOME_EJEMPLO.jpg"}
      >
        <section className="pt-80 px-10 sm:px-20 pb-12 flex flex-col">
          <h3 className="flex justify-center z-10 sm:justify-start text-center font-ifc-insane-rodeo-bold text-3xl sm:text-[42px] md:text-5xl mb-2 text-light-gold drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)]">
            Nos encargamos de tu
          </h3>
          <div className="inline-flex items-center justify-center sm:justify-start h-11 mb-6">
            <span className="font-ifc-insane-rodeo-bold text-8xl z-10 lg:text-9xl text-light-ivory drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)] mb-0 lg:mb-4">
              EVENTO
            </span>
          </div>
          <span className="flex justify-center sm:justify-start z-10 sm:mb-5">
            <BackgroundImage image={"/assets/button-maderado-amarillo.png"} className={"bg-cover"}>
              <div 
                className="flex items-center text-chocolate-brown py-5 px-10 h-10 text-lg font-bold"
              >
                <NavLink to="/eventos" >
                  Consulta aqui
                </NavLink>
              </div>
            </BackgroundImage>
          </span>
        </section>
      </BackgroundImage>
    </div>
  );
};
