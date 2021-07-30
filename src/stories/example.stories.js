import React from 'react';
import BodyCopy from '../components/BodyCopy';

export default {
  title: 'Copy Blocks/Body Copy',
};

const Template = (args) => <BodyCopy {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  title: 'Sample Title',
  copy: ['testing one', 'testing two'],
};
