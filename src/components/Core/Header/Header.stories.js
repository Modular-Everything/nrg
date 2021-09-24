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

export const WithImageBehind = () => (
  <>
    <Header />
    <img
      src="https://source.unsplash.com/collection/1667713/1920x1080"
      alt=""
      style={{ width: "100%" }}
    />
  </>
);
