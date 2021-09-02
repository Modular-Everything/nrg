import React from "react";
import StyledImageBanner from "./StyledImageBanner";

// ---

export default {
  title: "Core/StyledImageBanner",
};

const Template = (args) => <StyledImageBanner {...args} />;

export const SimpleBanner = Template.bind({});
SimpleBanner.args = {
  backgroundImage: "https://source.unsplash.com/collection/1667713/1920x1080",
  styledCopy:
    "**We do more** than tell stories. We do more than tell **stories.**",
};

export const BannerWithDescription = Template.bind({});
BannerWithDescription.args = {
  backgroundImage: "https://source.unsplash.com/collection/1667713/1920x1080",
  descriptiveCopy: `We do more than tell stories.\n\nWe create experiences that people tell stories about.`,
  styledCopy:
    "**We do more** than tell stories. We do more than tell **stories.**",
};

export const BannerUsedAsHeader = Template.bind({});
BannerUsedAsHeader.args = {
  backgroundImage: "https://source.unsplash.com/collection/1667713/1920x1080",
  descriptiveCopy: `We do more than tell stories.\n\nWe create experiences that people tell stories about.`,
  styledCopy:
    "**We do more** than tell stories. We do more than tell **stories.**",
  sitsBelowMenu: true,
};
