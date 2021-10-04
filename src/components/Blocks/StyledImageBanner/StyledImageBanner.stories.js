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
      provider_metadata: {
        public_id: "nrg/NRG_Demo_de94991d94",
      },
      formats: {
        large: {
          width: 1000,
        },
      },
    },
    styled_copy:
      "**We do more** than tell stories. We do more than tell **stories.**",
  },
};

export const BannerWithDescription = Template.bind({});
BannerWithDescription.args = {
  block: {
    background_image: {
      provider_metadata: {
        public_id: "nrg/NRG_Demo_de94991d94",
      },
      formats: {
        large: {
          width: 1000,
        },
      },
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
      provider_metadata: {
        public_id: "nrg/NRG_Demo_de94991d94",
      },
      formats: {
        large: {
          width: 1000,
        },
      },
    },
    descriptive_copy: `We do more than tell stories.\n\nWe create experiences that people tell stories about.`,
    styled_copy:
      "**We do more** than tell stories. We do more than tell **stories.**",
    sits_below_menu: true,
    scroll_copy: "Find out more",
  },
};
