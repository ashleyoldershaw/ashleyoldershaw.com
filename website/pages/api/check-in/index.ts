import { kv } from "@vercel/kv";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { email, message, name } = request.body;

  if (!email || !message || !name) {
    return response.status(404).send("Bad request");
  }

  let validationKey = uuidv4();

  await kv.set(
    `check-in/${validationKey}`,
    JSON.stringify({ email, message, name }),
    {
      ex: 3600 * 48,
      nx: true,
    }
  );

  const result = await fetch("https://api.sendgrid.com/v3/mail/send", {
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email }],
          dynamic_template_data: { validationKey, name: name.split(" ")[0] },
        },
      ],
      from: { email: "ash@ashleyoldershaw.com" },
      template_id: process.env.VERIFY_TEMPLATE_ID,
    }),
  });

  const resp = await result.text();

  if (resp) return response.status(500).send("Internal Server Error");

  return response.status(201).send("OK");
}
