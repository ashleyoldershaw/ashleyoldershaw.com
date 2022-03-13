export const error_404 = {
  name: "error_404",
  title: "Page not found",
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
    { name: "extra_info", title: "Extra information", type: "text" },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
