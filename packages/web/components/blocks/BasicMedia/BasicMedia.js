import { PortableText } from "@portabletext/react";
import Link from "next/link";
import PropTypes from "prop-types";
import { useState, useCallback } from "react";

import { Image } from "../../elements/Image";
import { LinkToRef } from "../../elements/LinkToRef";
import { Vimeo } from "../../elements/Vimeo";
import { OutlinedBolt, FilledBolt } from "../../icons/BigBolts";
import * as S from "./BasicMedia.styles";

export function BasicMedia({ data }) {
  const [bannerNode, setBannerNode] = useState(null);

  const bannerRef = useCallback((node) => {
    if (node !== null) {
      setBannerNode(node);
    }
  }, []);

  function scrollBelowBanner() {
    window.scroll({
      top: bannerNode.offsetHeight,
      behavior: "smooth",
    });
  }

  function getMedia(type, data) {
    const layouts = {
      image: <Image src={data?.image} objectFit="cover" layout="fill" />,
      vimeo: <Vimeo url={data?.vimeo} />,
    };
    return layouts[type] || null;
  }

  return (
    <S.BasicMedia className="media" ref={bannerRef}>
      {data?.layoutType !== "basic" && (
        <div className={`overlay ${data?.layoutType}`}>
          {data?.layoutType === "bolt" && (
            <div className={`bolt--${data?.bolt}`}>
              {data?.bolt === "small" ? <FilledBolt /> : <OutlinedBolt />}
            </div>
          )}

          {data?.layoutType?.includes("headline") && (
            <div className="copy">
              <PortableText value={data?.copy?.content} />
              {data?.layoutType === "headlineAlt" && data?.linkToRef?.link && (
                <Link href={data?.linkToRef?.link}>
                  <a>
                    <LinkToRef
                      label={data?.linkToRef?.label || "Call to Action"}
                    />
                  </a>
                </Link>
              )}
            </div>
          )}

          {data?.layoutType?.includes("statement") && (
            <div className="marquee">
              <PortableText value={data?.statement?.statement} />
            </div>
          )}

          {data?.layoutType?.includes("read") && (
            <button
              type="button"
              className="readMore"
              onClick={() => scrollBelowBanner()}
            >
              <PortableText value={data?.basicCopy?.content} />
              <div className="label">
                <p>{data?.readMore || "Learn more"}</p>
                <span>&darr;</span>
              </div>
            </button>
          )}
        </div>
      )}

      <div
        className={`background ${data?.mediaType} ${
          data?.layoutType === "basic" ? "standalone" : ""
        }`}
      >
        {getMedia(data?.mediaType, data)}
      </div>
    </S.BasicMedia>
  );
}

BasicMedia.propTypes = {
  data: PropTypes.object,
};
