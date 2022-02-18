/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import basicMedia from "./blocks/BasicMedia";
import bodyCopy from "./blocks/BodyCopy";
import carousel from "./blocks/Carousel";
import divider from "./blocks/Divider";
import imageSlideGallery from "./blocks/ImageSlideGallery";
import imageTiles from "./blocks/ImageTiles";
import landscapeCards from "./blocks/LandscapeCards";
import largeStatements from "./blocks/LargeStatements";
import list from "./blocks/List";
import logoGrid from "./blocks/LogoGrid";
import projectNavigation from "./blocks/ProjectNavigation";
import spacer from "./blocks/Spacer";
import blogPost from "./pages/blogPost";
import homepage from "./pages/homepage";
import page from "./pages/page";
import project from "./pages/project";
import service from "./pages/service";

// Then import schema types from any plugins that might expose them

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: [
    ...schemaTypes,
    basicMedia,
    blogPost,
    bodyCopy,
    carousel,
    divider,
    homepage,
    imageSlideGallery,
    imageTiles,
    landscapeCards,
    largeStatements,
    list,
    logoGrid,
    page,
    project,
    projectNavigation,
    service,
    spacer,
  ],
});
