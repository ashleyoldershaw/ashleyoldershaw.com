import React from "react";
import { creditFields } from "./credit";

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
      type: "datetime",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          name: "text_body",
          type: "object",
          icon: () => "t",
          fields: [
            {
              name: "text_body",
              type: "text",
              title: "Text Body",
            },
          ],
          preview: {
            select: { title: "text_body" },
          },
        },
        {
          name: "emphasis_quote",
          type: "object",
          icon: () => "E",
          fields: [
            {
              name: "emphasis_quote",
              type: "text",
              title: "Emphasis quote",
            },
          ],
          preview: {
            select: { title: "emphasis_quote" },
            prepare({ title }) {
              return {
                title: `${title}`,
              };
            },
          },
        },
        {
          name: "section_title",
          type: "object",
          icon: () => "S",
          fields: [
            {
              name: "section_title",
              type: "string",
              title: "Section title",
            },
          ],
          preview: {
            select: { title: "section_title" },
            prepare({ title }) {
              return {
                title: `${title}`,
              };
            },
          },
        },
        {
          name: "subsection_title",
          type: "object",
          icon: () => "Ss",
          fields: [
            {
              name: "subsection_title",
              type: "string",
              title: "Subsection title",
            },
          ],
          preview: {
            select: { title: "subsection_title" },
            prepare({ title }) {
              return {
                title: `${title}`,
              };
            },
          },
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
              name: "dark_image",
              type: "image",
              title: "Dark mode image (optional)",
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
            {
              name: "credit",
              type: "object",
              fields: creditFields,
              validation: (Rule) => Rule.required(),
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
        {
          name: "bullets",
          type: "object",
          icon: () => "li",
          fields: [
            { name: "title", type: "string", title: "Bullet title" },
            {
              name: "numbered",
              type: "boolean",
              title: "Numbered?",
            },
            {
              name: "points",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "text",
                      type: "string",
                      title: "Bullet text",
                    },
                  ],
                },
              ],
            },
          ],
          initialValue: { numbered: false },
          preview: {
            select: { title: "title", numbered: "numbered", points: "points" },
            prepare({ title, numbered, points = [] }) {
              return {
                title: `${numbered ? "List" : "Bullets"}: ${title}`,
                subtitle: `${
                  points.length !== 1 ? `${points.length} points` : "1 point"
                }`,
              };
            },
          },
        },
        {
          name: "button",
          type: "object",
          icon: () => "B",
          fields: [
            { name: "text", type: "string", title: "Button text" },
            {
              name: "link",
              type: "string",
              title: "Link",
            },
          ],
          preview: {
            select: { text: "text", link: "link" },
            prepare({ text, link }) {
              return {
                title: `${text}`,
                subtitle: `${link}`,
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
      publish_date: "publish_date",
    },
    prepare({ title, publish_date }) {
      return {
        title,
        subtitle: publish_date
          ? new Date(publish_date).toLocaleDateString()
          : "",
        media: (
          <span style={{ fontSize: "2em" }}>{publish_date ? "🔊" : "🚧"}</span>
        ),
      };
    },
  },
};
