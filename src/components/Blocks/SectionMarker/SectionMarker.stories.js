import React from "react";
import SectionMarker from "./SectionMarker";

// ---

export default {
  title: "Blocks/Section Marker",
};

const Template = (args) => <SectionMarker {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Who we are",
  mainCopy:
    "We are a diverse band of creators, makers and builders.\n\nNo egos here. Just great people who do great work and want our clients to enjoy every step of the way.",
  link: {
    url: "/",
    label: "Team & Culture",
  },
  aside:
    "1. Community Engagement\n2. Event Production\n3. Mobile Marketing Tours\n4. Brand Installations\n5. Pop-up Stores",
};
