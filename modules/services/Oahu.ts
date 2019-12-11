import AWSService from "./AWSService";
import Core from "./Core";
import Legacy from "./Legacy";
import Utility from "./Utility";

export default class Oahu {
  public awsService: AWSService;
  public core: Core;
  public legacy: Legacy;
  public utility: Utility;

  constructor() {
    this.awsService = new AWSService();
    this.core = new Core();
    this.legacy = new Legacy();
    this.utility = new Utility();
  }
}
