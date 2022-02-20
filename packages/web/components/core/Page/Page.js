import PropTypes from "prop-types";

import { getBlock } from "../../../helpers/getBlock";
import * as S from "./Page.styles";

export function Page({ data }) {
  return (
    <S.Page>
      {data?.blocks?.map((block) => {
        return getBlock(block);
      })}
    </S.Page>
  );
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
};
