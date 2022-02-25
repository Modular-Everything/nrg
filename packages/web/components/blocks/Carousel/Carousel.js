/* eslint-disable import/no-unresolved */
import { useRef } from "react";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Container } from "../../core/Container";
import { NavigationArrow } from "../../elements/NavigationArrow";
import * as S from "./Carousel.styles";
import { StandardCard } from "./StandardCard/StandardCard";

export function Carousel({ data }) {
  console.log(data);
  const swiperPrev = useRef(null);
  const swiperNext = useRef(null);

  return (
    <S.Carousel>
      <Container>
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
          spaceBetween={16}
          slidesPerView={1}
          loopAdditionalSlides={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          loop
        >
          {data?.layoutType === "standard" &&
            data?.standardCards.map((card) => (
              <SwiperSlide key={card._key}>
                <StandardCard data={card} />
              </SwiperSlide>
            ))}

          <NavigationArrow direction="prev" ref={swiperPrev} />
          <NavigationArrow direction="next" ref={swiperNext} />
        </Swiper>
      </Container>
    </S.Carousel>
  );
}
