import PropTypes from "prop-types";

import * as S from "./Container.styles";

export function Container({ children, ...rest }) {
  return (
    <S.Container className="container" {...rest}>
      {children}
    </S.Container>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
