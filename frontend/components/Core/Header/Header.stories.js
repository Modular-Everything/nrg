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

export const Default = Template.bind({});
Default.args = {
  this: null,
};

export const WithImageBehind = (args) => (
  <>
    <Header />
    <img {...args} alt="" style={{ width: "100%" }} />
  </>
);
WithImageBehind.args = {
  src: "https://source.unsplash.com/collection/1667713/1920x1080",
};
