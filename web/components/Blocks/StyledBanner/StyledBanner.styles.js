import styled from "styled-components";
import MarqueeText from "../../Elements/MarqueeText";
import CustomNoise from "../../Elements/Noise";

// ---

export const StyledBanner = styled.section`
  --gap: calc(var(--gutter) * 4);
  --extraGap: var(--header);
  --backgroundColor: var(--${({ backgroundColor }) => backgroundColor});

  display: flex;
  position: relative;
  min-height: 32rem;
  padding: ${({ makeSpaceForHeader }) =>
    makeSpaceForHeader ? "var(--header) 0" : "var(--gap) 0"};
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
  opacity: ${({ backgroundColor }) =>
    backgroundColor === "red" ? "0.15" : "0.5"};
`;
