/* eslint-disable import/no-unresolved */
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
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
  const swiper = useRef(null);
  const swiperPrev = useRef(null);
  const swiperNext = useRef(null);

  useEffect(() => {
    if (data?.items?.length === 1) {
      swiper?.current?.swiper?.disable();
    }
  }, [swiper, data]);

  return (
    <S.HeroCarousel>
      <Swiper
        ref={swiper}
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
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
        autoplay={{
          delay: 4000,
        }}
        loop
      >
        {data.heroItems.map((item) => {
          function SlideContent() {
            return (
              <>
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
              </>
            );
          }

          return (
            <SwiperSlide key={item._key}>
              {item.link ? (
                <Link href={item.link.link}>
                  <a>
                    <SlideContent />
                  </a>
                </Link>
              ) : (
                <div>
                  <SlideContent />
                </div>
              )}
            </SwiperSlide>
          );
        })}

        {data?.items?.length > 1 && (
          <>
            <NavigationArrow direction="prev" ref={swiperPrev} />
            <NavigationArrow direction="next" ref={swiperNext} />
          </>
        )}
      </Swiper>
    </S.HeroCarousel>
  );
}
