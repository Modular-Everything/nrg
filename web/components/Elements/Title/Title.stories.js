import React from "react";
import Title from "./Title";

// ---

export default {
  title: "Elements/Title",
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Community Engagement",
};
