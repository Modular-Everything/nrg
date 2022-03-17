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
import { HoverCTA } from "./HoverCTA";
import { HoverCopyCard } from "./HoverCopyCard";
import { StandardCard } from "./StandardCard";

function cardPicker(type, card) {
  const types = {
    standard: <StandardCard data={card} />,
    hoverCopy: <HoverCopyCard data={card} />,
    hoverCTA: <HoverCTA data={card} />,
  };

  return types[type] || null;
}

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
          loopAdditionalSlides={1}
          slidesPerView="auto"
          loop={data?.standardCards?.length > 3}
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
      </Container>
    </S.Carousel>
  );
}
