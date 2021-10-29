import React from "react";
import Noise from "./Noise";

// ---

export default {
  title: "Elements/Noise",
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Noise {...args} />;

export const Default = Template.bind({});
Default.args = {};
