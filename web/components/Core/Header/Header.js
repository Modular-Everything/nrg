import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

import * as S from "./Header.styles";
import useAppHeight from "../../../hooks/useAppHeight";
import Logo from "../../../images/Logo";

// ---

const Header = () => {
  useAppHeight();

  const nav = ["01", "02", "03", "04", "05", "06", "07", "08"];
  const navAlt = ["01", "02", "03"];

  const [activeMenu, setActiveMenu] = useState(null);
  const [overlayOpen, setOverlayOpen] = useState(false);

  const menuRef = useRef(null);
  const overlayPath = useRef(null);
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);
  const menuTl = gsap.timeline();

  function handleMenuBlur() {
    setActiveMenu(null);
    setOverlayOpen(false);

    menuTl
      .to(menuRef.current, { duration: 0.3, ease: "linear", opacity: 0 })
      .set(overlayPath.current, {
        attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
      })
      .to(overlayPath.current, {
        duration: 0.3,
        ease: "power2.in",
        attr: { d: "M 0 0 V 50 Q 50 0 100 50 V 0 z" },
      })
      .to(overlayPath.current, {
        duration: 0.4,
        ease: "power4",
        attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
      })
      .set(wrapperRef.current, { y: "-101%" });
  }

  function handleMenuFocus(e, menu) {
    setActiveMenu(menu);

    if (e.target.checked) {
      if (overlayOpen) return;

      setOverlayOpen(true);
      menuTl
        .set(wrapperRef.current, { y: 0 })
        .set(overlayPath.current, {
          attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        })
        .to(
          overlayPath.current,
          {
            duration: 0.4,
            ease: "power4.in",
            attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
          },
          0
        )
        .to(overlayPath.current, {
          duration: 0.3,
          ease: "power2",
          attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
        })
        .to(menuRef.current, { duration: 0.3, ease: "linear", opacity: 1 });
    } else {
      handleMenuBlur();
    }
  }

  useEffect(() => {
    const allMenuItems = headerRef.current.querySelectorAll(
      'input[name="menuItem"]'
    );
    let radio;

    allMenuItems.forEach((item) => {
      item.addEventListener("click", () => {
        const menuItem = item;

        if (radio === menuItem) {
          menuItem.checked = false;
          radio = null;
        } else {
          menuItem.checked = true;
          radio = menuItem;
        }
      });
    });
  }, []);

  return (
    <>
      <S.Header
        ref={headerRef}
        style={{
          height: overlayOpen ? "var(--app-height)" : "unset",
          overflow: overlayOpen ? "auto" : "hidden",
        }}
      >
        <S.HeaderContainer>
          <div className="menuItems">
            <Link href="/">
              <a className="logo">
                <Logo />
              </a>
            </Link>

            <nav
              role="navigation"
              className={overlayOpen ? "menuOpen" : "menuClosed"}
            >
              <form>
                <ul>
                  <li>
                    <label htmlFor="we-are">
                      <input
                        type="radio"
                        id="we-are"
                        name="menuItem"
                        onClick={(e) => handleMenuFocus(e, "we-are")}
                      />
                      <span>We Are</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="what">
                      <input
                        type="radio"
                        id="what"
                        name="menuItem"
                        onClick={(e) => handleMenuFocus(e, "what")}
                      />
                      <span>What</span>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="we-do">
                      <input
                        type="radio"
                        id="we-do"
                        name="menuItem"
                        onClick={(e) => handleMenuFocus(e, "we-do")}
                      />
                      <span>We Do</span>
                    </label>
                  </li>
                </ul>
              </form>
            </nav>
          </div>
        </S.HeaderContainer>

        <S.Overlay
          className="overlay"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            ref={overlayPath}
            className="overlay__path"
            vectorEffect="non-scaling-stroke"
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          />
        </S.Overlay>
      </S.Header>
    </>
  );
};

export default Header;
