import styled from "styled-components";
import CustomNoise from "../../Elements/Noise";

// ---

export const MarqueeBanner = styled.section`
  padding: calc(var(--gutter) * 6) 0;
  background-color: var(--lt-grey);
  overflow: hidden;
  position: relative;
`;

export const Noise = styled(CustomNoise)`
  opacity: 0.15;
`;
