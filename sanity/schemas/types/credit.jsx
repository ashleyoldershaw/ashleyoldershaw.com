export const creditFields = [
  {
    name: "licence",
    type: "string",
    options: {
      list: [
        {
          title: "Copyrighted",
          value: "copyrighted",
          // description:
          //   "This image is copyrighted but the copyright holder has given their permission to use the image",
        },
        {
          title: "Public domain",
          value: "public_domain",
          // description:
          //   "This image is in the public domain and can be used for any purpose",
        },
      ],
    },
    validation: (Rule) => Rule.required(),
  },
  {
    name: "author",
    title: "Author",
    type: "string",
    description:
      "The author of the work, this is normally the name of the person who made the image",
    validation: (Rule) => Rule.required(),
  },
  {
    name: "title",
    title: "Title",
    type: "string",
    description: "The name of the work.",
  },
  {
    name: "year",
    title: "Year",
    type: "number",
    description: "The year the work was made.",
    validation: (Rule) => Rule.required(),
  },
  {
    name: "url",
    title: "URL",
    type: "url",
    description:
      "A link to the work or the author, necessary where possible, unless it's your own work.",
  },
];
