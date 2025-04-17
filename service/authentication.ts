import { create, verify } from "../deps.ts";
import type User from "./types.ts";

const secretBytes = await crypto.subtle.generateKey(
  {
    name: "HMAC",
    hash: "SHA-512",
  },
  true,
  ["sign", "verify"]
);

const createJWT = async (user: User) => {
  const jwt = await create(
    { alg: "HS512", typ: "JWT" },
    { user: user },
    secretBytes
  );
  return jwt;
};

const validateJWT = async (jwt: string) => {
  const payload = await verify(jwt, secretBytes);
  if (payload) {
    return true;
  }

  return false;
};

export default { createJWT, validateJWT };
