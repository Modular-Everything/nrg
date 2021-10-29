// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Custom page types
import page from "./page";

// Custom block types
import bodyCopy from './blocks/bodyCopy';
import bolt from "./blocks/bolt";
import griddedList from "./blocks/griddedList";
import imageBlock from "./blocks/imageBlock";
import logoMatrix from "./blocks/logoMatrix";
import scrollingGallery from "./blocks/scrollingGallery";
import sectionMarker from "./blocks/sectionMarker";
import statement from "./blocks/statement";
import styledImageBanner from "./blocks/styledImageBanner";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Custom page types
    page,

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
  ]),
});
