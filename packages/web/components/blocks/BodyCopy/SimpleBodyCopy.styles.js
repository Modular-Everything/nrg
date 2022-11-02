import styled from "styled-components";

export const SimpleBodyCopy = styled.div`
  a {
    text-decoration: underline;
  }

  .simpleBody__bolt {
    padding: 0 0 1.6rem 0;

    svg path {
      fill: ${({ theme }) => theme.bolt};
    }
  }
`;

export const Wrapper = styled.div.attrs((props) => ({
  // Simply selects the text position
  textAlign: props.textAlign === "right" ? "right" : "left",

  // Create an array of 'positions' then using the styles prop
  // choose  which 'position' to select (position="center")
  positions: { left: "0 auto 0 0", center: "0 auto", right: "0 0 0 auto" },
}))`
  margin: ${(props) => props.positions[props.position]};
  text-align: ${(props) => props.textAlign};

  @media (min-width: 640px) {
    columns: ${({ columns }) => columns};
    column-gap: 2.4rem;
  }
`;
