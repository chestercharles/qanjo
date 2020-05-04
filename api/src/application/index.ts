import express from "express";
import { ApolloServer, AuthenticationError } from "apollo-server-express";
import { schema } from "./schema";
import { resolvers } from "./resolvers";
import { Model } from "objection";
import knex from "../lib/knex";
import { getUserFromToken } from "./users/user-service";

Model.knex(knex);

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    const user = await getUserFromToken(token);
    return { user };
  },
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log("Now browse to http://localhost:4000" + server.graphqlPath)
);
