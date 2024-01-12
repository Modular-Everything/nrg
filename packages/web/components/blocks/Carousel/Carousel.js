/* eslint-disable import/no-unresolved */
import { useRef } from "react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Container } from "../../core/Container";
import { NavigationArrow } from "../../elements/NavigationArrow";
import * as S from "./Carousel.styles";
import { HoverCTA } from "./HoverCTA";
import { HoverCopyCard } from "./HoverCopyCard";
import { StandardCard } from "./StandardCard";
import { TestimonialCard } from "./TestimonialCard";

function cardPicker(type, card) {
  const types = {
    standard: <StandardCard data={card} />,
    hoverCopy: <HoverCopyCard data={card} />,
    hoverCTA: <HoverCTA data={card} />,
    testimonial: <TestimonialCard data={card} />,
  };

  return types[type] || null;
}

export function Carousel({ data }) {
  const swiperPrev = useRef(null);
  const swiperNext = useRef(null);

  const autoplay = !(
    data?.autoPlayCarousel === 0 ||
    data?.autoPlayCarousel === null ||
    data?.autoPlayCarousel === undefined
  );

  return (
    <S.Carousel>
      <Container>
        {data?.layoutType !== "testimonial" && (
          <Swiper
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            navigation={{
              nextEl: swiperNext.current,
              prevEl: swiperPrev.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.nextEl = swiperNext.current;
              swiper.params.navigation.prevEl = swiperPrev.current;
            }}
            spaceBetween={16}
            loopAdditionalSlides={1}
            slidesPerView="auto"
            loop={data?.standardCards?.length > 3}
            autoplay={{
              enabled: autoplay,
              delay: data?.autoPlayCarousel || 3000,
              disableOnInteraction: false,
              waitForTransition: false,
            }}
          >
            {data?.standardCards?.map((card) => {
              if (!card?.image?.asset) {
                return null;
              }

              // eslint-disable-next-line no-unused-vars
              const [assetType, _id, dimensions, filetype] =
                card.image.asset._ref.split("-");
              const [width, height] = dimensions.split("x");

              return (
                <SwiperSlide
                  key={card._key}
                  className={
                    Number(width) < Number(height) ? "portrait" : "landscape"
                  }
                >
                  {data?.standardCards?.length > 0 &&
                    cardPicker(data?.layoutType, card)}
                </SwiperSlide>
              );
            })}

            <NavigationArrow direction="prev" ref={swiperPrev} />
            <NavigationArrow direction="next" ref={swiperNext} />
          </Swiper>
        )}

        {data?.layoutType === "testimonial" && (
          <Swiper
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            navigation={{
              nextEl: swiperNext.current,
              prevEl: swiperPrev.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.nextEl = swiperNext.current;
              swiper.params.navigation.prevEl = swiperPrev.current;
            }}
            spaceBetween={16}
            loopAdditionalSlides={1}
            slidesPerView="auto"
            loop={data?.testimonialCards?.length > 3}
            autoplay={{
              enabled: autoplay,
              delay: data?.autoPlayCarousel || 3000,
              disableOnInteraction: false,
              waitForTransition: false,
            }}
          >
            {data?.testimonialCards?.map((card) => {
              return (
                <SwiperSlide key={card._key} className="landscape">
                  {data?.testimonialCards?.length > 0 &&
                    cardPicker(data?.layoutType, card)}
                </SwiperSlide>
              );
            })}

            <NavigationArrow direction="prev" ref={swiperPrev} />
            <NavigationArrow direction="next" ref={swiperNext} />
          </Swiper>
        )}
      </Container>
    </S.Carousel>
  );
}
