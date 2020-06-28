// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { connectDb } from './db';
import { typeDefs, resolvers } from './graphql';

const port = process.env.PORT || 9000;

const mount = async (app: Application) => {
  const db = await connectDb();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  });
  server.applyMiddleware({ app, path: '/api' });

  app.listen(port, () => console.log(`[app]: ${port}`));
};

mount(express());
