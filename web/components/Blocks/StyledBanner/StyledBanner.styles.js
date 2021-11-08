import styled from "styled-components";
import MarqueeText from "../../Elements/MarqueeText";
import CustomNoise from "../../Elements/Noise";

// ---

export const StyledBanner = styled.section`
  --gap: calc(var(--gutter) * 2);
  --extraGap: var(--header);
  --backgroundColor: var(--${({ backgroundColor }) => backgroundColor});

  display: flex;
  position: relative;
  min-height: 32rem;
  padding: var(--extraGap) 0 calc(var(--extraGap) / 2);
  overflow: hidden;
  background-color: var(--backgroundColor);
`;

export const StyledText = styled(MarqueeText)`
  --color: #fff;
  --cut: #000;
  --blend: screen;

  position: relative;
  z-index: 100;
  width: 100%;
`;

export const Noise = styled(CustomNoise)`
  opacity: 0.5;
`;
