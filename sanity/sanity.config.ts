import { colorInput } from "@sanity/color-input";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas/schema";
import { deskStructure } from "./deskStructure";

export default defineConfig({
  projectId: "ophqtfel",
  dataset: "production",
  plugins: [deskTool({ structure: deskStructure }), colorInput()],
  env: {
    development: {
      plugins: ["@sanity/vision"],
    },
  },
  schema: {
    types: schemaTypes,
  },
});
