import Cookies from "universal-cookie";
import Utility from "../../services/Utility";
import { USER_PRIVATE_QUERY } from "../graphql/queries/user";
import client from "./ApolloClient";
import RestClient from "./RestClient";

export default class AuthClient {
  public restClient = new RestClient();
  public utility = new Utility();

  constructor() { }

  async getUserData(dispatch) {
    const cookies = new Cookies();
    const reeviewrId = cookies.get("reeviewrId");

    console.info("reeivewr private hash", reeviewrId);

    if (this.utility.isDefinedWithContent(reeviewrId)) {
      const { data: userData } = await client.query({
        query: USER_PRIVATE_QUERY,
        variables: { id: reeviewrId },
      });
      console.info("got user data", reeviewrId, userData);
      if (userData.findOneUser !== null) {
        dispatch({
          type: "setUserData",
          userData: userData.findOneUser,
        });
      } else {
        dispatch({
          type: "setUserData",
          userData: false,
        });
      }
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
    const reeviewrId = cookies.get("reeviewrId");

    if (this.utility.isDefinedWithContent(reeviewrId)) {
      this.restClient.makeRequest(
        "/user/complete-profile",
        { ...values, id: reeviewrId },
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
    const cookies = new Cookies();
    cookies.remove("reeviewrId");
    window.location.replace("/");
  }
}
