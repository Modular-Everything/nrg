export default {
  name: "cardsGalleryItems",
  title: "Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the card (for example, the name of a person).",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description:
        "The subtitle of the card (for example, the job position of a person).",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "An image associated with this card (always in portrait).",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
