import React from "react";
import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";
import * as S from "./MarqueeText.styles";

// ---

const MarqueeText = ({ text, className }) => {
  console.log(text);

  // const serializers = {
  //   types: {
  //     span: (props) => {
  //       console.log(props);
  //       return <p color="red">{props.node.children}</p>;
  //     },
  //   },
  // };

  return (
    <S.MarqueeWrap className={className}>
      {/* <BlockContent
        className="marquee"
        blocks={text}
        serializers={serializers}
      /> */}
      {text.map((block) => (
        <div>
          <BlockContent className="marquee" blocks={block} />
          <BlockContent className="marquee" blocks={block} />
        </div>
      ))}
    </S.MarqueeWrap>
  );
};

MarqueeText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

MarqueeText.defaultProps = {
  className: null,
};

export default MarqueeText;
