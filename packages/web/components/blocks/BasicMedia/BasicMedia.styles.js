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
  }

  .imageElement {
    display: flex;
  }
`;
