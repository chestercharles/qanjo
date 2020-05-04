import jwt from "jsonwebtoken";

const SECRECT_KEY =
  "6F6D5597175432C7822245F7D5F73CB196EABA325827876E46167378E337B6BE";

type JWTPayload = {
  id: string;
  username: string;
  email: string;
};

export function createToken(payload: JWTPayload): string {
  const expiresIn = 24 * 60 * 60;
  return jwt.sign(payload, SECRECT_KEY, { expiresIn });
}

export function parseToken(token: string) {
  return new Promise<JWTPayload | false>((resolve) => {
    jwt.verify(token, SECRECT_KEY, (err, decoded) => {
      if (err) {
        return resolve(false);
      } else {
        return resolve(decoded as JWTPayload);
      }
    });
  });
}
