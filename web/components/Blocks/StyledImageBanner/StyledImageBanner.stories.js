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
      url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
    },
    styled_copy:
      "**We do more** than tell stories\n\nWe do more than tell **stories**.\n\nWe do more **than tell** stories",
  },
};

export const BannerWithDescription = Template.bind({});
BannerWithDescription.args = {
  block: {
    background_image: {
      url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
    },
    descriptive_copy: `We do more than tell stories.\n\nWe create experiences that people tell stories about.`,
    styled_copy:
      "**We do more** than tell stories\n\nWe do more than tell **stories**.\n\nWe do more **than tell** stories",
  },
};

export const BannerUsedAsHeader = Template.bind({});
BannerUsedAsHeader.args = {
  block: {
    background_image: {
      url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
    },
    descriptive_copy: `We do more than tell stories.\n\nWe create experiences that people tell stories about.`,
    styled_copy:
      "**We do more** than tell stories\n\nWe do more than tell **stories**.\n\nWe do more **than tell** stories",
    sits_below_menu: true,
    scroll_copy: "Find out more",
  },
};
