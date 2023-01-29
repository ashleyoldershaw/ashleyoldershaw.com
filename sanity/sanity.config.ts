import { colorInput } from "@sanity/color-input";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas/schema";
import { deskStructure } from "./deskStructure";
export const projectId = "ophqtfel";

export default defineConfig({
  projectId,
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
