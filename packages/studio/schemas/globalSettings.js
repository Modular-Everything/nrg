import { seo } from "./fields";
import { allRefs } from "./fields/allRefs";

export default {
  name: "globalSettings",
  title: "Global Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden: true,
    },
    {
      name: "navigation",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          name: "link",
          title: "Link",
          type: "object",
          fields: [
            {
              name: "label",
              title: "Link Label",
              type: "string",
            },
            {
              name: "children",
              title: "Submenu",
              type: "array",
              of: [
                {
                  name: "item",
                  title: "Item",
                  type: "object",
                  fields: [
                    {
                      name: "label",
                      title: "Link Label",
                      type: "string",
                    },
                    {
                      name: "target",
                      title: "Link Target",
                      type: "reference",
                      to: allRefs,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    seo,
  ],
};
