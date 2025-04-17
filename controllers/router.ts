import { Router } from "../deps.ts";
import jwt from "../service/authentication.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Welcome to the API";
});

router.post("/login", async (ctx) => {
  if (!ctx.request.hasBody) {
    ctx.response.status = 400;
    ctx.response.body = { error: "Missing request body" };
    return;
  }

  if (!ctx.request.headers.has("Content-Type")) {
    ctx.response.status = 400;
    ctx.response.body = { error: "Missing content-type header" };
    return;
  }

  const body = await ctx.request.body().value;
  const { username, password } = body;
  console.log("Login attempt:", username, password);

  const token = await jwt.createJWT(username);
  ctx.response.status = 200;
  ctx.response.body = { message: "Login successful", token };
});

export default router;