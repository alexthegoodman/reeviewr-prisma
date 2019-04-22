import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import fetch from "cross-fetch";

let prismaUri = process.env.PRISMA_API_LOCAL;
if (process.env.NODE_ENV !== "development") {
  prismaUri = process.env.PRISMA_API_PROD;
}

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: prismaUri,
      // credentials: "same-origin",
      fetch,
    }),
  ]),
  cache: new InMemoryCache(),
});

// https://www.apollographql.com/docs/react/essentials/queries#refetching polling
// if refetch is needed, https://www.apollographql.com/docs/react/essentials/queries#manual-query

export default client;
