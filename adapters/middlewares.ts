import { Middleware } from "../deps.ts";
import jwt from "../service/authentication.ts";

const allowedPaths = [
  "/login",
];

const authenticateVerify: Middleware = async (ctx, next) => {
  console.log("Middleware: authenticateVerify");
  console.log(`Received: ${ctx.request.url} at ${new Date()}`);

  if (allowedPaths.includes(ctx.request.url.pathname)) {
    await next();
    return;
  }

  if (!ctx.request.headers.has("Authorization")) {
    ctx.response.status = 401;
    ctx.response.body = { error: "Unauthorized" };
    return;
  }
  
  const very = await jwt.validateJWT(ctx.request.headers.get("Authorization")!);
  if (!very) {
    ctx.response.status = 401;
    ctx.response.body = { error: "Unauthorized" };
    return;
  }
  
  await next();

};

export default authenticateVerify;
