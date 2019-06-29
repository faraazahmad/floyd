import { importSchema } from 'graphql-import';

const typeDefs = importSchema('./types/schema.graphql');
const resolvers = {};

export default {
    typeDefs,
    resolvers,
};
