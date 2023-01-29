import { defineCliConfig } from "sanity/cli";
import { projectId } from "./sanity.config";

export default defineCliConfig({
  api: {
    projectId,
    dataset: "production",
  },
  server: {
    hostname: "localhost",
    port: 3333,
  },
});
