import styled from "styled-components";

export const LargeStatements = styled.section`
  --padding: 1.6rem;

  background-color: ${({ theme }) => theme.background};
  padding: var(--padding);
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    --padding: 1.6rem;

    padding: calc(var(--padding) * 3) var(--padding);
  }

  .container {
    z-index: 10;
    position: relative;
    mix-blend-mode: ${({ theme }) =>
      theme.background.includes("white") ? "multiply" : "screen"};
  }

  .statement {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.4rem 0;

    p {
      max-width: 96rem;
      margin: 0 auto;
      color: ${({ theme }) =>
        theme.background.includes("white") ? "#000" : "#fff"};
      font-family: var(--avenue);
      font-size: clamp(2.4rem, 5vw, 6.4rem);
      letter-spacing: 0.05ch;
      line-height: 1.1;
      text-align: center;
      text-transform: uppercase;
    }

    strong {
      --padding: calc(1.6rem / 2);
      display: inline;
      align-items: center;
      justify-content: center;
      padding: 0 var(--padding);
      background-color: ${({ theme }) =>
        theme.background.includes("white") ? "#000" : "#fff"};
      box-decoration-break: clone;
      color: ${({ theme }) =>
        theme.background.includes("white") ? "#fff" : "#000"};
      font-weight: normal;
    }

    em {
      display: inline-block;
      height: 100%;
      transform: translateY(-25%);
      font-family: var(--grotesque);
      font-size: clamp(1.2rem, 3vw, 2.4rem);
      font-style: normal;

      @media (min-width: 1100px) {
        transform: translateY(-50%);
      }
    }
  }
`;

export const BGImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;
