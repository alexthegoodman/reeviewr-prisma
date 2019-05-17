import RestClient from "./RestClient";

export default class AuthClient {
  public restClient = new RestClient();

  constructor() {}

  signup(values, callback) {
    this.restClient.makeRequest("/user/create-user", values, callback);
  }

  resetPassword(values, callback) {
    this.restClient.makeRequest("/user/reset-password", values, callback);
  }

  resendEmailConfirmation(values, callback) {
    this.restClient.makeRequest(
      "/user/resend-email-confirmation",
      values,
      callback
    );
  }

  forgotPassword(values, callback) {
    this.restClient.makeRequest("/user/forgot-password", values, callback);
  }

  login(values, callback) {
    this.restClient.makeRequest("/user/authenticate", values, callback);
  }

  logout() {
    // remove cookie and load home
  }
}
