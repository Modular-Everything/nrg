import React from "react";
import PropTypes from "prop-types";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./ScrollingGallery.styles";
import Container from "../../Core/Container";

// ---

const ScrollingGallery = ({ images }) => {
  if (!images) return null;

  return (
    <Container>
      <S.ScrollingGallery>
        <Swiper slidesPerView="auto" spaceBetween={16}>
          {images.map((image, index) => (
            <SwiperSlide>
              <S.Slide>
                <p className="index">
                  {index + 1}/{images.length}
                </p>
                <S.GalleryImage key={index}>
                  <div className="caption">
                    <h5>{image.caption}</h5>
                  </div>
                  <div className="background">
                    <img src={image.source} alt="" />
                  </div>
                </S.GalleryImage>
              </S.Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.ScrollingGallery>
    </Container>
  );
};

ScrollingGallery.propTypes = {
  images: PropTypes.arrayOf({
    source: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }).isRequired,
};
export default ScrollingGallery;
