/* eslint-disable import/no-unresolved */
import { useRef } from "react";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Copy } from "../../elements/Copy";
import { Image } from "../../elements/Image";
import { NavigationArrow } from "../../elements/NavigationArrow";
import { Vimeo } from "../../elements/Vimeo";
import * as S from "./HeroCarousel.styles";

export function HeroCarousel({ data }) {
  const swiperPrev = useRef(null);
  const swiperNext = useRef(null);

  return (
    <S.HeroCarousel>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        navigation={{
          nextEl: swiperNext.current,
          prevEl: swiperPrev.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.nextEl = swiperNext.current;
          swiper.params.navigation.prevEl = swiperPrev.current;
        }}
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
        {data.items.map((item) => {
          return (
            <SwiperSlide key={item._key}>
              <div>
                {item.copy && (
                  <S.Copy>
                    <Copy data={item.copy.content} />
                  </S.Copy>
                )}

                {item._type === "item" ? (
                  <Image src={item.image} layout="fill" objectFit="cover" />
                ) : (
                  <Vimeo url={item.vimeo} />
                )}
              </div>
            </SwiperSlide>
          );
        })}

        <NavigationArrow direction="prev" ref={swiperPrev} />
        <NavigationArrow direction="next" ref={swiperNext} />
      </Swiper>
    </S.HeroCarousel>
  );
}
