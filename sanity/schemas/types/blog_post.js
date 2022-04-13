export const blog = {
  name: "blog",
  title: "Blog posts",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    { title: "Subtitle", name: "subtitle", type: "text" },
    {
      title: "URL slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "text_body",
              type: "text",
              title: "Text Body",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
