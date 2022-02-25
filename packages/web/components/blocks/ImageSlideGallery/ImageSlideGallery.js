/* eslint-disable import/no-unresolved */
import { useRef } from "react";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Container } from "../../core/Container";
import { Copy } from "../../elements/Copy";
import { Image } from "../../elements/Image";
import * as S from "./ImageSlideGallery.styles";

export function ImageSlideGallery({ data }) {
  const swiperPrev = useRef(null);
  const swiperNext = useRef(null);

  return (
    <S.ImageSlideGallery>
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
          loop
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            940: {
              slidesPerView: 4,
            },
          }}
        >
          {data?.items?.map((item) => (
            <SwiperSlide key={item._key}>
              <div className="imageSlide__image">
                {item.image && (
                  <Image
                    src={item.image}
                    alt=""
                    objectFit="cover"
                    quality={95}
                  />
                )}
              </div>
              {item.bodyCopy?.copy && (
                <div className="imageSlide__meta">
                  <Copy data={item.bodyCopy?.copy} />
                </div>
              )}
            </SwiperSlide>
          ))}

          <S.NavigationArrow type="button" className="prev" ref={swiperPrev}>
            &larr;
          </S.NavigationArrow>

          <S.NavigationArrow type="button" className="next" ref={swiperNext}>
            &rarr;
          </S.NavigationArrow>
        </Swiper>
      </Container>
    </S.ImageSlideGallery>
  );
}
