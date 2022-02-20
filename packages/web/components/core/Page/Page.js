import PropTypes from "prop-types";

import * as S from "./Page.styles";

export function Page({ data }) {
  return (
    <S.Page>
      <h1>{data?.title}</h1>
      Loaded in <pre style={{ display: "inline" }}>Page.js</pre>
    </S.Page>
  );
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
};
