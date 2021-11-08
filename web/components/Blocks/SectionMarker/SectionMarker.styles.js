import styled from "styled-components";
import Container from "../../Core/Container";
import CustomNoise from "../../Elements/Noise";

// ---

export const SectionMarker = styled.section`
  --textColor: var(--${({ sectionColor }) => sectionColor});
  background-color: var(--${({ sectionBgColor }) => sectionBgColor});
  position: relative;
  overflow: hidden;
`;

export const SectionMarkerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: calc(100% - (var(--gutter) * 6));
  padding-top: calc(var(--gutter) * 2);
  padding-bottom: calc(var(--gutter) * 4);
  z-index: 100;

  @media (min-width: 768px) {
    display: grid;
    grid-gap: var(--gutter);
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(25rem, 25%) 1fr minmax(25rem, 25%);
  }

  p {
    margin-bottom: var(--gutter);

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  ol,
  ul {
    margin: 0;
    padding: 0;

    li {
      position: relative;
      margin-left: calc(var(--gutter) * 2);

      @media (min-width: 1024px) {
        margin-left: var(--gutter);
      }
    }
  }

  ul {
    list-style: none;

    li {
      &:before {
        content: "•";
        position: absolute;
        left: -1.6rem;
        color: ${({ sectionBgColor }) =>
          sectionBgColor === "red" ? "var(--white)" : "var(--red)"};
        font-size: 1.2rem;
      }
    }
  }

  ol {
    list-style: none;
    counter-reset: items;

    li {
      counter-increment: items;

      &:before {
        content: counter(items);
        position: absolute;
        left: calc(1.6rem * -1);
        color: ${({ sectionBgColor }) =>
          sectionBgColor === "red" ? "var(--white)" : "var(--red)"};
        font-size: 1rem;
      }
    }
  }

  .bolt {
    width: 1.7rem;
    height: 4.4rem;
    margin-bottom: calc(var(--gutter) * 2);
    color: ${({ sectionBgColor }) =>
      sectionBgColor === "red" ? "var(--white)" : "var(--red)"};
  }
`;

export const Title = styled.h3`
  display: flex;
  flex-direction: column;
  margin-bottom: calc(var(--gutter) * 4);
  color: var(--textColor);
  font-family: var(--grotesque);
  font-size: 2.2rem;
  font-weight: bold;
  text-transform: uppercase;

  @media (min-width: 768px) {
    grid-column: 1 / 4;
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    grid-column: unset;
  }
`;

export const Copy = styled.div`
  color: var(--textColor);
  font-size: 1.8rem;
  line-height: 2.4rem;

  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }

  @media (min-width: 1024px) {
    grid-column: unset;
    margin-top: ${({ hasTitle }) =>
      hasTitle ? "calc(4.4rem + (var(--gutter) * 2))" : 0};
  }

  a {
    display: flex;
    margin-top: calc(var(--gutter) * 4);
    color: var(--red);
    font-weight: bold;
    text-decoration: none;

    @media (min-width: 768px) {
      margin-top: calc(var(--gutter) * 2);
    }

    svg {
      width: 2.1rem;
      height: 2.1rem;
      margin-left: 0.8rem;
      transition: 250ms ease transform;
    }

    &:hover svg {
      transform: translateX(0.4rem);
    }
  }

  ol,
  ul {
    margin-top: calc(var(--gutter) * 4);

    @media (min-width: 768px) {
      margin-top: calc(var(--gutter) * 3);
    }

    li {
      margin-left: calc(var(--gutter) * 2);

      @media (min-width: 1024px) {
        margin-left: 0;
      }
    }
  }
`;

export const Aside = styled.div`
  grid-column: 3 / 3;
  color: var(--textColor);
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin-top: calc(var(--gutter) * 2);

  @media (min-width: 1024px) {
    grid-column: unset;
    margin-top: ${({ hasTitle }) =>
      hasTitle ? "calc(4.4rem + (var(--gutter) * 2))" : 0};
  }
`;

export const Noise = styled(CustomNoise)`
  opacity: 0.5;
`;
