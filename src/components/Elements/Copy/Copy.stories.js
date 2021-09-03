import React from "react";
import Copy from "./Copy";

// ---

export default {
  title: "Elements/Copy",
};

const Template = (args) => <Copy {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Lorem ipsum delorem decorum",
  copy: "Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **sed quia non numquam eius modi tempora incidunt** ut labore et dolore magnam aliquam [quaerat](#) voluptatem.",
  columns: 1,
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  title: "Lorem ipsum delorem decorum",
  copy: "Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **sed quia non numquam eius modi tempora incidunt** ut labore et dolore magnam aliquam [quaerat](#) voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
  columns: 2,
};
