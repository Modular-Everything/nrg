import React from "react";
import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";
import * as S from "./MarqueeText.styles";

// ---

const MarqueeText = ({ text, className, speedMod }) => (
  <S.MarqueeWrap className={className} speedMod={speedMod}>
    {text &&
      text.map((block) => (
        <div>
          <BlockContent className="marquee" blocks={block} />
          <BlockContent className="marquee" blocks={block} />
        </div>
      ))}
  </S.MarqueeWrap>
);

MarqueeText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  speedMod: PropTypes.number,
};

MarqueeText.defaultProps = {
  className: null,
  speedMod: null,
};

export default MarqueeText;
