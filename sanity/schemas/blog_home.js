export const blog_home = {
  name: "blog_home",
  title: "Blog home page",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "subtitle", title: "Subtitle", type: "string" },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
