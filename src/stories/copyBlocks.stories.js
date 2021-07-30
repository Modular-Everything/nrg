import React from 'react';
import CopyBlock from '../components/Blocks/CopyBlock';

export default {
  title: 'Copy Blocks/Body Copy',
};

const Template = (args) => <CopyBlock {...args} />;

export const OneColumn = Template.bind({});
OneColumn.args = {
  copy: [
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  ],
  columns: 1,
};

export const TwoColumnns = Template.bind({});
TwoColumnns.args = {
  title: 'Copy Title Here',
  copy: [
    'Sed ut perspiciatis unde omnis iste natus error  voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo veritatis et quasi architecto beatae vitae dicta sun.',
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  ],
  columns: 2,
};
