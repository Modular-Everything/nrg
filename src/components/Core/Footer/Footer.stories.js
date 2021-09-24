import React from "react";
import Footer from "./Footer";

// ---

export default {
  title: "Core/Footer",
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Footer {...args} />;

export const OneColumn = Template.bind({});
OneColumn.args = {
  this: null,
};
