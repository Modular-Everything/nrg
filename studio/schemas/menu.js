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
      description: "Items that sit under the 'We Are' part of the menu",
    },
    {
      name: "what",
      title: "'What' Menu",
      type: "array",
      of: [{ type: "menuItem" }],
      description: "Items that sit under the 'What' part of the menu",
    },
    {
      name: "weDo",
      title: "'We Do' Menu",
      type: "array",
      of: [{ type: "menuItem" }],
      description: "Items that sit under the 'We Do' part of the menu",
    },
  ],
};
