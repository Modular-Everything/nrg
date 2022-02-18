import Link from "next/link";

import { Logo } from "../../icons/Logo";
import { Container } from "../Container";
import * as S from "./Header.styles";

export function Header() {
  return (
    <S.Header>
      <Container>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <S.Nav role="navigation">
          <ul className="nav__wrap--outer">
            <li className="nav__item--outer">
              <label>
                <span className="nav__item--title">We Are</span>
                <input type="radio" name="test" aria-label="Open Menu" />
                <ul className="nav__wrap--inner">
                  <li className="nav__item--inner">
                    <Link href="/">
                      <a>Values &amp; Beliefs</a>
                    </Link>
                  </li>
                  <li className="nav__item--inner">
                    <Link href="/">
                      <a>Team &amp; Culture</a>
                    </Link>
                  </li>
                </ul>
              </label>
            </li>

            <li className="divider" />

            <li className="nav__item--outer">
              <label>
                <span className="nav__item--title">What</span>
                <input type="radio" name="test" aria-label="Open Menu" />
                <ul className="nav__wrap--inner">
                  <li className="nav__item--inner">
                    <Link href="/">
                      <a>Values &amp; Beliefs</a>
                    </Link>
                  </li>
                  <li className="nav__item--inner">
                    <Link href="/">
                      <a>Team &amp; Culture</a>
                    </Link>
                  </li>
                </ul>
              </label>
            </li>

            <li className="divider" />

            <li className="nav__item--outer">
              <label>
                <span className="nav__item--title">We Do</span>
                <input type="radio" name="test" aria-label="Open Menu" />
                <ul className="nav__wrap--inner">
                  <li className="nav__item--inner">
                    <Link href="/">
                      <a>Values &amp; Beliefs</a>
                    </Link>
                  </li>
                  <li className="nav__item--inner">
                    <Link href="/">
                      <a>Team &amp; Culture</a>
                    </Link>
                  </li>
                </ul>
              </label>
            </li>
          </ul>
        </S.Nav>
      </Container>
    </S.Header>
  );
}
