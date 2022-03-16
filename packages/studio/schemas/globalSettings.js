import { allRefs } from "./fields/allRefs";

export default {
  name: "globalSettings",
  title: "Global Settings",
  type: "document",
  fieldsets: [
    { name: "seo", title: "SEO" },
    { name: "headerNav", title: "Header Navigation" },
  ],
  fields: [
    {
      name: "navigation",
      title: "Navigation Items",
      type: "array",
      fieldset: "headerNav",
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
  ],
};
