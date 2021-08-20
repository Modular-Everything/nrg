import React from "react";
import Statement from "./Statement";

// ---

export default {
  title: "Blocks/Statement",
};

const Template = (args) => <Statement {...args} />;

export const Default = Template.bind({});
Default.args = {
  copy: "We Believe _in_ **Great Ideas.** But We Also Believe That They Are **Just _the_ Beginnning.** You See, Once The Hard Work Of Coming _up_ With A Great Idea Is Complete... This Is **Where The _Real_ Work Begins.**",
};
