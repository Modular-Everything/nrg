import React from "react";
import Link from "next/link";

import * as S from "./Footer.styles";
import Badge from "../../../images/icons/Badge";
import Noise from "../../Elements/Noise";

// ---

const Footer = () => (
  <S.Footer>
    <S.Container>
      <div className="contact-socials">
        <div className="contact">
          <a href="/">mail@something.com</a>
          <a href="/">mail@something.com</a>
        </div>

        <div className="socials">
          <ul>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="newsletter">
        <form>
          <label htmlFor="newsletter-email">
            <p>Sign up to our newsletter</p>
            <div className="input">
              <input type="email" id="newsletter-email" />
              <button type="submit">Submit</button>
            </div>
          </label>
        </form>
      </div>

      <div className="badge-copyright">
        <div className="badge">
          <Link href="/">
            <a>
              <Badge />
            </a>
          </Link>

          <div className="copyright">
            <p>&copy; NRG {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </S.Container>

    <Noise />
  </S.Footer>
);

export default Footer;
