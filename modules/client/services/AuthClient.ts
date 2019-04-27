import RestClient from "./RestClient";

export default class AuthClient {
  public restClient = new RestClient();

  constructor() {}

  makeRequest(endpoint, values, callback) {
    try {
      this.restClient.execSuper(endpoint, values, "POST").end((err, res) => {
        console.info(err, res);
        callback();
      });
    } catch (err) {
      console.error("ERROR 1001: ", err);
    }
  }

  signup(values, callback) {
    this.makeRequest("/user/create-user", values, callback);
  }

  resetPassword(values, callback) {
    this.makeRequest("/user/reset-password", values, callback);
  }

  resendEmailConfirmation(values, callback) {
    this.makeRequest("/user/resend-email-confirmation", values, callback);
  }

  forgotPassword(values, callback) {
    this.makeRequest("/user/forogt-password", values, callback);
  }

  login(values, callback) {
    this.makeRequest("/user/authenticate", values, callback);
  }

  logout() {
    // remove cookie and load home
  }
}
