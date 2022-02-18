import PropTypes from "prop-types";

import * as S from "./Container.styles";

export function Container({ children }) {
  return <S.Container className="container">{children}</S.Container>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
