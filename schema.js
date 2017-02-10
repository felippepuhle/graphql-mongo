import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

import Person from './model/Person';
import PersonType from './type/PersonType';

import Post from './model/Post';
import PostType from './type/PostType';

import Faker from 'faker';
import _ from 'lodash';

mongoose.connect('mongodb://localhost/database');

_.times(50, ()=> {
  return Person.create({
    firstName: Faker.name.firstName(),
    lastName: Faker.name.lastName(),
    email: Faker.internet.email()
  }).then(person => {
    return _.times(_.random(100, 1000), (index)=> {
      return Post.create({
        title: `Sample post ${index+1} by ${person.firstName}`,
        content: 'here is some content',
        person: person._id
      });
    });     
  });
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => {
    return {
      people: {
        type: new GraphQLList(PersonType),
        args: {
          id: {
            type: GraphQLInt
          },
          email: {
            type: GraphQLString
          }
        },
        resolve (root, args) {
          return Person.find(args);
        }
      },
      posts: {
        type: new GraphQLList(PostType),
        resolve (root, args) {
          return Post.find(args);
        }
      }
    };
  }
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;