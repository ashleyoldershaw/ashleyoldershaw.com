export const error_500 = {
  name: "error_500",
  title: "Internal server error",
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
