import RestClient from "./RestClient";
import Cookies from "universal-cookie";
import Utility from "../../services/Utility";

export default class UserTrackClient {
  public restClient = new RestClient();
  public utility = new Utility();

  constructor() {}

  createTrack(values, callback) {
    const cookies = new Cookies();
    const reeviewrPrivateHash = cookies.get("reeviewrPrivateHash");

    if (this.utility.isDefinedWithContent(reeviewrPrivateHash)) {
      this.restClient.makeRequest(
        "/user-track/create-track",
        { ...values, privateHash: reeviewrPrivateHash },
        callback
      );
    }
  }
}
