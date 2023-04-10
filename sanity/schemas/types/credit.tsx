enum LicenceTypes {
  COPYRIGHTED = "copyrighted",
  PUBLIC_DOMAIN = "public_domain",
  CREATIVE_COMMONS = "creative_commons",
}

const isCreativeCommons = (parent) =>
  parent.licence !== LicenceTypes.CREATIVE_COMMONS;

const ccFields = [
  { name: "share_alike", title: "Share Alike", type: "boolean" },
  { name: "non_commercial", title: "Non-Commercial", type: "boolean" },
  { name: "no_derivatives", title: "No derivatives", type: "boolean" },
];

export const creditFields = [
  {
    name: "licence",
    type: "string",
    options: {
      list: [
        {
          title: "Copyrighted",
          value: LicenceTypes.COPYRIGHTED,
          description:
            "This image is copyrighted but the copyright holder has given their permission to use the image",
        },
        {
          title: "Public Domain",
          value: LicenceTypes.PUBLIC_DOMAIN,
          description:
            "This image is in the public domain and can be used for any purpose",
        },
        {
          title: "Creative Commons",
          value: LicenceTypes.CREATIVE_COMMONS,
          description: "This image is in the Creative Commons licence group",
        },
      ],
    },
    validation: (Rule) => Rule.required(),
  },
  {
    name: "ccLicenceType",
    title: "Creative Commons Licence Type",
    type: "object",
    fields: ccFields,
    options: {
      collapsible: false,
    },
    hidden: ({ parent }) => isCreativeCommons(parent),
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
    title: "Author URL",
    type: "url",
    description:
      "A link to the work or the author, necessary where possible, unless it's your own work.",
  },
  {
    name: "image_source_url",
    title: "Image URL",
    type: "url",
    description: "A link to the work.",
    hidden: ({ parent }) => isCreativeCommons(parent),
  },
];
