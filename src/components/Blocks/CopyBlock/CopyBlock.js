import PropTypes from 'prop-types';
import * as S from './styles';
import Copy from '../../Copy';
import Container from '../../Container';
import Image from '../../Image';

//

const CopyBlock = ({ title, copy, columns, image }) => (
  <Container clamp={!image}>
    {image ? (
      <S.CopyWithImage>
        <div>
          <Copy title={title} copy={copy} columns={columns} />
        </div>
        <div>
          <Image source={{ url: image.url, alt: image.alt }} />
        </div>
      </S.CopyWithImage>
    ) : (
      <Copy title={title} copy={copy} columns={columns} />
    )}
  </Container>
);

export default CopyBlock;

CopyBlock.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.object.isRequired,
  columns: PropTypes.number,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

CopyBlock.defaultProps = {
  title: null,
  columns: 1,
  image: null,
};
