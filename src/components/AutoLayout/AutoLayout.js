import React from "react";
import PropTypes from "prop-types";
import * as S from "./AutoLayout.styles";

// ---

const AutoLayout = ({ children }) => {
  if (!children) return null;
  return <S.AutoLayout>{children}</S.AutoLayout>;
};

AutoLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AutoLayout;
