import React from "react";
import MarqueeText from "./MarqueeText";

// ---

export default {
  title: "Elements/MarqueeText",
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <MarqueeText {...args} />;

export const SimpleBanner = Template.bind({});
SimpleBanner.args = {
  markdown:
    "**We do more** than tell stories\n\nWe do more than tell **stories**.\n\nWe do more **than tell** stories",
};
