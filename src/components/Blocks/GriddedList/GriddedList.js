import PropTypes from 'prop-types';
import * as S from './styles';

import Container from '../../Container';
import Title from '../../Title';

//

const GriddedList = ({ title }) => {
  const foo = Array.from(Array(8).keys());

  return (
    <Container>
      <S.Title>{title && <Title title={title} />}</S.Title>

      <S.Grid>
        {foo.map((item, index) => {
          const num = index + 1;
          return (
            <S.Item>
              <S.Number>
                {num < 10 && 0}
                {num}
              </S.Number>

              <S.Copy>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </S.Copy>
            </S.Item>
          );
        })}
      </S.Grid>
    </Container>
  );
};

export default GriddedList;

GriddedList.propTypes = {
  title: PropTypes.string,
};
