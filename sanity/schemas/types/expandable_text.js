export const expandable_text = {
  name: "expandable_text",
  title: "Expandable text",
  type: "document",
  fields: [
    { title: "Text", name: "text", type: "string" },
    {
      title: "Children",
      name: "children",
      type: "array",
      of: [{ type: "expandable_text" }],
    },
  ],
  preview: {
    select: {
      title: "text",
    },
  },
};
