import NextImage from "next/image";

import { getImgUrl } from "../../../helpers/getImgUrl";
import * as S from "./Image.styles";

export function Image({ src, saturate, layout, ...rest }) {
  if (!src || !src.asset) {
    return null;
  }

  const image = getImgUrl(src);

  // eslint-disable-next-line no-unused-vars
  const [assetType, _id, dimensions, filetype] = src.asset._ref.split("-");
  const [width, height] = dimensions.split("x");

  return (
    <S.Image className="imageElement">
      {saturate && (
        <>
          <div className="apply-skrim" />
          <div className="apply-saturation" />
        </>
      )}
      <NextImage
        src={image.url()}
        placeholder="blur"
        blurDataURL={image.blur().url()}
        layout={layout}
        width={layout === "fill" ? null : width}
        height={layout === "fill" ? null : height}
        loading="eager"
        alt={src.alt || ""}
        {...rest}
      />
    </S.Image>
  );
}
