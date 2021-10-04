import React from "react";
import Image from "./Image";

// ---

export default {
  title: "Elements/Image",
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: {
    provider_metadata: {
      public_id: "nrg/Camping_Experience_dce4616f6f",
    },
    formats: {
      large: {
        width: 1000,
      },
    },
  },
};
