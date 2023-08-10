import { BackgroundImage } from "../../../components";
import { SwiperHomeInformation } from "./SwiperHomeInformation/SwiperHomeInformation";

export const Home = () => {
  return (
    <>
      <SwiperHomeInformation />
      <header className="mt-10 sm:mt-0 bg-vibrant-yellow">
        <div className="md:flex md:justify-center md:items-center mx-auto max-w-xl md:max-w-5xl px-6 py-0 sm:py-2 md:py-0 gap-4">
          <div className="flex items-center justify-center py-1 md:mb-2 h-11 sm:h-auto">
            <span className="md:mr-4 h-14 flex items-center font-ifc-insane-rodeo-bold text-intense-orange text-7xl sm:text-8xl md:text-8xl lg:text-9xl">
              --
            </span>
            <h2 className="mx-5 md:mx-0 text-3xl sm:text-5xl md:text-5xl lg:text-6xl text-white font-ifc-insane-rodeo-bold">
              Domicilios AL
            </h2>
            <span className="md:hidden h-14 flex items-center font-ifc-insane-rodeo-bold text-intense-orange text-7xl sm:text-8xl">
              --
            </span>
          </div>
          <div className="flex justify-between mx-auto md:mx-0 m-0 max-w-[300px] md:max-w-xs py-1 md:py-3 sm:max-w-[440px] gap-4">
            <div className="flex items-center bg-fire-red px-4 py-1 sm:px-5 sm:py-2 md:px-4 text-white font-bold md:text-base sm:text-2xl rounded-lg m-0">
              <span className="m-0 h-5 sm:h-auto p-0">601 519 09 99</span>
            </div>
            <div className="flex items-center bg-fire-red px-4 py-1 sm:px-5 sm:py-2 md:px-4  text-white font-bold md:text-base sm:text-2xl rounded-lg m-0">
              <span className="m-0 h-5 sm:h-auto p-0">300 599 99 00</span>
            </div>
          </div>
          <div className="hidden md:inline-flex items-center h-11 mb-3">
            <span className="leading-[1] font-ifc-insane-rodeo-bold text-intense-orange text-7xl sm:text-8xl md:text-8xl lg:text-9xl">
              --
            </span>
          </div>
        </div>
      </header>
      <section className="relative mx-auto max-w-5xl">
        <div className="relative h-80 sm:h-40 lg:h-56 flex flex-col sm:flex-row sm:justify-between mx-auto max-w-5xl">
          <BackgroundImage className={"bg-fill flex-1"} image={"/assets/home/COMBO_DUO.jpg"}>
            <div className="sm:pb-4 pb-4 pt-5 sm:pt-5 px-11 sm:px-14 mt-4 sm:mt-0 lg:mt-11">
            <aside className="flex flex-col font-ifc-insane-rodeo-bold">
              <span className="text-4xl z-10 sm:text-[42px] md:text-5xl lg:text-6xl mb-2 text-light-gold drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)]">
                COMBO
              </span>
              <div className="inline-flex items-center h-11 mb-2">
                <h3 className="text-8xl z-10 lg:text-9xl text-light-ivory drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)]">
                  DUO
                </h3>
              </div>
            </aside>
          </div>
          </BackgroundImage>
          <span className="hidden ml-0.5 sm:block absolute translate-y-[-50%] translate-x-[-50%] left-2/4 top-2/4 font-ifc-insane-rodeo-bold text-8xl text-light-ivory drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)]">
            O
          </span>
          <BackgroundImage className={"bg-fill flex-1"} image={"/assets/home/COMBO_OESTE.jpg"}>
            <div className="sm:pb-4 pb-4 pt-8 sm:pt-5 px-11 sm:px-14 sm:mt-0 lg:mt-11">
              <aside className="flex z-10 flex-col font-ifc-insane-rodeo-bold text-right">
                <span className="text-4xl sm:text-[42px] md:text-5xl lg:text-6xl mb-2 text-light-gold drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)]">
                  COMBO
                </span>
                <div className="inline-flex items-center h-11 mb-2 justify-end">
                  <h3 className="text-8xl z-10 lg:text-9xl text-light-ivory drop-shadow-[0_6px_4px_rgba(0,0,0,0.4)]">
                    OESTE
                  </h3>
                </div>
              </aside>
            </div>
          </BackgroundImage>
        </div>
      </section>
      <header className="bg-moss-green">
        <div className="flex justify-center items-center mx-auto max-w-xl md:max-w-5xl px-2 py-0 sm:py-2 md:py-2">
          <h2 className="md:mx-0 text-4xl text-center md:text-5xl lg:text-6xl text-light-ivory font-ifc-insane-rodeo-bold">
            Escoje tu promo favorita
          </h2>
        </div>
      </header>
    </>
  );
};
