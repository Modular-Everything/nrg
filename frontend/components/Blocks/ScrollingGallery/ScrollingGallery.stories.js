import React from "react";
import ScrollingGallery from "./ScrollingGallery";

// ---

export default {
  title: "Blocks/ScrollingGallery",
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <ScrollingGallery {...args} />;

export const StandardExample = Template.bind({});
StandardExample.args = {
  images: [
    {
      source: "https://source.unsplash.com/W3SEyZODn8U/1280x720",
      caption: "Community Engagement",
    },
    {
      source: "https://source.unsplash.com/M_TOzf3lUcA/1280x720",
      caption: "Event Production",
    },
    {
      source: "https://source.unsplash.com/TuZHdlpJgm4/1280x720",
      caption: "Brand Installations",
    },
    {
      source: "https://source.unsplash.com/3V8xo5Gbusk/1280x720",
      caption: "Research",
    },
  ],
};

export const MixedRatios = Template.bind({});
MixedRatios.args = {
  images: [
    {
      source: "https://source.unsplash.com/W3SEyZODn8U/1280x720",
      caption: "Community Engagement",
    },
    {
      source: "https://source.unsplash.com/M_TOzf3lUcA/1280x720",
      caption: "Event Production",
    },
    {
      source: "https://source.unsplash.com/TuZHdlpJgm4/1280x720",
      caption: "Brand Installations",
    },
    {
      source: "https://source.unsplash.com/3V8xo5Gbusk/1280x720",
      caption: "Research",
    },
  ],
};
