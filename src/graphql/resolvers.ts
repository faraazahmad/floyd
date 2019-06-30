import userResolvers from './user/resolvers';

import { merge } from 'lodash';

// main resolvers object to export
const globalResolvers = {};

// merge all resolver objects and export the result
export default merge(
    globalResolvers, 
    userResolvers
);