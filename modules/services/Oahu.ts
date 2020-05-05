import AWSService from "./AWSService";
import Core from "./Core";
import Legacy from "./Legacy";
import Utility from "./Utility";
import Logs from "./Logs";

export default class Oahu {
  public awsService: AWSService;
  public core: Core;
  public legacy: Legacy;
  public utility: Utility;
  public logs: Logs;

  constructor() {
    this.awsService = new AWSService();
    this.core = new Core();
    this.legacy = new Legacy();
    this.utility = new Utility();
    this.logs = new Logs();
  }
}
