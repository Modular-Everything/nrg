import React from "react";
import BoltBlock from "./BoltBlock";

// ---

export default {
  title: "Blocks/Bolt Block",
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <BoltBlock {...args} />;

export const Red = Template.bind({});
Red.args = {
  block: {
    background_color: "red",
  },
};

export const Black = Template.bind({});
Black.args = {
  block: {
    background_color: "black",
  },
};
