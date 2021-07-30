import { createGlobalStyle } from 'styled-components';

//

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colours and themes */
    --white: #fff;
    --black: #181818;
    --highlight: var(--yellow);

    /* Gutters and spacings */
    --gutter: 1.6rem;

    /* Fonts */
    --primary: 'Simplon BP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --display: 'Grotesque MT Std', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }
`;

export default GlobalStyles;
