import PropTypes from "prop-types";

import { Container } from "../../core/Container";
import { Vimeo } from "../../elements/Vimeo";
import * as S from "./Video.styles";

export function Video({ data }) {
  console.log("Video", data);

  return (
    <Container>
      <S.Video>
        <Vimeo url={data?.vimeo} contained />
      </S.Video>
    </Container>
  );
}

Video.propTypes = {
  data: PropTypes.object.isRequired,
};
