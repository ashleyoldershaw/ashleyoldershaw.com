enum LicenceTypes {
  COPYRIGHTED = "copyrighted",
  PUBLIC_DOMAIN = "public_domain",
  CREATIVE_COMMONS = "creative_commons",
}

enum CcConditions {
  SHARE_ALIKE = "share_alike",
  NON_COMMERCIAL = "non_commercial",
  NO_DERIVATIVES = "no_derivatives",
}

const isCreativeCommons = (parent) =>
  parent.licence !== LicenceTypes.CREATIVE_COMMONS;

const ccFields = [
  { name: CcConditions.SHARE_ALIKE, title: "Share Alike", type: "boolean" },
  {
    name: CcConditions.NON_COMMERCIAL,
    title: "Non-Commercial",
    type: "boolean",
  },
  {
    name: CcConditions.NO_DERIVATIVES,
    title: "No derivatives",
    type: "boolean",
  },
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
    validation: (Rule) =>
      Rule.custom(
        ({
          [CcConditions.NO_DERIVATIVES]: nd = false,
          [CcConditions.SHARE_ALIKE]: sa = false,
        } = {}) =>
          !(nd && sa) ||
          `Creative Commons licence can't be no derivatives and share alike at the same time!`
      ),
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
