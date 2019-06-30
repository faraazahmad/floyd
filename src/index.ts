import { GraphQLServer } from 'graphql-yoga'
import serverOptions from './graphql/main';

const server = new GraphQLServer(serverOptions);
server.start(() => console.log('Server is running on localhost:4000'))