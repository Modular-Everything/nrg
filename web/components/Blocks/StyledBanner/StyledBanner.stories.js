import React from "react";
import StyledBanner from "./StyledBanner";

// ---

export default {
  title: "Blocks/Styled Banner",
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <StyledBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  block: {
    backgroundColor: "black",
    styled_copy:
      "**We do more** than tell stories\n\nWe do more than tell **stories**.\n\nWe do more **than tell** stories",
  },
};
