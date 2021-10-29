import React from "react";
import Statement from "./Statement";

// ---

export default {
  title: "Elements/Statement",
};

const Template = (args) => <Statement {...args} />;

export const Default = Template.bind({});
Default.args = {
  copy: "We Believe _in_ **Great Ideas.** But We Also Believe That They Are **Just _the_ Beginnning.** You See, Once The Hard Work Of Coming _up_ With A Great Idea Is Complete... This Is **Where The _Real_ Work Begins.**",
};

export const GoodExample = Template.bind({});
GoodExample.args = {
  copy: "Ut enim ad **minim veniam,** quis nostrud *dolore* ullamco citus laboris nisi ut aliquip ex **earatur *sint* consequat.**",
};

export const BadExample = Template.bind({});
BadExample.args = {
  copy: "Duis aute irure dolor in **reprehenderit in voluptate *velit esse* cillum dolore eu fugiat** nulla pariatur. Excepteur sint **occaecat cupidatat** non proident, sunt in *culpa qui officia deserunt* mollit anim id est laborum.",
};
