import PropTypes from 'prop-types';
import * as S from './styles';
import Copy from '../../Copy';
import Title from '../../Title';
import Image from '../../Image';
import BoltIcon from '../../../images/icons/Bolt';

//

const ImageBlock = ({ image, hasIcon, enlargeIcon, title, copy }) => (
  <S.ImageBlock>
    {(title || copy) && (
      <S.Copy>
        {title && <Title as="h3" title={title} />}
        {copy && <Copy copy={copy} />}
      </S.Copy>
    )}

    {hasIcon && (
      <S.Icon outline={enlargeIcon} enlarged={enlargeIcon}>
        <BoltIcon />
      </S.Icon>
    )}

    <S.Background>
      <Image source={{ url: image.url, alt: image.alt }} />
    </S.Background>
  </S.ImageBlock>
);

export default ImageBlock;

ImageBlock.propTypes = {
  image: PropTypes.object.isRequired,
  hasIcon: PropTypes.bool,
  enlargeIcon: PropTypes.bool,
  title: PropTypes.string,
  copy: PropTypes.string,
};

ImageBlock.defaultProps = {
  hasIcon: false,
  enlargeIcon: false,
  title: null,
  copy: null,
};
