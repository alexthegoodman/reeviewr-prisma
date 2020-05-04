import Cookies from "universal-cookie";
import Utility from "../../services/Utility";
import { USER_PRIVATE_QUERY } from "../graphql/queries/user";
import client from "./ApolloClient";
import RestClient from "./RestClient";
import { DELETE_POST } from "../graphql/mutations/post";

export default class ItemClient {
  public restClient = new RestClient();
  public utility = new Utility();

  constructor() {}

  createSpace(values, callback) {
    const cookies = new Cookies();
    const reeviewrId = cookies.get("reeviewrId");

    console.info("create space", reeviewrId);

    if (this.utility.isDefinedWithContent(reeviewrId)) {
      this.restClient.makeRequest(
        "/spaces/create/",
        { id: reeviewrId, ...values },
        callback
      );
    } else {
      console.error("Only logged in users can create spaces");
      alert("Sorry! Please sign up to create items. Code 4403");
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
      alert("Sorry! Please sign up to create items. Code 4404");
    }
  }

  deleteItem(id, mutation) {
    const cookies = new Cookies();
    const reeviewrId = cookies.get("reeviewrId");

    console.info("delete item", reeviewrId);

    if (this.utility.isDefinedWithContent(reeviewrId)) {
      console.info("client", client);
      return client.mutate({
        mutation,
        variables: {
          id,
        },
      });
    } else {
      console.error("Only logged in users can delete items");
      alert("Sorry! Please sign up to delete items. Code 4405");
    }
  }
}
