import React from "react";
import ImageBlock from "./ImageBlock";

// ---

export default {
  title: "Blocks/Image Block",
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <ImageBlock {...args} />;

export const Clean = Template.bind({});
Clean.args = {
  block: {
    background_image: {
      url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
    },
  },
};

export const HasSmallIcon = Template.bind({});
HasSmallIcon.args = {
  block: {
    background_image: {
      url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
    },
    icon: "small",
  },
};

export const HasLargeIcon = Template.bind({});
HasLargeIcon.args = {
  block: {
    background_image: {
      url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
    },
    icon: "large",
  },
};

export const HasTitle = Template.bind({});
HasTitle.args = {
  block: {
    background_image: {
      url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
    },
    title: "Lorem Ipsum",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
};
