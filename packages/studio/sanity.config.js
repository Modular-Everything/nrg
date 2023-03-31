import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import deskStructure from "./deskStructure";

import { schemaTypes } from "./schemas/schema";

export default defineConfig({
  name: "default",
  title: "NRG",
  projectId: "vg8y9z13",
  dataset: "production-new",
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: "Deploys",
          sites: [
            {
              title: "NRG",
              apiId: "f06b5bae-3b08-4cb3-ab6c-3d2cca356d75",
              buildHookId: "63616df0d3ae38373bdd92f4",
              name: "nrg-v2",
              url: "https://nrg-v2.netlify.app/",
            },
          ],
        }),
      ],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
