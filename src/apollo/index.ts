import CONFIG from "@/config";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: CONFIG.GRAPHQL_URL,
  cache: new InMemoryCache(),
});
export default client;
