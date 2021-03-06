import Strings from "./Strings";
import RestClient from "./RestClient";
import AuthClient from "./AuthClient";
import ItemClient from "./ItemClient";
import StringHandler from "./StringHandler";
import IntegrationClient from "./IntegrationClient";
import ApolloClient from "apollo-client";
import client from "./ApolloClient";

export default class Hawaii {
  public strings: Strings;
  public restClient: RestClient;
  public authClient: AuthClient;
  public apolloClient: ApolloClient<any>;
  public itemClient: ItemClient;
  public stringHandler: StringHandler;

  constructor() {
    this.strings = new Strings();
    this.restClient = new RestClient();
    this.authClient = new AuthClient();
    this.itemClient = new ItemClient();
    this.stringHandler = new StringHandler();
    this.apolloClient = client;
  }
}
