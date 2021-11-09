import React from "react";
import PropTypes from "prop-types";
import SwiperCore, { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./CardsGallery.styles";
import Image from "../../Elements/Image";
import FadeIn from "../../Animations/FadeIn";

// ---

SwiperCore.use([Scrollbar]);

// ---

const CardsGallery = ({ block }) => {
  const { item } = block;

  return (
    <S.CardsGallery>
      <S.Container>
        <FadeIn>
          <Swiper
            spaceBetween={16}
            slidesPerView={4}
            scrollbar={{ draggable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 4,
              },
            }}
          >
            {item.map((card) => (
              <SwiperSlide key={card._key}>
                <div className="img">
                  <Image image={card.image} layout="fill" />
                </div>

                {(card.title || card.subtitle) && (
                  <div className="copy">
                    {card.title && <h5>{card.title}</h5>}
                    {card.subtitle && <p>{card.subtitle}</p>}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeIn>
      </S.Container>
    </S.CardsGallery>
  );
};

CardsGallery.propTypes = {
  block: PropTypes.shape({
    item: PropTypes.arrayOf({
      title: PropTypes.string,
      subtitle: PropTypes.string,
    }),
  }),
};

CardsGallery.defaultProps = {
  block: {
    item: [
      {
        title: null,
        subtitle: null,
      },
    ],
  },
};

export default CardsGallery;
