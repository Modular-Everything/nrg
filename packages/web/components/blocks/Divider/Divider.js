import PropTypes from "prop-types";

import { Container } from "../../core/Container";
import * as S from "./Divider.styles";

export function Divider({ data }) {
  return (
    <S.Divider
      style={{
        padding: `${data?.spacing / 10}rem 0` || 0,
        backgroundColor: data?.backgroundColor,
      }}
    >
      {data?.divider && (
        <Container>
          <hr
            style={{
              backgroundColor: data?.backgroundColor.includes("red")
                ? "var(--nrg-white)"
                : "var(--nrg-lt-grey)",
            }}
          />
        </Container>
      )}
    </S.Divider>
  );
}

Divider.propTypes = {
  data: PropTypes.object,
};

Divider.defaultProps = {
  data: null,
};
