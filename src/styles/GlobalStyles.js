import { createGlobalStyle } from 'styled-components';

//

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colours and themes */
    --white: #fff;
    --black: #181818;
    --highlight: var(--yellow);
    
    /* Rounded corners etc */
    --rounded: 0.6rem;
    --shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

    /* Gutters and spacings */
    --gutter: 0.8rem;
    --column: calc(var(--gutter) * 1.5);
    
    @media (min-width: 768px) {
      --gutter: 1.6rem;
      --column: 10%;
    }

    /* Fonts */
    --system: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --simplon: 'Simplon BP', var(--system);
    --grotesque: 'Grotesque MT Std', var(--system);
    --avenue: 'Central Avenue', var(--system);
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }
`;

export default GlobalStyles;
