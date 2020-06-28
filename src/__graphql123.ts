import { GraphQLObjectType, GraphQLSchema, GraphQLNonNull } from 'graphql';
import { GraphQLID, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';

import { listings } from './mocks/listings';

const Listining = new GraphQLObjectType({
  name: 'Listining',
  fields: {
    id: { type: GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLNonNull(GraphQLString) },
    image: { type: GraphQLNonNull(GraphQLString) },
    address: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLInt) },
    numOfGuest: { type: GraphQLNonNull(GraphQLInt) },
    numOfBeds: { type: GraphQLNonNull(GraphQLInt) },
    numOfBaths: { type: GraphQLNonNull(GraphQLInt) },
    rating: { type: GraphQLNonNull(GraphQLInt) },
  },
});

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    listinings: {
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(Listining))),
      resolve: () => listings,
    },
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    deleteListing: {
      type: GraphQLNonNull(Listining),
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: (_root, { id }) => {
        const index = listings.findIndex((item) => item.id === id);
        if (index !== -1) {
          return listings.splice(index, 1)[0];
        }

        throw new Error('failed to delete listing');
      },
    },
  },
});

export const schema = new GraphQLSchema({ query, mutation });
