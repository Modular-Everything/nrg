import React from "react";
import Image from "./Image";

// ---

export default {
  title: "Elements/Image",
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://source.unsplash.com/collection/190727/1080x1080",
  alt: "A sample image",
};
