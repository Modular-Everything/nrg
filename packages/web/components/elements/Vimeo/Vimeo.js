import getVideoId from "get-video-id";
import PropTypes from "prop-types";

import * as S from "./Vimeo.styles";

export function Vimeo({ url, contained, paused }) {
  return (
    <S.Vimeo className={`vimeo ${contained ? "contained" : "full"}`}>
      {url && (
        <iframe
          src={`https://player.vimeo.com/video/${
            getVideoId(url).id
          }?h=0f405f633e${
            !paused && "&muted=1&autoplay=1&loop=1&background=1"
          }&app_id=122963`}
          title="Vimeo"
          width="1920"
          height="auto"
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
  contained: PropTypes.bool,
  paused: PropTypes.bool,
};

Vimeo.defaultProps = {
  contained: false,
  paused: false,
};
