import styled from "styled-components";

export const LogoGrid = styled.section`
  padding: 2.4rem 0;

  .copy {
    columns: 2;
    column-gap: 2.4rem;

    h2,
    h3 {
      column-span: all;
      margin: 0 0 1.6rem 0;
      padding: 0;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 24rem), 1fr));
    gap: 1.6rem;

    article {
      height: 18rem;
      background-color: var(--nrg-black);
      border-radius: 0.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }

    .imageElement {
      display: flex;
      height: 100%;
    }
  }
`;
