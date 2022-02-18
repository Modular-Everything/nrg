/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import BasicMedia from "./blocks/BasicMedia";
import BodyCopy from "./blocks/BodyCopy";
import Carousel from "./blocks/Carousel";
import Divider from "./blocks/Divider";
import ImageSlideGallery from "./blocks/ImageSlideGallery";
import ImageTiles from "./blocks/ImageTiles";
import LandscapeCards from "./blocks/LandscapeCards";
import LargeStatements from "./blocks/LargeStatements";
import List from "./blocks/List";
import LogoGrid from "./blocks/LogoGrid";
import ProjectNavigation from "./blocks/ProjectNavigation";
import Spacer from "./blocks/Spacer";
import homepage from "./pages/homepage";
import page from "./pages/page";

// Then import schema types from any plugins that might expose them

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: [
    ...schemaTypes,
    homepage,
    page,
    BasicMedia,
    BodyCopy,
    Carousel,
    Divider,
    ImageSlideGallery,
    ImageTiles,
    LandscapeCards,
    LargeStatements,
    List,
    LogoGrid,
    ProjectNavigation,
    Spacer,
  ],
});
