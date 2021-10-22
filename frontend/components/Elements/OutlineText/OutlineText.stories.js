import React from "react";
import OutlineText from "./OutlineText";

// ---

export default {
  title: "Elements/OutlineText",
};

const Template = (args) => <OutlineText {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Creators, Makers Builders",
};
