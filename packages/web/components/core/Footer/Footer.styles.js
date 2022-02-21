import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const Footer = styled.footer`
  padding: 3.2rem 0;
  background-color: var(--nrg-black);
  color: var(--white);
  font-size: 1.6rem;
  line-height: 2rem;
  position: relative;
  width: 100%;

  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: calc(1.6rem * 4);
    z-index: 100;

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: calc(1.6rem * 2);
    }
  }

  h4 {
    color: var(--nrg-red);
    font-family: var(--simplon);
    font-weight: 500;
    margin: 0 0 1.6rem;
  }

  a {
    text-decoration: none;
    color: var(--white);
    opacity: 1;
    transition: 250ms ease opacity;

    &:hover {
      opacity: 0.7;
    }
  }

  .contact-socials {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;

    @media (min-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .contact {
      display: flex;
      flex-direction: column;
      line-height: 1.5;
    }

    .socials ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      svg {
        width: 2.4rem;
        height: 2.4rem;
      }

      li {
        margin-right: 1.6rem;
      }

      li:last-of-type {
        margin-right: 0;
      }
    }
  }

  .newsletter {
    p {
      margin-bottom: 1.6rem;
      line-height: 1.5;

      @media (min-width: 768px) {
        margin-bottom: calc(1.6rem * 2);
      }
    }

    .input {
      display: grid;
      grid-template-columns: 1fr auto;

      input,
      button {
        border: 1px solid var(--white);
        background: transparent;
        padding: 1.2rem 0.8rem 1rem;
        color: var(--white);
        font-size: 1.8rem;
        display: flex;
        align-items: center;
        outline: none;

        @media (min-width: 768px) {
          font-size: 1.2rem;
        }
      }

      button {
        border-left: 0;
        padding-left: 1.6rem;
        padding-right: 1.6rem;
        justify-content: center;
        cursor: pointer;
        transition: 250ms ease background-color, 250ms ease color;
        font-size: 1.4rem;
        white-space: nowrap;

        &:hover {
          background-color: var(--white);
          color: var(--black);
        }
      }
    }
  }

  .badge-copyright {
    display: flex;
    align-items: flex-end;

    @media (min-width: 768px) {
      flex-direction: column;
    }

    .badge {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;

      @media (min-width: 768px) {
        display: unset;
        justify-content: unset;
        align-items: unset;
        width: unset;
      }

      a {
        position: relative;
      }

      .badgeWrapper svg {
        animation: ${rotate} 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
      }

      .bolt {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .copyright {
      margin-top: calc(1.6rem * 2);
      text-align: center;
      font-size: 1.4rem;
      line-height: 1.5;

      @media (min-width: 768px) {
        font-size: 1.2rem;
      }
    }
  }
`;
