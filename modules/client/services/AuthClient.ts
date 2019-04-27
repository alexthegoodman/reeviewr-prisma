import RestClient from "./RestClient";

export default class AuthClient {
  public restClient = null;

  constructor() {
    this.restClient = new RestClient();
  }

  login() {
    try {
      return this.restClient
        .exec("/user/authenticate")
        .then(data => {
          console.info(data);
        })
        .catch(err => {
          // this.mixpanel
          console.error("ERROR: ", err);
        });
    } catch (err) {
      console.error("ERROR: ", err);
    }
  }

  logout() {}

  signup() {}

  resetPassword() {}

  resendEmailConfirmation() {}

  forgotPassword() {}
}
