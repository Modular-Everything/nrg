import React from "react";
import BoltBlock from "./BoltBlock";

// ---

export default {
  title: "Blocks/Image Block",
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <BoltBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  block: {},
};
