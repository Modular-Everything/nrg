import { PortableText } from "@portabletext/react";
import PropTypes from "prop-types";

import { Image } from "../../elements/Image";
import { Vimeo } from "../../elements/Vimeo";
import { OutlinedBolt, FilledBolt } from "../../icons/BigBolts";
import * as S from "./BasicMedia.styles";

export function BasicMedia({ data }) {
  console.log(data);

  function getMedia(type, data) {
    const layouts = {
      image: <Image src={data?.image} objectFit="cover" />,
      vimeo: <Vimeo url={data?.vimeo} />,
    };
    return layouts[type] || layouts.body;
  }

  return (
    <S.BasicMedia className="media">
      {data?.layoutType !== "basic" && (
        <div className={`overlay ${data?.layoutType}`}>
          {data?.layoutType === "bolt" && (
            <div className={`bolt--${data?.bolt}`}>
              {data?.bolt === "small" ? <FilledBolt /> : <OutlinedBolt />}
            </div>
          )}

          {data?.layoutType === "text" && (
            <div className="copy">
              <PortableText value={data?.copy?.content} />
            </div>
          )}
        </div>
      )}

      <div className="background">{getMedia(data?.mediaType, data)}</div>
    </S.BasicMedia>
  );
}

BasicMedia.propTypes = {
  data: PropTypes.object,
};
