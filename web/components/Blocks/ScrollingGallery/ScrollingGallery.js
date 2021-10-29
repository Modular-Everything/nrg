import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Link from "next/link";

import * as S from "./ScrollingGallery.styles";
import Container from "../../Core/Container";
import Image from "../../Elements/Image";

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
  const { layout_type, items } = block;

  return (
    <Container>
      <S.ScrollingGallery className={layout_type}>
        <Swiper slidesPerView="auto" spaceBetween={16}>
          {/* eslint-disable-next-line react/prop-types */}
          {items.map((item, index) => (
            <SwiperSlide key={item.id}>
              <S.Slide className={item.layout_type}>
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
      </S.ScrollingGallery>
    </Container>
  );
};

ScrollingGallery.propTypes = {
  block: PropTypes.shape({
    layout_type: PropTypes.string.isRequired,
    items: PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.shape({
        slug: PropTypes.string,
      }),
      // eslint-disable-next-line react/forbid-prop-types
      image: PropTypes.object.isRequired,
      layout_type: PropTypes.string.isRequired,
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
