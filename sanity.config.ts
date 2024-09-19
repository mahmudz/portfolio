import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/schemaTypes";
import { codeInput } from "@sanity/code-input";

export default defineConfig({
  name: "default",
  title: "Demo",
  basePath: "/studio",

  projectId: "3xska0hg",
  dataset: "production",

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
});
