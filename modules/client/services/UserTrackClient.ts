import RestClient from "./RestClient";
import Cookies from "universal-cookie";

export default class UserTrackClient {
  public restClient = new RestClient();

  constructor() {}

  createTrack(values, callback) {
    const cookies = new Cookies();
    const reeviewrPrivateHash = cookies.get("reeviewrPrivateHash");
    this.restClient.makeRequest(
      "/user-track/create-track",
      { ...values, privateHash: reeviewrPrivateHash },
      callback
    );
  }
}
