import { createElement } from "react";

import {
  BasicMedia,
  BodyCopy,
  Carousel,
  Divider,
  ImageSlideGallery,
  ImageTiles,
  Cards,
  LargeStatements,
  List,
  LogoGrid,
  ProjectNavigation,
  Video,
} from "../components/blocks";

export function getBlock(block) {
  const id = block._type;

  const blocks = {
    basicMedia: <BasicMedia />,
    bodyCopy: <BodyCopy />,
    carousel: <Carousel />,
    divider: <Divider />,
    imageSlideGallery: <ImageSlideGallery />,
    imageTiles: <ImageTiles />,
    cards: <Cards />,
    largeStatements: <LargeStatements />,
    list: <List />,
    logoGrid: <LogoGrid />,
    projectNavigation: <ProjectNavigation />,
    video: <Video />,
  };

  return (
    blocks[id] &&
    createElement(blocks[id].type, {
      data: block,
      key: block._key,
    })
  );
}
