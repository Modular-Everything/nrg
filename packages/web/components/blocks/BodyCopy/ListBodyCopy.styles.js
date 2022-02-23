import styled from "styled-components";

export const ListBodyCopy = styled.section`
  h3 {
    margin: 0;
  }

  .container {
    @media (min-width: 768px) {
      display: grid;
      grid-gap: 2.4rem;
      grid-template-columns: minmax(25rem, 25%) 1fr minmax(25rem, 25%);
    }
  }

  .listBody__list {
    p {
      display: none;
    }

    ol {
      margin: 0;
      padding: 0;
      list-style: none;
      counter-reset: items;

      li {
        counter-increment: items;
        position: relative;
        margin-left: 1.6rem;

        &:before {
          content: counter(items);
          position: absolute;
          left: calc(1.6rem * -1);
          font-size: 1rem;
          color: inherit;
        }
      }
    }
  }
`;
