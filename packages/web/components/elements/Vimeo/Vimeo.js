import getVideoId from "get-video-id";
import PropTypes from "prop-types";

import * as S from "./Vimeo.styles";

export function Vimeo({ url }) {
  return (
    <S.Vimeo className="vimeo">
      {url && (
        <iframe
          src={`https://player.vimeo.com/video/${
            getVideoId(url).id
          }?h=0f405f633e&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;background=1&amp;app_id=122963`}
          title="Vimeo"
          width="1920"
          height="1080"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      )}
    </S.Vimeo>
  );
}

Vimeo.propTypes = {
  url: PropTypes.string.isRequired,
};
