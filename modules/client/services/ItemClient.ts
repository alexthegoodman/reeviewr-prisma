import Cookies from "universal-cookie";
import Utility from "../../services/Utility";
import { USER_PRIVATE_QUERY } from "../graphql/queries/user";
import client from "./ApolloClient";
import RestClient from "./RestClient";

export default class ItemClient {
  public restClient = new RestClient();
  public utility = new Utility();

  constructor() {}

  createPod(values, callback) {}

  createPost(values, callback) {}
}
