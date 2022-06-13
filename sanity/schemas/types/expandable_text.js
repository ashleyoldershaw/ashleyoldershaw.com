export const countChildren = (children) => {
  const getChildrenCount = (item) =>
    item.children
      ? item.children.length +
        item.children
          .map((child) => getChildrenCount(child))
          .reduce((total, count) => total + count)
      : 0;
  return getChildrenCount({ children });
};

export const expandable_text = {
  name: "expandable_text",
  title: "Expandable text",
  type: "document",
  fields: [
    { title: "Text", name: "text", type: "string" },
    {
      title: "Branches",
      name: "children",
      type: "array",
      of: [{ type: "expandable_text" }],
    },
  ],
  preview: {
    select: { text: "text", children: "children" },
    prepare({ text, children }) {
      const totalChildren = countChildren(children);
      const ret = { title: text };
      if (children) {
        if (children.length === totalChildren) {
          ret.subtitle = `${
            children.length === 1 ? `1 branch` : `${children.length} branches`
          }`;
        } else {
          ret.subtitle = `${
            children.length === 1 ? `1 branch` : `${children.length} branches`
          }, ${totalChildren} total`;
        }
      }
      return ret;
    },
  },
};
