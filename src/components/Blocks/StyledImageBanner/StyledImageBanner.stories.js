import React from "react";
import StyledImageBanner from "./StyledImageBanner";

// ---

export default {
  title: "Blocks/StyledImageBanner",
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <StyledImageBanner {...args} />;

export const SimpleBanner = Template.bind({});
SimpleBanner.args = {
  block: {
    background_image: {
      url: "https://source.unsplash.com/collection/1667713/1920x1080",
    },
    styled_copy:
      "**We do more** than tell stories. We do more than tell **stories.**",
  },
};

export const BannerWithDescription = Template.bind({});
BannerWithDescription.args = {
  block: {
    background_image: {
      url: "https://source.unsplash.com/collection/1667713/1920x1080",
    },
    descriptive_copy: `We do more than tell stories.\n\nWe create experiences that people tell stories about.`,
    styled_copy:
      "**We do more** than tell stories. We do more than tell **stories.**",
  },
};

export const BannerUsedAsHeader = Template.bind({});
BannerUsedAsHeader.args = {
  block: {
    background_image: {
      url: "https://source.unsplash.com/collection/1667713/1920x1080",
    },
    descriptive_copy: `We do more than tell stories.\n\nWe create experiences that people tell stories about.`,
    styled_copy:
      "**We do more** than tell stories. We do more than tell **stories.**",
    sits_below_menu: true,
    scroll_copy: "Find out more",
  },
};
