import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { BiRightArrowAlt as ArrowRight } from "react-icons/bi";

import * as S from "./IndexPageCards.styles";
import Container from "../../Core/Container";
import Image from "../../Elements/Image";

export function IndexPageCards({ block }) {
  const { orientation } = block;

  return (
    <Container>
      <S.IndexPageCards orientation={orientation}>
        {block?.cards?.map((card) => (
          <Link href={`/projects/${card.link?.data?.slug?.current}`}>
            <a>
              <article key={card._key}>
                <div className="media">
                  {card.cardType === "image" ? (
                    <Image
                      className="content"
                      image={card.cardImage}
                      layout="fill"
                      quality={90}
                    />
                  ) : (
                    <div className="content">
                      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                      <video autoPlay muted loop>
                        <source
                          src={card.cardVideo?.data?.url}
                          type={card.cardVideo?.data?.mimeType}
                        />
                      </video>
                    </div>
                  )}
                </div>
                <div className="meta">
                  <h4>{card.subtitle}</h4>
                  <h3>{card?.link?.data?.title}</h3>
                </div>
                <div className="label">
                  View Project <ArrowRight />
                </div>
              </article>
            </a>
          </Link>
        ))}
      </S.IndexPageCards>
    </Container>
  );
}

IndexPageCards.propTypes = {
  block: PropTypes.object.isRequired,
};
