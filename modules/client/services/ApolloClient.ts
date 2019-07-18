import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import fetch from "cross-fetch";

let prismaUri = process.env.PRISMA_API_LOCAL;
if (process.env.NODE_ENV !== "development") {
  prismaUri = process.env.PRISMA_API_PROD;
}

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "cache-and-network" as "cache-and-network",
    errorPolicy: "ignore" as "ignore",
  },
  query: {
    fetchPolicy: "cache-first" as "cache-first",
    errorPolicy: "all" as "all",
  },
  mutate: {
    errorPolicy: "all" as "all",
  },
};

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            prismaUri
          )
        );
      }
      if (networkError) {
        console.log(`[Network error]: ${networkError}`, prismaUri);
      }
    }),
    new HttpLink({
      uri: prismaUri,
      // credentials: "same-origin",
      fetch,
    }),
  ]),
  cache: new InMemoryCache(),
  defaultOptions,
});

// https://www.apollographql.com/docs/react/essentials/queries#refetching polling
// if refetch is needed, https://www.apollographql.com/docs/react/essentials/queries#manual-query

export default client;
