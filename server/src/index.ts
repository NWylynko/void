
// Start a fast HTTP server from a function
Bun.serve({
  fetch(req: Request) {

    const url = new URL(req.url);
    const path = url.pathname;

    console.log(`${req.method} ${path}`)

    return new Response(`Request: ${req.method} ${path}`);
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

  port: process.env.PORT ?? 4000, // number or string
});

