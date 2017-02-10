import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Person',
  description: 'Represents Person',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Post ID',
      resolve: obj => obj._id,
    },
    firstName: {
      type: GraphQLString,
      description: 'Person first name',
      resolve: obj => obj.firstName,
    },
    lastName: {
      type: GraphQLString,
      description: 'Person last name',
      resolve: obj => obj.lastName,
    },
    email: {
      type: GraphQLString,
      description: 'Person email',
      resolve: obj => obj.email,
    },
    createdAt: {
      type: GraphQLString,
      description: '',
      resolve: obj => obj.createdAt.toISOString(),
    },
    updatedAt: {
      type: GraphQLString,
      description: '',
      resolve: obj => obj.updatedAt.toISOString(),
    },
  }),
});
