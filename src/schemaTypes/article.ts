import { defineField } from "sanity";

const article = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Give your blog post a nice title. Recommend 50 - 70 characters",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Add a slug to your post or generate it from the title",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "time_requires_to_read",
      title: "Time requires to read",
      type: "string",
      description: "Time requires to read the article",
    }),
    defineField({
      name: "tags",
      title: "Post Tags",
      type: "array",
      description: "Add relevant tags that match with your post",
      of: [{ type: "string" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Post Body",
      type: "blockContent",
      description: "Write your post content here",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "featured",
      title: "Feature Post",
      type: "boolean",
      description: "Add this post to the list of featured posts",
    }),
    defineField({
      name: "isPublished",
      title: "PUBLISH POST",
      type: "boolean",
      description: "Tick this if you will like to publish this post",
    }),
  ],
  preview: {
    select: {
      title: "title",
      isPublished: "isPublished",
      date: "date",
      media: "coverImage",
    },
    prepare(selection) {
      const { isPublished, date } = selection;
      return {
        ...selection,
        ...date,
        subtitle: isPublished ? `${new Date(date).toDateString()}` : "Draft",
      };
    },
  },
};

export default article;
