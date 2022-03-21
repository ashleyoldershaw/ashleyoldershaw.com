export const birdle = {
  name: "birdle",
  title: "Birdle",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "birds",
      title: "Birds",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "image", title: "Image", type: "image" },
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
