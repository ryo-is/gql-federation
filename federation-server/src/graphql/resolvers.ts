import { Resolvers } from 'src/graphql/generated/graphql';

export const resolvers: Resolvers = {
  Query: {
    get: async () => {
      return {};
    },
  },
  Get: {
    res: () => {
      return {
        text: 'hello GraphGL !!!!',
        number: 12345,
      };
    },
  },
};
