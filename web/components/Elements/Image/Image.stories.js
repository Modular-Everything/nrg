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
    url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
  },
};
