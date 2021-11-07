import React from "react";
import PropTypes from "prop-types";
import * as S from "./Container.styles";

// ---

const Container = ({ children, className, clamp, ...rest }) => (
  <S.Container className={className} {...rest}>
    {clamp ? <S.Clamp>{children}</S.Clamp> : <>{children}</>}
  </S.Container>
);

Container.defaultProps = {
  className: null,
  clamp: false,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  clamp: PropTypes.bool,
};

export default Container;
