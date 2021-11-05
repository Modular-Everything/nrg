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
    backgroundColor: "red",
  },
};

export const Black = Template.bind({});
Black.args = {
  block: {
    backgroundColor: "black",
  },
};
