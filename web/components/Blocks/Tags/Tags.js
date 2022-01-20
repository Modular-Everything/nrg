import React from "react";
import PropTypes from "prop-types";
import * as S from "./Tags.styles";
import FadeIn from "../../Animations/FadeIn";

export function Tags({ block }) {
  return (
    <FadeIn>
      <S.Container>
        <S.Tags tagColor={block?.tagColor}>
          {block?.tags?.map((tag) => (
            <li key={tag._key}>{tag}</li>
          ))}
        </S.Tags>
      </S.Container>
    </FadeIn>
  );
}

Tags.propTypes = {
  block: PropTypes.object.isRequired,
};
