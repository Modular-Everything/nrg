import PropTypes from 'prop-types';
import * as S from './styles';

//

const Title = ({ title }) => {
  if (!title) return null;
  return <S.Title>{title}</S.Title>;
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
