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
    { name: "placeholder", title: "Text input placeholder", type: "string" },
    { name: "button_text", title: "Button text", type: "string" },
    { name: "win_message", title: "Win message", type: "text" },
    { name: "charity_prelude", title: "Charity prelude", type: "string" },
    { name: "share_button", title: "Share button message", type: "string" },
    { name: "lose_prelude", title: "Lose prelude", type: "text" },
    { name: "helper_message", title: "Helper message", type: "text" },
    { name: "bad_guess_message", title: "Bad guess message", type: "text" },
    {
      name: "charities",
      title: "Charities",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "url",
              title: "Fundraiser URL",
              type: "string",
            },
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
