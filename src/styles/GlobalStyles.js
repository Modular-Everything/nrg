import { createGlobalStyle } from 'styled-components';

//

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colours and themes */
    --white: #fff;
    --black: #000;
    --highlight: var(--yellow);

    /* Gutters and spacings */
    --gutter: 1.6rem;
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }
`;

export default GlobalStyles;
