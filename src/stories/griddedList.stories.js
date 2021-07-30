import React from 'react';
import GriddedList from '../components/Blocks/GriddedList';

export default {
  title: 'Grid Blocks/Gridded List',
};

const Template = (args) => <GriddedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Our Values',
};
Default.parameters = {
  backgrounds: { default: 'dark' },
};
