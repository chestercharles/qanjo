import { User } from "./User";
import Bcrypt from "bcrypt";
import { parseToken, createToken } from "../../lib/jwt";
import { AuthenticationError } from "apollo-server-express";

export async function createUser({
  email,
  username,
  password,
}: {
  email: string;
  username: string;
  password: string;
}) {
  const hashedPassword = await Bcrypt.hash(password, 12);
  const user = await User.query().insert({
    email,
    username,
    password: hashedPassword,
  });
  return user;
}

export async function getUserFromBearerToken(bearerToken: string) {
  const [bearer, token] = bearerToken.split(" ");
  const payload = await parseToken(token);
  if (payload) {
    const [user] = await User.query().where({ id: payload.id });
    return user;
  }
  return null;
}

export async function getTokenFromCredentials(
  username: string,
  password: string
) {
  const [user] = await User.query().where({ username });
  if (user) {
    const isValid = await Bcrypt.compare(password, user.password);
    if (isValid) {
      const token = createToken({
        id: user.id,
        email: user.email,
        username: user.username,
      });
      return {
        token,
        user,
      };
    }
  }
  throw new AuthenticationError("Invalid Credentials");
}

export async function getTokenFromUser(user: User) {
  const token = createToken({
    id: user.id,
    email: user.email,
    username: user.username,
  });
  return token;
}

export async function getUsersInBand(band_id: string) {
  const users = await User.query()
    .select("users.id", "users.email", "users.username")
    .innerJoin("band_members", "band_members.user_id", "users.id")
    .where("band_members.band_id", band_id);
  return users;
}
