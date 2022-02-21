import styled from "styled-components";

export const List = styled.section`
  padding: 6.4rem 0;

  h3 {
    font-family: var(--avenue);
    font-weight: bold;
    font-size: clamp(4rem, 8vw, 7rem);
    line-height: clamp(4rem, 8vw, 7rem);
    margin: 0 0 6.4rem;
  }

  .grid {
    --min: 15ch;

    display: grid;
    grid-gap: 2.4rem;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
    list-style: none;
    margin: 0;
    padding: 0;

    @media (min-width: 768px) {
      --min: 20ch;
    }

    li {
      border-top: 1px solid;
      padding-top: 2.4rem;
    }

    span {
      margin-bottom: 0;
      font-family: var(--grotesque);
      font-weight: bold;
      line-height: 2.4rem;

      @media (min-width: 640px) {
        margin-bottom: var(--gutter);
      }
    }

    p {
      font-size: 1.8rem;
      line-height: 2.4rem;
      margin: 0;
    }
  }
`;
