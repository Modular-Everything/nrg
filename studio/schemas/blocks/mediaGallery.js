import React from "react";
import { FcStackOfPhotos as Icon } from "react-icons/fc";

export default {
  name: "mediaGallery",
  title: "Media Gallery",
  type: "object",
  fields: [
    {
      name: "media",
      title: "Media",
      type: "array",
      description:
        "A gallery of images and/or video. Use the controls on each media item to set the size and orientation.",
      of: [
        {
          name: "item",
          title: "Media Item",
          type: "object",
          fields: [
            {
              name: "orientation",
              title: "Orientation",
              type: "string",
              options: {
                layout: "radio",
                list: [
                  { title: "Full-width Landscape", value: "full" },
                  { title: "Landscape", value: "landscape" },
                  { title: "Portrait", value: "portrait" },
                ],
              },
              initialValue: "landscape",
            },
            {
              name: "mediaType",
              title: "Media Media Type",
              type: "string",
              description:
                "You can use an image or a video, but you need to set which one you want to use here first.",
              options: {
                list: [
                  { title: "Image", value: "image" },
                  { title: "Video", value: "video" },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "mediaImage",
              title: "Image",
              type: "image",
              description: "An image for the media",
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
              hidden: ({ parent }) =>
                !parent?.mediaType || parent?.mediaType === "video",
            },
            {
              name: "mediaVideo",
              title: "Video",
              type: "file",
              description: "A video for the media",
              options: {
                accept: "video/*",
              },
              hidden: ({ parent }) =>
                !parent?.mediaType || parent?.mediaType === "image",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      media: "media.length",
    },
    prepare: ({ media }) => ({
      title: `${media || 0} Media(s)`,
      media: <Icon />,
      subtitle: "Media Gallery",
    }),
  },
};
