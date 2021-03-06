
// console.log(process.env)

// Start a fast HTTP server from a function
const server = Bun.serve({
  async fetch(req: Request) {

    const url = new URL(req.url);
    const path = url.pathname;

    const id = crypto.randomUUID();
    const body = await req.json();

    console.log(`${req.method} ${path} ${body} ${id}`)

    const responseBody = JSON.stringify({ Request: `${req.method} ${path}`, body, id })

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }

    return new Response(responseBody, { headers });
  },

  // this is called when fetch() throws or rejects
  error(err: Error) {
    return new Response("uh oh! :(\n" + err.toString(), { status: 500 });
  },

  // this boolean enables bun's default error handler
  development: process.env.NODE_ENV !== "production",
  // note: this isn't node, but for compatibility bun supports process.env + more stuff in process

  // SSL is enabled if these two are set
  // certFile: './cert.pem',
  // keyFile: './key.pem',

  hostname: "0.0.0.0",
  port: Number(process.env.PORT) ?? 4000, // number or string
});

console.log(`listing on ${server.hostname}`)