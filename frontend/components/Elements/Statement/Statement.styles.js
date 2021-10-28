import styled from "styled-components";

// ---

export const Copy = styled.div`
  p {
    max-width: 96rem;
    margin: 0 auto;
    color: var(--black);
    font-family: var(--avenue);
    font-size: clamp(2.4rem, 8vw, 6.4rem);
    letter-spacing: 0.05ch;
    line-height: 1.1;
    text-align: center;
    text-transform: uppercase;
    mix-blend-mode: multiply;
  }

  strong {
    --padding: calc(var(--gutter) / 2);

    display: inline;
    align-items: center;
    justify-content: center;
    padding: 0 var(--padding);
    background-color: var(--black);
    box-decoration-break: clone;
    box-shadow: var(--padding) 0 0 var(--black),
      calc(var(--padding) * -1) 0 0 var(--black);
    color: #fff;
    font-weight: normal;
  }

  em {
    display: inline-block;
    height: 100%;
    transform: translateY(-50%);
    font-family: var(--grotesque);
    font-size: clamp(1.2rem, 3vw, 2.4rem);
    font-style: normal;
  }
`;
