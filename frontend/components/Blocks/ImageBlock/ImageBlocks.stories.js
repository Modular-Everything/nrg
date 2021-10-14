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
  image: {
    provider_metadata: {
      public_id: "nrg/Camping_Experience_dce4616f6f",
    },
    formats: {
      large: {
        width: 1000,
      },
    },
  },
};

export const HasSmallIcon = Template.bind({});
HasSmallIcon.args = {
  image: {
    provider_metadata: {
      public_id: "nrg/Camping_Experience_dce4616f6f",
    },
    formats: {
      large: {
        width: 1000,
      },
    },
  },
  hasIcon: true,
};

export const HasLargeIcon = Template.bind({});
HasLargeIcon.args = {
  image: {
    provider_metadata: {
      public_id: "nrg/Camping_Experience_dce4616f6f",
    },
    formats: {
      large: {
        width: 1000,
      },
    },
  },
  hasIcon: true,
  enlargeIcon: true,
};

export const HasTitle = Template.bind({});
HasTitle.args = {
  image: {
    provider_metadata: {
      public_id: "nrg/Camping_Experience_dce4616f6f",
    },
    formats: {
      large: {
        width: 1000,
      },
    },
  },
  title: "Lorem Ipsum",
  copy: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  ],
};
