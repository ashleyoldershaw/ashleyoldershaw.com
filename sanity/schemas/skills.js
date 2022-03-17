export const skills = {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "info",
      title: "Information",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "url", title: "URL", type: "url" },
            { name: "thumbnail", title: "Thumbnail", type: "image" },
            { name: "alt", title: "Alt text", type: "string" },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "category",
    },
  },
};
