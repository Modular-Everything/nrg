import { createGlobalStyle } from "styled-components";

//

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colours and themes */
    --white: #fff;
    --black: #282828;
    --grey: #616161;
    --lt-grey: #F4F4F4;
    --red: #f00;
    --highlight: var(--yellow);

    /* Rounded corners etc */
    --rounded: 0.6rem;
    --shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

    /* Gutters and spacings */
    --gutter: 1.6rem;
    --column: calc(var(--gutter) * 1.5);
    --header: 14rem;

    @media (min-width: 768px) {
      /* --gutter: 1.6rem; */
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
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    overflow-x: hidden;
    font-size: 2rem;
    background-color: var(--white);
  }

  p a {
    transition: 250ms ease text-decoration-color;
    color: inherit;
    text-decoration-color: var(--red);

    &:hover {
      text-decoration-color: var(--black);
    }
  }
`;

export default GlobalStyles;
