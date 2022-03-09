export const home_page = {
  name: "home_page",
  title: "Home page",
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
    { name: "about_me", title: "About me", type: "text" },
    {
      name: "what_i_do",
      title: "What I do",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "text_body", title: "Text body", type: "text" },
            { name: "thumbnail", title: "Thumbnail", type: "image" },
          ],
        },
      ],
    },
    {
      name: "what_im_good_at",
      title: "What I'm good at",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "url", title: "URL", type: "url" },
            { name: "thumbnail", title: "Thumbnail", type: "image" },
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
