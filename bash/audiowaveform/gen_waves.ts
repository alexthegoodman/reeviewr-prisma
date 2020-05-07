// var waveform = require("waveform");
// import waveform from "waveform";
// import entire SDK
import * as AWS from "aws-sdk";
// import individual service
import * as S3 from "aws-sdk/clients/s3";
// var Waveform = require("node-waveform");
// var fs = require("fs");
// import Waveform from "node-waveform";
// import * as fs from "fs";

import * as cmd from "node-cmd";

const filename = "tmp/I-Dont-Feel-Down";

// cmd.run(
//   `audiowaveform -i ${filename}.mp3 -o ${filename}.dat --pixels-per-second 60 --bits 8`
// );
// cmd.run(`audiowaveform -i ${filename}.dat -o ${filename}.json`);
cmd.run(`python scale-json.py ${filename}.json`);
