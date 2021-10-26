import styled from "styled-components";
import Container from "../../Core/Container";

// ---

export const LogoMatrix = styled(Container)`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 24rem), 1fr));
    gap: var(--gutter);

    li {
      height: 18rem;
      background-color: var(--black);
      border-radius: var(--rounded);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      object-fit: contain;
      margin: calc(var(--gutter) * 3);
      width: calc(100% - (var(--gutter) * 6));
      height: calc(100% - (var(--gutter) * 6));
    }
  }
`;
