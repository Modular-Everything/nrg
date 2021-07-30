import PropTypes from 'prop-types';
import * as S from './styles';

//

/**
 *
 * @param {string} title An optional title.
 * @param {array} copy An array of copy, each key containing a string of text, rendered as paragraphs.
 * @param {number} columns A number of columns required.
 * @returns A single, or multiple, column(s) of copy with an optional title.
 */

const BodyCopy = ({ title, copy, columns }) => {
  if (!copy) return null;

  const Copy = () => {};

  console.log(<Copy />);

  return (
    <S.BodyCopy>
      {/* An optional title */}
      {title && <S.Title as="h2">{title}</S.Title>}

      {/* Either returns a single column or multi columns */}
      {columns === 1 ? (
        <S.SingleColumn>
          {copy.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </S.SingleColumn>
      ) : (
        <S.MultiColumn columns={columns} as="p">
          {copy.map((paragraph) => (
            <>{paragraph}</>
          ))}
        </S.MultiColumn>
      )}
    </S.BodyCopy>
  );
};

export default BodyCopy;

BodyCopy.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.object.isRequired,
  columns: PropTypes.number,
};

BodyCopy.defaultProps = {
  title: null,
  columns: 1,
};
