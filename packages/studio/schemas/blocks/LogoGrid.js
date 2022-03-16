import { bodyCopy } from "../fields";

export default {
  name: "logoGrid",
  title: "Logo Grid",
  type: "object",
  fields: [
    bodyCopy,
    {
      name: "logos",
      title: "Logos",
      type: "array",
      of: [
        {
          name: "logo",
          title: "Logo",
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
