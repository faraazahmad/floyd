import { importSchema } from 'graphql-import';
import resolvers from './resolvers';

const typeDefs = importSchema('./schema.graphql');

export default {
    typeDefs,
    resolvers,
}