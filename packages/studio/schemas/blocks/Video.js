export default {
  name: "video",
  title: "Video",
  type: "object",
  fields: [
    {
      name: "vimeo",
      title: "Vimeo URL",
      type: "url",
      description: "A link to a Vimeo video",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Video",
      };
    },
  },
};
