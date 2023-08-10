import { useSwiper } from "swiper/react"
import { ChevronLeft, ChevronRight } from "./Icons"

export const SwiperNavButton = () => {
  const swiper = useSwiper()
  return (
    <div className="absolute inset-x-0 z-10 top-1/2">
      <button className="absolute z-30 left-0" onClick={() => swiper.slidePrev()}>
        <div className="w-7 fill-chocolate-brown">
          <ChevronLeft />
        </div>
      </button>
      <button className="absolute z-30 right-0" onClick={() => swiper.slideNext()}>
        <div className="w-7 fill-chocolate-brown">
          <ChevronRight />
        </div>
      </button>
    </div>
  )
}

export const SwiperNavButtonHome = () => {
  const swiper = useSwiper()
  return (
    <div className="absolute inset-x-0 z-10 top-[240px]">
      <button className="absolute z-30 left-4 sm:left-14" onClick={() => swiper.slidePrev()}>
        <div className="w-7 fill-light-ivory">
          <ChevronLeft />
        </div>
      </button>
      <button className="absolute z-30 right-4 sm:right-14" onClick={() => swiper.slideNext()}>
        <div className="w-7 fill-light-ivory">
          <ChevronRight />
        </div>
      </button>
    </div>
  )
}
