import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Listing {
    id: ID!
    title: String!
    image: String!
    address: String!
  }

  type Query {
    listings: [Listing!]!
  }

  type Mutation {
    deleteListing(id: ID!): Listing!
  }
`;
