import Link from "next/link";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

import { Logo } from "../../icons/Logo";
import { Container } from "../Container";
import * as S from "./Header.styles";

function handleMenuOpen(e, blackBarRef, { menu }) {
  const { activeMenu, setActiveMenu } = menu;
  const label = e.target.parentNode.parentNode.parentNode;

  if (e.target.dataset.id === activeMenu) {
    setActiveMenu(null);
    e.target.checked = false;
    label.classList.remove("open");
  } else {
    const subMenuHeight =
      e.target.parentNode.querySelector(".nav__wrap--inner").clientHeight;
    blackBarRef.current.style.height = `calc(${subMenuHeight}px + (2.4rem) * 2)`;

    setActiveMenu(e.target.dataset.id);

    label.classList.add("open");
  }
}

export function Header({ data }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const blackBarRef = useRef(null);

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
                  <input
                    type="radio"
                    name="nav"
                    aria-label="Open Menu"
                    data-id={topLevel._key}
                    onClick={(e) =>
                      handleMenuOpen(e, blackBarRef, {
                        menu: { activeMenu, setActiveMenu },
                      })
                    }
                  />
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

      <S.BlackBar
        ref={blackBarRef}
        className={activeMenu ? "open" : "closed"}
      />
    </S.Header>
  );
}

Header.propTypes = {
  data: PropTypes.object.isRequired,
};
