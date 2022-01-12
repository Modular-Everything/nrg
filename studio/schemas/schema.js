/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Custom page types
import page from "./page";
import siteSettings from "./siteSettings";

// Custom modules
import seo from "./seo";
import menu from "./menu";
import menuItem from "./menuItem";
import cardsGalleryItems from "./elements/cardsGalleryItems";
import prevNextLink from "./elements/prevNextLink";

// Custom block types
import bodyCopy from "./blocks/bodyCopy";
import bolt from "./blocks/bolt";
import griddedList from "./blocks/griddedList";
import imageBlock from "./blocks/imageBlock";
import logoMatrix from "./blocks/logoMatrix";
import scrollingGallery from "./blocks/scrollingGallery";
import sectionMarker from "./blocks/sectionMarker";
import statement from "./blocks/statement";
import styledImageBanner from "./blocks/styledImageBanner";
import styledBanner from "./blocks/styledBanner";
import cardsGallery from "./blocks/cardsGallery";
import prevNext from "./blocks/prevNext";
import projects from "./project";
import blog from "./blog";
import services from "./service";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Custom page types
    page,
    projects,
    blog,
    services,
    siteSettings,

    // Custom modules
    seo,
    menu,
    menuItem,
    cardsGalleryItems,
    prevNextLink,

    // Custom block types
    bodyCopy,
    bolt,
    griddedList,
    imageBlock,
    logoMatrix,
    scrollingGallery,
    sectionMarker,
    statement,
    styledImageBanner,
    styledBanner,
    cardsGallery,
    prevNext,
  ]),
});
