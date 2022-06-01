export const blog = {
  name: "blog",
  title: "Blog posts",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    { title: "Subtitle", name: "subtitle", type: "string" },
    {
      title: "URL slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      title: "Publish date",
      name: "publish_date",
      type: "date",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          name: "text_body",
          type: "object",
          fields: [
            {
              name: "text_body",
              type: "text",
              title: "Text Body",
            },
          ],
        },
        {
          name: "emphasis_quote",
          type: "object",
          fields: [
            {
              name: "emphasis_quote",
              type: "text",
              title: "Emphasis quote",
            },
          ],
        },
        {
          name: "section_title",
          type: "object",
          fields: [
            {
              name: "section_title",
              type: "string",
              title: "Section title",
            },
          ],
        },
        {
          name: "image_component",
          type: "object",
          fields: [
            {
              name: "image",
              type: "image",
              title: "Image",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
            {
              name: "alt_text",
              type: "string",
              title: "Alt text",
            },
          ],
          preview: {
            select: { title: "alt_text", thumbnail: "image" },
            prepare({ title, thumbnail }) {
              return {
                title: `Image: ${title}`,
                media: thumbnail,
              };
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
