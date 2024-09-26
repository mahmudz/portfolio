import { PackageIcon } from "lucide-react";
import { defineField } from "sanity";

const project = {
  name: "project",
  title: "Project",
  description: "Project Schema",
  type: "document",
  icon: PackageIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the project",
    },
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (rule) => rule.max(60).required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Project Year",
      type: "document",
      options: { columns: 2 },
      fields: [
        {
          name: "start",
          title: "Start Year",
          type: "date",
          options: {
            dateFormat: "YYYY",
          },
        },
        {
          name: "end",
          title: "End Year",
          type: "date",
          options: {
            dateFormat: "YYYY",
          },
        },
      ],
    }),
    {
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Client Work", value: "client-work" },
          { title: "Company Work", value: "company-project" },
          { title: "Side Project", value: "side-project" },
          { title: "Open Source", value: "open-source" },
        ],
      },
    },
    {
      name: "logo",
      title: "Project Logo",
      type: "image",
    },
    {
      name: "projectUrl",
      title: "Project URL",
      type: "url",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this project",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      description: "Write a full description about this project",
      of: [{ type: "block" }],
    },
    defineField({
      name: "featured",
      title: "Feature Project",
      type: "boolean",
      description: "Add this project to the list of featured projects list",
    }),
  ],
};

export default project;
