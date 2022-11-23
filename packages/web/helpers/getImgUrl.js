import imageUrlBuilder from "@sanity/image-url";

import { config } from "../lib/config";

const builder = imageUrlBuilder(config);

export function getImgUrl(source) {
  if (!source) {
    return;
  }
  return builder.image(source);
}
