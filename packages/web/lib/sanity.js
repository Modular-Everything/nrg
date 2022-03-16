import { PortableText as PortableTextComponent } from "@portabletext/react";
import createImageUrlBuilder from "@sanity/image-url";
import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";
import React from "react";

import { config } from "./config";

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Set up Portable Text components
// Read more: https://github.com/portabletext/react-portabletext
const components = {};

// Set up Portable Text
export function PortableText(props) {
  return <PortableTextComponent components={components} {...props} />;
}

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
