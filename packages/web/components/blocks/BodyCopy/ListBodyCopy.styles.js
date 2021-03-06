import styled from "styled-components";

export const ListBodyCopy = styled.div`
  color: ${({ theme }) => theme.copy};

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.title};
  }

  .container {
    display: grid;
    grid-row-gap: 2.4rem;

    @media (min-width: 680px) {
      grid-column-gap: 2.4rem;
      grid-template-columns: minmax(15rem, 20%) 1fr minmax(20rem, 25%);
    }

    @media (min-width: 768px) {
      grid-column-gap: 6.4rem;
    }

    /* @media (min-width: 900px) {

      grid-template-columns: minmax(18rem, 15%) 1fr minmax(25rem, 25%);
    } */
  }

  .listBody__bolt {
    @media (min-width: 680px) {
      grid-column: span 3;
    }

    svg path {
      fill: ${({ theme }) => theme.bolt};
    }
  }

  .listBody__body p {
    max-width: 40rem;

    @media (min-width: 680px) {
      max-width: unset;
    }
  }

  .listBody__list {
    p {
      display: none;
    }

    a {
      color: ${({ theme }) => theme.bullets.text};
    }

    ol,
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;

      li {
        background-color: ${({ theme }) => theme.bullets.background};
        color: ${({ theme }) => theme.bullets.text};
        border-radius: 0.6rem;
        padding: 0.8rem 0.8rem 0.6rem 0.8rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }
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
          top: 0.3rem;
          font-size: 1.1rem;
          font-family: var(--simplon);
          color: ${({ theme }) => theme.numbers};
        }
      }
    }
  }
`;
