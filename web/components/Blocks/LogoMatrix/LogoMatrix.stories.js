import React from "react";
import LogoMatrix from "./LogoMatrix";

// ---

export default {
  title: "Blocks/LogoMatrix",
};

const Template = (args) => <LogoMatrix {...args} />;

export const Default = Template.bind({});
Default.args = {
  block: {
    logos: [
      {
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1635268834/nrg/2k_f4361c78ca.svg",
        },
      },
      {
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1635268834/nrg/timberland_86c777a26b.svg",
        },
      },
      {
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1635268834/nrg/nike_0c1f97382e.svg",
        },
      },
      {
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1635268837/nrg/red_bull_357fb5e92c.svg",
        },
      },
      {
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1635268837/nrg/beats_d01327369b.svg",
        },
      },
      {
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1635268837/nrg/the_north_face_c1b1cf19bc.svg",
        },
      },
      {
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1635268837/nrg/herbalife_d050f1345c.svg",
        },
      },
      {
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1635268837/nrg/tommy_bahama_6cab188ef8.svg",
        },
      },
      {
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1635268840/nrg/globe_0668a3537d.svg",
        },
      },
      {
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1635268834/nrg/peli_8856caf2dd.svg",
        },
      },
      {
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1635268834/nrg/asics_7b8addd58e.svg",
        },
      },
      {
        image: {
          url: "https://res.cloudinary.com/modular-everything/image/upload/v1635268835/nrg/relentless_4666fc15e0.svg",
        },
      },
    ],
  },
};
