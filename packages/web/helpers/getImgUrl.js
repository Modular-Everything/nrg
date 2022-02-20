import imageUrlBuilder from "@sanity/image-url";

import { config } from "../lib/config";

const builder = imageUrlBuilder(config);

export function getImgUrl(source) {
  return builder.image(source);
}
