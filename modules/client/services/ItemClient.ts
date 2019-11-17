import Cookies from "universal-cookie";
import Utility from "../../services/Utility";
import { USER_PRIVATE_QUERY } from "../graphql/queries/user";
import client from "./ApolloClient";
import RestClient from "./RestClient";

export default class ItemClient {
  public restClient = new RestClient();
  public utility = new Utility();

  constructor() { }

  createPod(values, callback) {
    const cookies = new Cookies();
    const reeviewrId = cookies.get("reeviewrId");

    console.info("create pod", reeviewrId);

    if (this.utility.isDefinedWithContent(reeviewrId)) {
      this.restClient.makeRequest(
        "/pods/create/",
        { id: reeviewrId, ...values },
        callback
      );
    } else {
      console.error("Only logged in users can create pods");
      alert("Bad Error 4403");
    }
  }

  createPost(values, callback) {
    const cookies = new Cookies();
    const reeviewrId = cookies.get("reeviewrId");

    console.info("create post", reeviewrId);

    if (this.utility.isDefinedWithContent(reeviewrId)) {
      this.restClient.makeRequest(
        "/posts/create/",
        { id: reeviewrId, ...values },
        callback
      );
    } else {
      console.error("Only logged in users can create posts");
      alert("Bad Error 4404");
    }
  }
}
