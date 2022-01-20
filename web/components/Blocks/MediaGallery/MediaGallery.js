import React from "react";
import PropTypes from "prop-types";

import * as S from "./MediaGallery.styles";
import Container from "../../Core/Container";
import Image from "../../Elements/Image";

export function MediaGallery({ block }) {
  return (
    <Container>
      <S.MediaGallery>
        {block?.media?.map((item) => (
          <article
            key={item._key}
            className={`MediaGallery__${item.orientation}`}
          >
            {item.mediaType === "image" ? (
              <Image
                className="content"
                image={item.mediaImage}
                layout="fill"
                quality={90}
              />
            ) : (
              <div className="content">
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video autoPlay muted loop>
                  <source
                    src={item.mediaVideo?.data?.url}
                    type={item.mediaVideo?.data?.mimeType}
                  />
                </video>
              </div>
            )}
          </article>
        ))}
      </S.MediaGallery>
    </Container>
  );
}

MediaGallery.propTypes = {
  block: PropTypes.object.isRequired,
};
