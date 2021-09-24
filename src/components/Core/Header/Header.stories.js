import React from "react";
import Header from "./Header";

// ---

export default {
  title: "Core/Header",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "black",
      values: [
        {
          name: "black",
          value: "var(--black)",
        },
        {
          name: "red",
          value: "var(--red)",
        },
        {
          name: "white",
          value: "var(--white)",
        },
      ],
    },
  },
};

const Template = (args) => <Header {...args} />;

export const OneColumn = Template.bind({});
OneColumn.args = {
  this: null,
};
