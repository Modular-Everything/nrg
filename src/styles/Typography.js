import { createGlobalStyle } from 'styled-components';

//

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Grotesque MT Std';
    font-weight: 700;
    src: url('../../static/fonts/GrotesqueMTStd-BoldExtended.woff2')
        format('woff2'),
      url('../../static/fonts/GrotesqueMTStd-BoldExtended.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Simplon BP';
    font-weight: 500;
    src: url('../../static/fonts/SimplonBP-Medium.woff2') format('woff2'),
      url('../../static/fonts/SimplonBP-Medium.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Simplon BP';
    font-weight: 700;
    src: url('../../static/fonts/SimplonBP-Bold.woff2') format('woff2'),
      url('../../static/fonts/SimplonBP-Bold.woff') format('woff');
    font-display: swap;
  }

  html {
    color: var(--black);
    font-family: var(--primary);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: normal;
  }

  p {
    margin: 0;
  }

  mark, .mark {
    display: inline;
    margin: 0;
    padding: 0;
    background: var(--highlight);
    line-height: 1;
  }
`;

export default Typography;
