import { countChildren } from "./types/expandable_text";

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
          preview: {
            select: {
              title: "name",
              body: "body",
            },
            prepare({ title, body }) {
              const totalChildren = countChildren(body);
              const ret = { title };
              if (body) {
                if (body.length === totalChildren) {
                  ret.subtitle = `${
                    body.length === 1 ? `1 branch` : `${body.length} branches`
                  }`;
                } else {
                  ret.subtitle = `${
                    body.length === 1 ? `1 branch` : `${body.length} branches`
                  }, ${totalChildren} total`;
                }
              }
              return ret;
            },
          },
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
