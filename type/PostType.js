import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import Person from '../model/Person';
import PersonType from './PersonType';

export default new GraphQLObjectType({
  name: 'Post',
  description: 'Represents Post',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Post ID',
      resolve: obj => obj._id,
    },
    title: {
      type: GraphQLString,
      description: 'Post title',
      resolve: obj => obj.title,
    },
    content: {
      type: GraphQLString,
      description: 'Post content',
      resolve: obj => obj.content,
    },
    person: {
      type: PersonType,
      description: 'Person that created this post',
      resolve: async obj => await Person.findOne({'_id': obj.person}),
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
