import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Head from "next/head";
import { gsap } from "gsap";
import { Squeeze as Hamburger } from "hamburger-react";

import * as S from "./Header.styles";
import useAppHeight from "../../../hooks/useAppHeight";
import Logo from "../../../images/Logo";

// ---

const Header = ({ menuItems }) => {
  useAppHeight();

  const [activeMenu, setActiveMenu] = useState(null);
  const [overlayOpen, setOverlayOpen] = useState(false);

  const overlayPath = useRef(null);
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);
  const menuTl = gsap.timeline();

  function handleMenuBlur() {
    setActiveMenu(null);

    menuTl
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
      .set(wrapperRef.current, {
        y: "-101%",
        onComplete: () => setOverlayOpen(false),
      });
  }

  function handleMenuFocus(e) {
    if (e?.target?.checked || e === "burger") {
      if (overlayOpen) return;

      menuTl
        .set(wrapperRef.current, { y: 0 })
        .set(overlayPath.current, {
          attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        })
        .to(overlayPath.current, {
          duration: 0.4,
          ease: "power4.in",
          attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
          onComplete: () => setOverlayOpen(true),
        })
        .to(overlayPath.current, {
          duration: 0.3,
          ease: "power2",
          attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
        });
    } else {
      handleMenuBlur();
    }
  }

  function handleBurgerToggle() {
    if (!overlayOpen) {
      handleMenuFocus("burger");
      setActiveMenu("weAre");
      headerRef.current.querySelector('input[name="menuItem"]').checked = true;
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

        setActiveMenu(item.id);

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

  const MenuItem = ({ title, link, index }) => (
    <li>
      <Link href={link === "homepage" ? "/" : link}>
        <a
          onClick={() => handleMenuBlur()}
          onKeyPress={() => handleMenuBlur()}
          role="link"
          tabIndex={index + 1}
        >
          <span>0{index + 1}</span>
          <div>{title}</div>
        </a>
      </Link>
    </li>
  );

  MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  };

  return (
    <>
      <Head>
        <style>
          {`
          body {
            overflow: ${overlayOpen ? "hidden" : "auto"};
          }
        `}
        </style>
      </Head>

      <S.Header
        ref={headerRef}
        style={{
          height: overlayOpen ? "var(--app-height)" : "unset",
          overflow: overlayOpen ? "auto" : "hidden",
        }}
      >
        <S.HeaderContainer
          style={{ overflow: overlayOpen ? "auto" : "hidden" }}
        >
          <div className="menuItems">
            <div className="logo-and-burger">
              <Link href="/">
                <a
                  className="logo"
                  onClick={() => handleMenuBlur()}
                  onKeyPress={() => handleMenuBlur()}
                  role="link"
                  tabIndex={0}
                >
                  <Logo />
                </a>
              </Link>

              <Hamburger id="weAre" onToggle={() => handleBurgerToggle()} />
            </div>

            <nav
              role="navigation"
              className={overlayOpen ? "menuOpen" : "menuClosed"}
            >
              <form>
                <ul>
                  <li>
                    <label htmlFor="weAre">
                      <input
                        type="radio"
                        id="weAre"
                        name="menuItem"
                        onClick={(e) => handleMenuFocus(e)}
                      />
                      <div className="menuItem">We Are</div>
                      <S.MenuContent
                        className={activeMenu === "weAre" ? "show" : "hide"}
                      >
                        <ol>
                          {menuItems.weAre.map((item, index) => (
                            <MenuItem
                              key={item._key}
                              title={item.title}
                              link={item.slug}
                              index={index}
                            />
                          ))}
                        </ol>
                      </S.MenuContent>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="what">
                      <input
                        type="radio"
                        id="what"
                        name="menuItem"
                        onClick={(e) => handleMenuFocus(e)}
                      />
                      <div className="menuItem">What</div>
                      <S.MenuContent
                        className={activeMenu === "what" ? "show" : "hide"}
                      >
                        <ol>
                          {menuItems.what.map((item, index) => (
                            <MenuItem
                              key={item._key}
                              title={item.title}
                              link={item.slug}
                              index={index}
                            />
                          ))}
                        </ol>
                      </S.MenuContent>
                    </label>
                  </li>
                  <li>
                    <label htmlFor="weDo">
                      <input
                        type="radio"
                        id="weDo"
                        name="menuItem"
                        onClick={(e) => handleMenuFocus(e)}
                      />
                      <div className="menuItem">We Do</div>
                      <S.MenuContent
                        className={activeMenu === "weDo" ? "show" : "hide"}
                      >
                        <ol>
                          {menuItems.weDo.map((item, index) => (
                            <MenuItem
                              key={item._key}
                              title={item.title}
                              link={item.slug}
                              index={index}
                            />
                          ))}
                        </ol>
                      </S.MenuContent>
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

Header.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  menuItems: PropTypes.object.isRequired,
};

export default Header;
