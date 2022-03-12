export const career_page = {
  name: "career_page",
  title: "Career page",
  type: "document",
  fields: [
    { name: "intro", title: "Introduction", type: "text" },
    { name: "title", title: "Title", type: "string" },
    {
      title: "Career info",
      name: "career_info",
      type: "array",
      of: [
        {
          type: "object",
          name: "workplace",
          title: "Workplace",
          fields: [
            { name: "name", title: "Name", type: "text" },
            {
              name: "body",
              title: "Body",
              type: "array",
              of: [{ type: "expandable_text" }],
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
