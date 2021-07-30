import React from 'react';
import ImageBlock from '../components/Blocks/ImageBlock';

export default {
  title: 'Images/Image Block',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <ImageBlock {...args} />;

export const Clean = Template.bind({});
Clean.args = {
  image: {
    url: 'https://source.unsplash.com/collection/UMqumgVk9WM/1920x1080',
    alt: 'Alt tag',
  },
};

export const HasSmallIcon = Template.bind({});
HasSmallIcon.args = {
  image: {
    url: 'https://source.unsplash.com/collection/UMqumgVk9WM/1920x1080',
    alt: 'Alt tag',
  },
  hasIcon: true,
};

export const HasLargeIcon = Template.bind({});
HasLargeIcon.args = {
  image: {
    url: 'https://source.unsplash.com/collection/UMqumgVk9WM/1920x1080',
    alt: 'Alt tag',
  },
  hasIcon: true,
  enlargeIcon: true,
};

export const TitleAndCopy = Template.bind({});
TitleAndCopy.args = {
  image: {
    url: 'https://source.unsplash.com/collection/UMqumgVk9WM/1920x1080',
    alt: 'Alt tag',
  },
  title: 'Lorem Ipsum',
  copy: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  ],
};
