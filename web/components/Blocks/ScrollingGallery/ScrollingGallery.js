import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Link from "next/link";

import * as S from "./ScrollingGallery.styles";
import Image from "../../Elements/Image";
import FadeIn from "../../Animations/FadeIn";

// ---

const GalleryItem = ({ item }) => (
  <S.GalleryImage>
    {item.title !== "" && (
      <div className="caption">
        <h5>{item.title}</h5>
      </div>
    )}
    <div className="background">
      <Image image={item.image} layout="fill" />
    </div>
  </S.GalleryImage>
);

GalleryItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

// ---

const ScrollingGallery = ({ block }) => {
  const { layoutType, items } = block;

  return (
    <S.Container>
      <S.ScrollingGallery className={layoutType}>
        <FadeIn>
          <Swiper slidesPerView="auto" spaceBetween={16}>
            {/* eslint-disable-next-line react/prop-types */}
            {items?.map((item, index) => (
              <SwiperSlide key={item.id}>
                <S.Slide className={item.layoutType}>
                  <p className="index">
                    {index + 1}/{items.length}
                  </p>

                  {item.link ? (
                    <Link href={`/${item.link.slug}`}>
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a>
                        <GalleryItem item={item} />
                      </a>
                    </Link>
                  ) : (
                    <GalleryItem item={item} />
                  )}
                </S.Slide>
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeIn>
      </S.ScrollingGallery>
    </S.Container>
  );
};

ScrollingGallery.propTypes = {
  block: PropTypes.shape({
    layoutType: PropTypes.string.isRequired,
    items: PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.shape({
        slug: PropTypes.string,
      }),
      // eslint-disable-next-line react/forbid-prop-types
      image: PropTypes.object.isRequired,
      layoutType: PropTypes.string.isRequired,
      length: PropTypes.number.isRequired,
    }).isRequired,
  }),
};

ScrollingGallery.defaultProps = {
  block: {
    items: {
      title: null,
      link: null,
    },
  },
};
export default ScrollingGallery;
