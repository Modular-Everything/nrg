import { PortableText } from "@portabletext/react";
import PropTypes from "prop-types";

import * as S from "./Copy.styles";

export function Copy({ data }) {
  return (
    <S.Copy className="copy">
      <PortableText value={data} />
    </S.Copy>
  );
}

Copy.propTypes = {
  data: PropTypes.object.isRequired,
};
