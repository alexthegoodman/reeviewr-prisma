import RestClient from "./RestClient";

export default class AuthClient {
  public restClient = new RestClient();

  constructor() {}

  login(values) {
    try {
      return this.restClient
        .execSuper("/user/authenticate", values, "POST")
        .end((err, res) => {
          console.info(err, res);
          // Calling the end function will send the request
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
