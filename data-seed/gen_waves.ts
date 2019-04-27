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

// const filename = "tmp/01-Track-01";
// const filename =
//   "tmp/03.-Absolute-Devotion-Feat.-Muzo-Aka-Alphonso-Stevo-Flex-ville-Tiye-P-Produced-by-Mzenga-Man";
// const filename = "tmp/06-Space-Tiger";
// const filename = "tmp/204925011";
// const filename = "tmp/209261013";
// const filename = "tmp/211658019";
// const filename = "tmp/214477656";
// const filename = "tmp/249710858";
// const filename = "tmp/BRE@K-the-SLENCE";
// const filename = "tmp/Doomed-demo";
// const filename = "tmp/I-Dont-Feel-Down";
// const filename = "tmp/Put-in-work-unedited";
const filename = "tmp/DUMMY";

cmd.run(
  `audiowaveform -i ${filename}.mp3 -o ${filename}.dat --pixels-per-second 20 --bits 8`
);
// cmd.run(`audiowaveform -i ${filename}.dat -o ${filename}.json`);
// cmd.run(`python scale-json.py ${filename}.json`);

// const s3 = new S3({
//   accessKeyId: "AKIAI4V6CMTZZYI4Y5QQ",
//   secretAccessKey: "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",
// });

// const params = {
//   Bucket: "toxicrobin",
//   MaxKeys: 1000,
//   Prefix: "toxicrobin/wp-content/uploads/2015",
// };

// s3.listObjects(params, function(err, data) {
//   if (err) console.log(err, err.stack);
//   console.info("data", data.NextMarker, data.IsTruncated);
//   if (typeof data.Contents !== "undefined") {
//     data.Contents.forEach(file => {
//       if (typeof file.Key !== "undefined") {
//         const parts = file.Key.split(".");

//         if (parts[1] === "mp3") {
//           console.info(parts);
//           const url =
//             "https://s3.amazonaws.com/toxicrobin/toxicrobin/wp-content/uploads/" +
//             file.Key;
//           const options = {
//             width: 1200,
//             height: 200,
//           };
//           Waveform(url, options, (err, buffer) => {
//             console.info(buffer);
//             // fs.writeFileSync(
//             //   "https://s3.amazonaws.com/toxicrobin/toxicrobin/wp-content/uploads/" +
//             //     parts[0] +
//             //     "-waveform.png",
//             //   buffer
//             // );
//           });
//         }
//       }
//     });
//   }
// });

// waveform(
//   audiofile,
//   {
//     // options
//     scan: false, // whether to do a pass to detect duration

//     // waveform.js options
//     waveformjs: "outputfile.json", // path to output-file, or - for stdout as a Buffer
//     "wjs-width": 800, // width in samples
//     "wjs-precision": 4, // how many digits of precision
//     "wjs-plain": false, // exclude metadata in output JSON (default off)
//   },
//   function(err, buf) {
//     // done
//   }
// );
