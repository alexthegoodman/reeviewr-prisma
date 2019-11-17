import Utility from "../../services/Utility";
import RestClient from "./RestClient";

export default class IntegrationClient {
  public restClient = new RestClient();
  public utility = new Utility();

  constructor() {}

  mailchimpSubscribe(values, callback) {
    this.restClient.makeRequest(
      "/integration/mailchimp-subscribe",
      values,
      callback
    );
  }
}
