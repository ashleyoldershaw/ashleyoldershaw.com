export const colour_theme = {
  name: "colour_theme",
  title: "Colour theme",
  type: "document",
  fields: [
    {
      title: "Background",
      name: "background",
      type: "color",
      description:
        "The main background colour, used for the back of the page, not used for content",
      options: {
        disableAlpha: true,
      },
    },
    {
      title: "Secondary background",
      name: "secondary_background",
      type: "color",
      description:
        "The second background colour, used as a backdrop for content",
      options: {
        disableAlpha: true,
      },
    },
    {
      title: "Text",
      name: "text",
      type: "color",
      description: "The main text colour, used for body text",
      options: {
        disableAlpha: true,
      },
    },
    {
      title: "Accent",
      name: "accent",
      type: "color",
      description: "Colour used for titles, and to emphasise certain areas",
      options: {
        disableAlpha: true,
      },
    },
    {
      title: "Contrast",
      name: "contrast",
      type: "color",
      description: "Colour used for borders, mainly used to frame things",
      options: {
        disableAlpha: true,
      },
    },
  ],
};
