import Link from "next/link";
import PropTypes from "prop-types";

import { Logo } from "../../icons/Logo";
import { Container } from "../Container";
import * as S from "./Header.styles";

export function Header({ data }) {
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
            {data?.navigation.map((topLevel) => (
              <li key={topLevel._key} className="nav__item--outer">
                <label>
                  <span className="nav__item--title">{topLevel.label}</span>
                  <input type="radio" name="nav" aria-label="Open Menu" />
                  <ul className="nav__wrap--inner">
                    {topLevel.children.map((children) => (
                      <li key={children._key} className="nav__item--inner">
                        <Link href={children.target.slug.current}>
                          <a>{children.label}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </label>
              </li>
            ))}
          </ul>
        </S.Nav>
      </Container>
    </S.Header>
  );
}

Header.propTypes = {
  data: PropTypes.object.isRequired,
};
