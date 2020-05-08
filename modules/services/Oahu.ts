import AWSService from "./AWSService";
import Core from "./Core";
import DataHandler from "./DataHandler";
import Utility from "./Utility";
import Logs from "./Logs";

export default class Oahu {
  public awsService: AWSService;
  public core: Core;
  public dataHandler: DataHandler;
  public utility: Utility;
  public logs: Logs;

  constructor() {
    this.awsService = new AWSService();
    this.core = new Core();
    this.dataHandler = new DataHandler();
    this.utility = new Utility();
    this.logs = new Logs();
  }
}
