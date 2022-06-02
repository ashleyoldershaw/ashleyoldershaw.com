export const blog_meta = {
  name: "blog_meta",
  title: "Blog meta info",
  type: "document",
  fields: [
    { name: "created_prefix", title: "Created prefix", type: "string" },
    { name: "updated_prefix", title: "Updated prefix", type: "string" },
    {
      name: "back_to_menu",
      title: "Back to menu",
      type: "object",
      fields: [
        { name: "text", title: "Button text", type: "string" },
        { name: "url", title: "Redirect URL", type: "string" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
