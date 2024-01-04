import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schema from "./schemas/schema";
import deskStructure from "./deskStructure";

export default defineConfig({
  title: "NRG",
  projectId: "vg8y9z13",
  dataset: "production-new",
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
  ],
  schema: {
    types: schema,
  },
});
