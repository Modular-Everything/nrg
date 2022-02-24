import styled from "styled-components";

export const BasicMedia = styled.div`
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    &.headline,
    &.statementText,
    &.headlineAlt,
    &.bolt,
    &.statement {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &.statementText {
      justify-content: space-between;
    }

    &.headlineAlt {
      align-items: flex-start;
      justify-content: flex-start;
    }

    &.bolt {
      overflow: hidden;
      color: var(--white);

      svg {
        height: 100%;
      }

      .bolt--large {
        height: 100%;
      }

      .bolt--small {
        height: 100%;
        max-height: 24rem;
        padding: 0.8rem 0;
      }
    }
  }

  .imageElement {
    display: flex;
  }
`;
