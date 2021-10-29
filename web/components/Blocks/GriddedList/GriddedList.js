import React from "react";
import PropTypes from "prop-types";
import * as S from "./GriddedList.styles";

import Title from "../../Elements/Title";

// ---

const GriddedList = ({ block }) => {
  const { title, text, layout_type } = block;

  return (
    <S.Wrapper className={`wrapper__${layout_type}`}>
      <S.GridContainer className={`grid__${layout_type}`}>
        {title && (
          <S.Title className="title">
            {title && <Title title={title} />}
          </S.Title>
        )}

        {text && (
          <S.Grid className="grid">
            {text.map((item, index) => {
              const num = index + 1;
              return (
                <S.Item key={item.id} className="item">
                  <S.Number className="number">
                    {num < 10 && 0}
                    {num}
                  </S.Number>

                  <S.Copy className="copy">{item.text}</S.Copy>
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
    layout_type: PropTypes.string.isRequired,
  }),
};

GriddedList.defaultProps = {
  block: {
    title: null,
    text: null,
  },
};

export default GriddedList;
