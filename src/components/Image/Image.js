import PropTypes from 'prop-types';
import * as S from './styles';

//

const Image = ({ source }) => <S.Img src={source.url} alt={source.alt} />;

export default Image;

Image.propTypes = {
  source: PropTypes.object.isRequired,
};
