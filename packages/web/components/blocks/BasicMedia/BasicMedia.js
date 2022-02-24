import PropTypes from "prop-types";

import { Image } from "../../elements/Image";
import { Vimeo } from "../../elements/Vimeo";
import * as S from "./BasicMedia.styles";

export function BasicMedia({ data }) {
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
          <div>statement</div>
          <div>read more</div>
        </div>
      )}

      <div className="background">{getMedia(data?.mediaType, data)}</div>
    </S.BasicMedia>
  );
}

BasicMedia.propTypes = {
  data: PropTypes.object,
};
