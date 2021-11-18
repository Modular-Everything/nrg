import React from "react";
import { FcPlus as Icon } from "react-icons/fc";

// ---

export default {
  name: "cardsGallery",
  title: "Cards Gallery",
  type: "object",
  fields: [
    {
      name: "item",
      title: "Item",
      type: "array",
      description:
        "A list of cards (this was designed originally for a list of staff members, but it's flexible and could be used for something else).",
      of: [{ type: "cardsGalleryItems" }],
    },
  ],
  preview: {
    select: {
      item: "item",
    },
    prepare: ({ item }) => {
      const data = item[0];

      return {
        title: data
          ? `${data.title} (+${item.length} others)`
          : "Empty Gallery",
        media: data?.image || <Icon />,
        subtitle: "Cards Gallery",
      };
    },
  },
};
