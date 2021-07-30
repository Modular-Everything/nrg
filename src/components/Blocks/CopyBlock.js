import PropTypes from 'prop-types';
import Copy from '../Copy';
import Container from '../Container';

//

const CopyBlock = ({ title, copy, columns }) => (
  <Container clamp>
    <Copy title={title} copy={copy} columns={columns} />
  </Container>
);

export default CopyBlock;

CopyBlock.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.object.isRequired,
  columns: PropTypes.number,
};

CopyBlock.defaultProps = {
  title: null,
  columns: 1,
};
