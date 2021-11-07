export default {
  name: "menu",
  title: "Menu Settings",
  type: "object",
  fields: [
    {
      name: "weAre",
      title: "'We Are' Menu",
      type: "array",
      of: [{ type: "menuItem" }],
    },
    {
      name: "what",
      title: "'What' Menu",
      type: "array",
      of: [{ type: "menuItem" }],
    },
    {
      name: "weDo",
      title: "'We Do' Menu",
      type: "array",
      of: [{ type: "menuItem" }],
    },
  ],
};
