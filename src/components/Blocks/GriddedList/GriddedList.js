import React from "react";
import PropTypes from "prop-types";
import * as S from "./GriddedList.styles";

import Title from "../../Title";

// ---

const GriddedList = ({ block }) => {
  const { title, text } = block;

  return (
    <S.Wrapper>
      <S.GridContainer>
        {title && <S.Title>{title && <Title title={title} />}</S.Title>}

        {text && (
          <S.Grid>
            {text.map((item, index) => {
              const num = index + 1;
              return (
                <S.Item key={item.id}>
                  <S.Number>
                    {num < 10 && 0}
                    {num}
                  </S.Number>

                  <S.Copy>{item.text}</S.Copy>
                </S.Item>
              );
            })}
          </S.Grid>
        )}
      </S.GridContainer>
    </S.Wrapper>
  );
};

GriddedList.propTypes = {
  block: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
  }),
};

GriddedList.defaultProps = {
  block: {
    title: null,
    text: null,
  },
};

export default GriddedList;
