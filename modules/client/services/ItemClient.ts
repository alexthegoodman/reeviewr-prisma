import Cookies from "universal-cookie";
import Utility from "../../services/Utility";
import { USER_PRIVATE_QUERY } from "../graphql/queries/user";
import client from "./ApolloClient";
import RestClient from "./RestClient";

export default class ItemClient {
  public restClient = new RestClient();
  public utility = new Utility();

  constructor() {}

  createPod(values, callback) {
    const cookies = new Cookies();
    const reeviewrPrivateHash = cookies.get("reeviewrPrivateHash");

    console.info("create pod", reeviewrPrivateHash);

    if (this.utility.isDefinedWithContent(reeviewrPrivateHash)) {
      this.restClient.makeRequest(
        "/pods/create/",
        { privateHash: reeviewrPrivateHash, ...values },
        callback
      );
    } else {
      console.error("Only logged in users can create pods");
      alert("Bad Error 4403");
    }
  }

  createPost(values, callback) {
    const cookies = new Cookies();
    const reeviewrPrivateHash = cookies.get("reeviewrPrivateHash");

    console.info("create post", reeviewrPrivateHash);

    if (this.utility.isDefinedWithContent(reeviewrPrivateHash)) {
      this.restClient.makeRequest(
        "/posts/create/",
        { privateHash: reeviewrPrivateHash, ...values },
        callback
      );
    } else {
      console.error("Only logged in users can create posts");
      alert("Bad Error 4404");
    }
  }
}
