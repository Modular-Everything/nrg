import React from "react";
import MarqueeBanner from "./MarqueeBanner";

// ---

export default {
  title: "Blocks/MarqueeBanner",
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <MarqueeBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  block: {
    text: "We Believe _in_ **Great Ideas.** But We Also Believe That They Are **Just _the_ Beginnning.** You See, Once The Hard Work Of Coming _up_ With A Great Idea Is Complete... This Is **Where The _Real_ Work Begins.**",
  },
};
