import React from "react";
import SectionMarker from "./SectionMarker";

// ---

export default {
  title: "Blocks/Section Marker",
};

const Template = (args) => <SectionMarker {...args} />;

export const Default = Template.bind({});
Default.args = {
  block: {
    title: "Who we are",
    main_copy:
      "We are a diverse band of creators, makers and builders.\n\nNo egos here. Just great people who do great work and want our clients to enjoy every step of the way.",
    link: {
      url: "/",
      label: "Team & Culture",
    },
    aside:
      "1. Community Engagement\n2. Event Production\n3. Mobile Marketing Tours\n4. Brand Installations\n5. Pop-up Stores",
  },
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  block: {
    title: "Who we are",
    main_copy:
      "We are a diverse band of creators, makers and builders.\n\nNo egos here. Just great people who do great work and want our clients to enjoy every step of the way.",
    link: {
      url: "/",
      label: "Team & Culture",
    },
    aside:
      "1. Community Engagement\n2. Event Production\n3. Mobile Marketing Tours\n4. Brand Installations\n5. Pop-up Stores",
    backgroundColor: "black",
    text_color: "white",
  },
};

export const NoSidebar = Template.bind({});
NoSidebar.args = {
  block: {
    title: "What we do",
    main_copy:
      "We are an experiential marketing agency, based in Los Angeles with a national reach.\n\nWorking with some of the most recognizable brands we create meaningful experiences that push boundaries and challenge convention.",
    link: {
      url: "/",
      label: "All our Services",
    },
  },
};

export const CopyInSidebar = Template.bind({});
CopyInSidebar.args = {
  block: {
    title: "What we do",
    main_copy:
      "We are an experiential marketing agency, based in Los Angeles with a national reach.\n\nWorking with some of the most recognizable brands we create meaningful experiences that push boundaries and challenge convention.",
    aside:
      "We are a diverse band of creators, makers and builders. No egos here. Just great people who do great work and want our clients to enjoy every step of the way.",
    link: {
      url: "/",
      label: "All our Services",
    },
  },
};

export const BulletsInSidebar = Template.bind({});
BulletsInSidebar.args = {
  block: {
    title: "What we do",
    main_copy:
      "We are an experiential marketing agency, based in Los Angeles with a national reach.\n\nWorking with some of the most recognizable brands we create meaningful experiences that push boundaries and challenge convention.",
    aside:
      "* Community Engagement\n* Event Production\n* Mobile Marketing Tours\n* Brand Installations\n* Pop-up Stores",
    link: {
      url: "/",
      label: "All our Services",
    },
  },
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  block: {
    main_copy:
      "We are an experiential marketing agency, based in Los Angeles with a national reach.\n\nWorking with some of the most recognizable brands we create meaningful experiences that push boundaries and challenge convention.",
    aside:
      "* Community Engagement\n* Event Production\n* Mobile Marketing Tours\n* Brand Installations\n* Pop-up Stores",
    link: {
      url: "/",
      label: "All our Services",
    },
  },
};

export const ListInMainCopy = Template.bind({});
ListInMainCopy.args = {
  block: {
    main_copy:
      "We are an experiential marketing agency, based in Los Angeles with a national reach.\n\nWorking with some of the most recognizable brands we create meaningful experiences that push boundaries and challenge convention.\n* Community Engagement\n* Event Production\n* Mobile Marketing Tours\n* Brand Installations\n* Pop-up Stores",
    link: {
      url: "/",
      label: "All our Services",
    },
  },
};
