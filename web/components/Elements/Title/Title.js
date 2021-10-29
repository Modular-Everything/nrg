import React from "react";
import PropTypes from "prop-types";
import * as S from "./Title.styles";

// ---

/**
 *
 * @param {string} title The title.
 * @param {string} as Display the component as a custom element (h2, h3, div, p, etc).
 * @returns A big large title in Central Avenue font.
 */

const Title = ({ title, as }) => {
  if (!title) return null;
  return <S.Title as={as}>{title}</S.Title>;
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  as: PropTypes.string,
};

Title.defaultProps = {
  as: "h2",
};
