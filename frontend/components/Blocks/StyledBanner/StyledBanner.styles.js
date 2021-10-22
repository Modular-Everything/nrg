import styled from "styled-components";
import MarqueeText from "../../Elements/MarqueeText";

// ---

export const StyledBanner = styled.section`
  --gap: calc(var(--gutter) * 2);
  --extraGap: var(--header);
  --backgroundColor: var(--${({ backgroundColor }) => backgroundColor});

  display: flex;
  position: relative;
  min-height: 32rem;
  padding: var(--extraGap) 0;
  background-color: var(--backgroundColor);
`;

export const StyledText = styled(MarqueeText)`
  --color: #fff;
  --cut: var(--backgroundColor);
  --blend: screen;

  position: relative;
  z-index: 20;
`;
