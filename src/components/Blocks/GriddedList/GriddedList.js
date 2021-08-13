import PropTypes from 'prop-types';
import * as S from './styles';

import Title from '../../Title';

//

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

export default GriddedList;

GriddedList.propTypes = {
  block: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.array,
  }),
};

GriddedList.defaultProps = {
  block: {
    title: null,
    text: null,
  },
};
