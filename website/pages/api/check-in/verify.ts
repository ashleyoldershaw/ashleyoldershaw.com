import { kv } from "@vercel/kv";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { searchParams: body } = new URL(request.url);

  const validationKey = body.get("message") || "";

  if (!validationKey) {
    return response.status(400).send("No message value found in request!");
  }

  const record = await kv.get<string>(`check-in/${validationKey}`);

  if (!record) {
    return new Response(
      "Message not found, was this message already verified?",
      { status: 400 }
    );
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

  if (resp) return new Response("Internal Server Error", { status: 500 });

  await kv.getdel(validationKey);

  return new Response("Thanks! Confirmed.", { status: 200 });
}
