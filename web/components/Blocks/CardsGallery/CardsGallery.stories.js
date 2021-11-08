import React from "react";
import CardsGallery from "./CardsGallery";

// ---

export default {
  title: "Blocks/Cards Gallery",
};

const Template = (args) => <CardsGallery {...args} />;

export const Default = Template.bind({});
Default.args = {
  block: {
    item: [
      {
        _key: "9c2cca211b59",
        image: {
          asset: {
            _ref: "image-c55e666d052fecba94fe28445b5efde25a83fac7-495x702-png",
            _type: "reference",
          },
        },
        subtitle: "Creative Director",
        title: "John Smith",
      },
      {
        _key: "0af350458f2f",
        image: {
          asset: {
            _ref: "image-6a3fd7e6058544253a0f25e4f1103a41674913a7-495x702-png",
            _type: "reference",
          },
        },
        subtitle: "Marketing Director",
        title: "Aaliyah Jones",
      },
      {
        _key: "4640459397a2",
        image: {
          asset: {
            _ref: "image-ddd96a88cea4d70855222f100da072e661bc6b30-495x702-png",
            _type: "reference",
          },
        },
        subtitle: "Environment Designer",
        title: "Ølof Erickson",
      },
      {
        _key: "52294ac64731",
        image: {
          asset: {
            _ref: "image-ef8804280eaeed8fff09752e80eb6a0019208fd0-495x702-png",
            _type: "reference",
          },
        },
        subtitle: "Videographer",
        title: "Thomas Brown",
      },
      {
        _key: "4772690ac868",
        image: {
          asset: {
            _ref: "image-d5a9b1e7ce6d4d7a1bceb7a495bbca1fd24449c0-494x702-png",
            _type: "reference",
          },
        },
        subtitle: "Tech Lead",
        title: "Amie Lord",
      },
    ],
  },
};
