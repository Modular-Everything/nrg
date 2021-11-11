import styled from "styled-components";
import OutlineText from "../../Elements/OutlineText";

// ---

export const FixedBgText = styled(OutlineText)`
  position: fixed;
  z-index: -1;
  top: 0;
  opacity: 0.2;

  p {
    line-height: 1;
  }
`;
