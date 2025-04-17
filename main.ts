import { Application, oakCors } from "./deps.ts";
import router from "./controllers/router.ts";
import authenticateVerify from "./adapters/middlewares.ts";

const app = new Application();

const port = Deno.env.get("PORT") || 8080;
const origin = Deno.env.get("ORIGIN") || "*";

app.use(authenticateVerify);

app.use(router.routes());
app.use(router.allowedMethods());

app.use(
  oakCors({
    origin: origin,
  })
);

console.log("Server Running at port", port);
await app.listen({ port: Number(port) });
