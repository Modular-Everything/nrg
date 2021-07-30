import PropTypes from 'prop-types';
import * as S from './styles';

//

const AutoLayout = ({ children }) => {
  if (!children) return null;
  return <S.AutoLayout>{children}</S.AutoLayout>;
};

export default AutoLayout;

AutoLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
