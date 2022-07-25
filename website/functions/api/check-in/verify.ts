export async function onRequestGet(context) {
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
    query,
  } = context;
  const { searchParams: body } = new URL(request.url);

  const validationKey = body.get("message") || "";

  if (!validationKey) {
    return new Response("Not found", { status: 404 });
  }

  const { message, email, name } = JSON.parse(
    await env["Email verification"].get(validationKey)
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
          to: [{ email: env.FORWARDING_EMAIL_ADDRESS }],
          dynamic_template_data: { message, email, name },
        },
      ],
      from: { email: "ash@ashleyoldershaw.com" },
      template_id: env.MESSAGE_RECIEVED_TEMPLATE_ID,
    }),
  });

  const resp = await result.text();

  if (resp) return new Response("Internal Server Error", { status: 500 });

  waitUntil(env["Email verification"].delete(validationKey));

  return new Response("Thanks! Confirmed.", { status: 200 });
}
