import PropTypes from 'prop-types';
import * as S from './styles';

//

const Image = ({ data }) => <S.Img src={data.url} alt={data.alt} />;

export default Image;

Image.propTypes = {
  data: PropTypes.object.isRequired,
};
