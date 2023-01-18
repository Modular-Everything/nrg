import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  BsLinkedin as LiIcon,
  BsInstagram as InstaIcon,
  BsVimeo as VimeoIcon,
} from "react-icons/bs";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import { Bolt, FooterBadge } from "../../icons/BadgeBolt";
import { Container } from "../Container";
import * as S from "./Footer.styles";

export function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <S.Footer>
      <Container>
        <div className="contact-socials">
          <div className="contact">
            <h4>Connect with us</h4>
            <span>
              E. <a href="mailto:info@madewithnrg.com">info@madewithnrg.com</a>
            </span>
            <span>
              Tel. <a href="tel:310.255.7995">310.255.7995</a>
            </span>
          </div>

          <div className="socials">
            <ul>
              <li>
                <a
                  href="https://instagram.com/madewithnrg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstaIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/nrg-marketing-llc/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LiIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://vimeo.com/madewithnrg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <VimeoIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="newsletter">
          <h4>Sign up to our newsletter</h4>
          <MailchimpSubscribe
            url={`https://madewithNRG.us7.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`}
            render={({ subscribe, status, message }) => {
              const onSubmit = (data) =>
                subscribe({
                  EMAIL: data.email,
                  "group[84801][1]": "1",
                });

              return (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="newsletter-email">
                    <div className="input">
                      <input
                        type="email"
                        id="newsletter-email"
                        aria-label="Sign up to our newsletter"
                        {...register("email", { required: true })}
                      />
                      <button type="submit">Submit</button>
                      {errors.email && (
                        <span className="newsletter__errors">
                          This field is required
                        </span>
                      )}
                      {status && (
                        <span
                          className="newsletter__errors"
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{ __html: message }}
                        />
                      )}
                    </div>
                  </label>
                </form>
              );
            }}
          />
        </div>

        <div className="badge-copyright">
          <div className="badge">
            <Link href="/">
              <a>
                <span className="badgeWrapper">
                  <FooterBadge />
                </span>
                <span className="bolt">
                  <Bolt />
                </span>
              </a>
            </Link>

            <div className="copyright">
              <p>&copy; NRG {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </Container>
    </S.Footer>
  );
}
