import Cookies from "universal-cookie";
import Utility from "../../services/Utility";
import { USER_PRIVATE_QUERY } from "../graphql/queries/user";
import client from "./ApolloClient";
import RestClient from "./RestClient";

export default class AuthClient {
  public restClient = new RestClient();
  public utility = new Utility();

  constructor() {}

  async getUserData(dispatch) {
    const cookies = new Cookies();
    const reeviewrPrivateHash = cookies.get("reeviewrPrivateHash");

    console.info("reeivewr private hash", reeviewrPrivateHash);

    if (this.utility.isDefinedWithContent(reeviewrPrivateHash)) {
      const { data: userData } = await client.query({
        query: USER_PRIVATE_QUERY,
        variables: { privateHash: reeviewrPrivateHash },
      });
      console.info("got user data", reeviewrPrivateHash, userData);
      dispatch({
        type: "setUserData",
        userData,
      });
    } else {
      dispatch({
        type: "setUserData",
        userData: false,
      });
    }
  }

  // TODO: use route constants
  signup(values, callback) {
    this.restClient.makeRequest("/user/create-user", values, callback);
  }

  completeProfile(values, callback) {
    const cookies = new Cookies();
    const reeviewrPrivateHash = cookies.get("reeviewrPrivateHash");

    if (this.utility.isDefinedWithContent(reeviewrPrivateHash)) {
      this.restClient.makeRequest(
        "/user/complete-profile",
        { ...values, privateHash: reeviewrPrivateHash },
        callback
      );
    }
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

  confirmEmail(values, callback) {
    this.restClient.makeRequest("/user/confirm-email", values, callback);
  }

  logout() {
    // remove cookie and load home
  }
}
