import { HttpLink, InMemoryCache } from "@apollo/client/core";
import { SvelteApolloClient } from "svelte-apollo-client";

const httpLink = new HttpLink({
     uri: "https://remagen.stepzen.net/api/rest-example/__graphql",
     headers: {
       Authorization: "APIKey remagen::stepzen.net+1000::35c836092b893933f825eca84cba5c70159aa998f5ea4c731c4b57e07b8af42a",
     },
   });

export default SvelteApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});