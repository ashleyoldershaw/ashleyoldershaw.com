import { v4 as uuidv4 } from "uuid";
export async function onRequestPost(context) {
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;
  const { email, message, name } = await request.json();

  if (!email || !message || !name) {
    return new Response("Bad request", { status: 404 });
  }

  let validationKey = uuidv4();

  await env["Email verification"].put(
    validationKey,
    JSON.stringify({ email, message, name }),
    {
      expirationTtl: 3600 * 48,
    }
  );

  const result = await fetch("https://api.sendgrid.com/v3/mail/send", {
    headers: {
      Authorization: `Bearer ${env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email }],
          dynamic_template_data: { validationKey, name },
        },
      ],
      from: { email: "ash@ashleyoldershaw.com" },
      template_id: env.VERIFY_TEMPLATE_ID,
    }),
  });

  const resp = await result.text();

  if (resp) return new Response("Internal Server Error", { status: 500 });

  return new Response("OK", { status: 201 });
}
