import React from "react";
import ScrollingGallery from "./ScrollingGallery";

// ---

export default {
  title: "Blocks/ScrollingGallery",
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <ScrollingGallery {...args} />;

export const StandardExample = Template.bind({});
StandardExample.args = {
  block: {
    layout_type: "standard",
    items: [
      {
        id: 1,
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
        },
        layout_type: "portrait",
        link: null,
        title: "",
      },
      {
        id: 2,
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
        },
        layout_type: "portrait",
        link: null,
        title: "",
      },
      {
        id: 3,
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
        },
        layout_type: "landscape",
        link: {
          slug: "#",
        },
        title: "We do more than tell stories",
      },
      {
        id: 4,
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
        },
        layout_type: "portrait",
        link: null,
        title: "",
      },
    ],
  },
};

export const TallExample = Template.bind({});
TallExample.args = {
  block: {
    layout_type: "tall",
    items: [
      {
        id: 1,
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
        },
        layout_type: "landscape",
        link: null,
        title: "",
      },
      {
        id: 2,
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
        },
        layout_type: "portrait",
        link: null,
        title: "",
      },
      {
        id: 3,
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
        },
        layout_type: "landscape",
        link: {
          slug: "#",
        },
        title: "We do more than tell stories",
      },
      {
        id: 4,
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1634233320/nrg/samantha_gades_f_I_Hoz_N_Wfcvs_unsplash_ea58004c52.jpg",
        },
        layout_type: "portrait",
        link: null,
        title: "",
      },
    ],
  },
};
