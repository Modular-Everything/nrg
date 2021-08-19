import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

import * as S from "./Copy.styles";

// ---

/**
 *
 * @param {string} title An optional title.
 * @param {array} copy An array of copy, each key containing a string of text, rendered as paragraphs.
 * @param {number} columns A number of columns required.
 * @returns A single, or multiple, column(s) of copy with an optional title.
 */

const Copy = ({ title, copy, columns }) => {
  if (!copy) return null;

  const RenderedCopy = () => <ReactMarkdown>{copy}</ReactMarkdown>;

  return (
    <S.Copy>
      {/* An optional title */}
      {title && <S.Title as="h2">{title}</S.Title>}

      {/* Either returns a single column or multi columns */}
      {columns === 1 ? (
        <S.SingleColumn>
          <RenderedCopy />
        </S.SingleColumn>
      ) : (
        <S.MultiColumn columns={columns}>
          <RenderedCopy />
        </S.MultiColumn>
      )}
    </S.Copy>
  );
};

Copy.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string.isRequired,
  columns: PropTypes.number,
};

Copy.defaultProps = {
  title: null,
  columns: 1,
};

export default Copy;
