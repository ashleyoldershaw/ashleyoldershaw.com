import { kv } from "@vercel/kv";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const validationKey = request.query.message || "";

  if (!validationKey) {
    return response.status(400).send("No message value found in request!");
  }

  const record = await kv.get<string>(`check-in/${validationKey}`);

  if (!record) {
    return response
      .status(400)
      .send("Message not found, was this message already verified?");
  }

  const { message, email, name } = JSON.parse(record);

  const result = await fetch("https://api.sendgrid.com/v3/mail/send", {
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: process.env.FORWARDING_EMAIL_ADDRESS }],
          dynamic_template_data: { message, email, name },
        },
      ],
      from: { email: "ash@ashleyoldershaw.com" },
      template_id: process.env.MESSAGE_RECIEVED_TEMPLATE_ID,
    }),
  });

  const resp = await result.text();

  if (resp) return response.status(500).send("Internal Server Error");

  await kv.getdel(validationKey);

  return response.status(200).send("Thanks! Confirmed.");
}
