import { createGlobalStyle } from "styled-components";

//

const Stacking = createGlobalStyle`
  .top {
    .block__SectionMarker {
      padding-top: calc(var(--header) + var(--gutter))
    }
  }
`;

export default Stacking;
