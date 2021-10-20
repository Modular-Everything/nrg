import { addDecorator } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

addDecorator((story) => (
  <>
    <GlobalStyles />
    <Typography />
    {story()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "dark",
        value: "#181818",
      },
      {
        name: "light",
        value: "#fff",
      },
    ],
  },
};
