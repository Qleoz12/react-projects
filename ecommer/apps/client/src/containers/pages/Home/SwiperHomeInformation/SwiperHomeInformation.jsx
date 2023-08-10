import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeItemInformation } from "./HomeItemInformation";
import { SwiperNavButtonHome } from "../../../../components/SwiperNavButton";
export const SwiperHomeInformation = () => {
  return (
    <section className="relative mx-auto max-w-5xl sm:-mb-14 -mb-[6rem]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mt-6"
        modules={[Autoplay, Navigation]}
      >
        {[1,2].map((item, index) => (
          <SwiperSlide key={index} style={{ background: "transparent" }}>
            <HomeItemInformation />
          </SwiperSlide>
        ))}
        <SwiperNavButtonHome />
      </Swiper>
    </section>
  );
};
