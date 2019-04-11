const csv = require("csv-parser");
const fs = require("fs");

const dataName: string = "itemMeta";

let startFile = "const MUTATIONS = [];";
let endFile = `export default MUTATIONS as string[];`;
let newFiles = new Array();
let count = 0;
fs.createReadStream(`./data-seed/csv/${dataName}.csv`)
  // fs.createReadStream(`./data-seed/csv/xaa`)
  .pipe(csv())
  .on("data", (row: any) => {
    console.info(row);
    let dataRow;
    let dataLabel;
    if (typeof row.itemType !== "undefined") {
      dataRow = {
        oldId: row.itemId,
        user: { connect: { oldId: row.userId } },
        itemType: row.itemType,
        itemStatus: row.itemStatus,
        itemUrlSegment: row.itemUrlSegment,
        itemMimeType: row.itemMimeType,
        itemName: row.itemName,
        itemContent: escape(row.itemContent),
        itemDeleted: row.itemDeleted === "1" ? true : false,
        // itemMeta: [FileMeta!]!
      };
      switch (row.itemType) {
        case "blogPost":
          dataLabel = "createBlogPost";
          break;
        case "file":
          dataLabel = "createFile";
          break;
        case "profilePage":
          dataLabel = "createProfilePage";
          break;
        case "review":
          dataLabel = "createReview";
          break;
        case "userFeedback":
          dataLabel = "createUserFeedback";
          break;
        case "userTrack":
          dataLabel = "createUserTrack";
          break;
      }
    } else if (typeof row.metaId !== "undefined") {
      switch (dataName) {
        case "userMeta":
          dataLabel = "createUserMeta";
          dataRow = {
            oldId: row.metaId,
            user: { connect: { oldId: row.userId } },
            metaType: row.metaType,
            metaName: row.metaName,
            metaValue: escape(row.metaValue),
            metaDeleted: row.metaDeleted === "1" ? true : false,
          };
          break;
        case "itemMeta":
          dataRow = {
            oldId: row.metaId,
            itemOldId: row.itemId,
            metaType: row.metaType,
            metaName: row.metaName,
            metaValue: escape(row.metaValue),
            metaDeleted: row.metaDeleted === "1" ? true : false,
          } as any;

          switch (row.metaName) {
            case "attachedFile":
              dataLabel = "createFileMeta";
              break;
            case "s3Info":
              dataLabel = "createFileMeta";
              break;
            case "fileMetadata":
              dataLabel = "createFileMeta";
              break;
            case "thumbnailId":
              dataLabel = "createFileMeta"; // conflict with blogPost meta
              break;
            case "preTrackId":
              dataLabel = "createReviewMeta";
              break;
            case "preAuthorId":
              dataLabel = "createReviewMeta";
              break;
            case "preUserFavDemo":
              dataLabel = "createReviewMeta";
              break;
            case "preUserGenderDemo":
              dataLabel = "createReviewMeta";
              break;
            case "preUserAgeDemo":
              dataLabel = "createReviewMeta";
              break;
            case "preUserExplicitDemo":
              dataLabel = "createReviewMeta";
              break;
            case "question_type_5":
              dataLabel = "createReviewMeta";
              break;
            case "question_type_4":
              dataLabel = "createReviewMeta";
              break;
            case "questionType3":
              dataLabel = "createReviewMeta";
              break;
            case "question_answer_5":
              dataLabel = "createReviewMeta";
              break;
            case "questionAnswer4":
              dataLabel = "createReviewMeta";
              break;
            case "questionAnswer3":
              dataLabel = "createReviewMeta";
              break;
            case "questionType2":
              dataLabel = "createReviewMeta";
              break;
            case "questionAnswer2":
              dataLabel = "createReviewMeta";
              break;
            case "questionType1":
              dataLabel = "createReviewMeta";
              break;
            case "questionAnswer1":
              dataLabel = "createReviewMeta";
              break;
            case "love_artist_0":
              dataLabel = "createReviewMeta";
              break;
            case "love_artist_1":
              dataLabel = "createReviewMeta";
              break;
            case "thumbnailId":
              dataLabel = "createBlogPostMeta";
              break;
            case "theUser":
              dataLabel = "createProfilePageMeta";
              break;
            case "author":
              dataLabel = "createUserFeedbackMeta";
              break;
            case "name":
              dataLabel = "createUserFeedbackMeta";
              break;
            case "url":
              dataLabel = "createUserFeedbackMeta";
              break;
            case "userAgent":
              dataLabel = "createUserFeedbackMeta";
              break;
            case "ip":
              dataLabel = "createUserFeedbackMeta";
              break;
            case "favGenre":
              dataLabel = "createUserTrackMeta";
              break;
            case "package":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionCount":
              dataLabel = "createUserTrackMeta";
              break;
            case "theOption":
              dataLabel = "createUserTrackMeta";
              break;
            case "followOption":
              dataLabel = "createUserTrackMeta";
              break;
            case "listensOption":
              dataLabel = "createUserTrackMeta";
              break;
            case "bonusOption":
              dataLabel = "createUserTrackMeta";
              break;
            case "gender_demo":
              dataLabel = "createUserTrackMeta";
              break;
            case "min_age_demo":
              dataLabel = "createUserTrackMeta";
              break;
            case "max_age_demo":
              dataLabel = "createUserTrackMeta";
              break;
            // case "spectrum_demo":
            //   dataLabel = "createUserTrackMeta";
            //   break;
            case "explicit_demo":
              dataLabel = "createUserTrackMeta";
              break;
            case "public_disc":
              dataLabel = "createUserTrackMeta";
              break;
            case "audioId":
              dataLabel = "createUserTrackMeta";
              break;
            case "artId":
              dataLabel = "createUserTrackMeta";
              break;
            case "artUrl":
              dataLabel = "createUserTrackMeta";
              break;
            case "genre":
              dataLabel = "createUserTrackMeta";
              break;
            case "scGenre":
              dataLabel = "createUserTrackMeta";
              break;
            case "scMinutes":
              dataLabel = "createUserTrackMeta";
              break;
            case "scArtUrl":
              dataLabel = "createUserTrackMeta";
              break;
            case "scStreamUrl":
              dataLabel = "createUserTrackMeta";
              break;
            case "scPermalink":
              dataLabel = "createUserTrackMeta";
              break;
            case "scFavCount":
              dataLabel = "createUserTrackMeta";
              break;
            case "scPlayCount":
              dataLabel = "createUserTrackMeta";
              break;
            case "scTrackId":
              dataLabel = "createUserTrackMeta";
              break;
            case "scAudioId":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionType3":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionContent3":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionOne3":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionTwo3":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionThree3":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionFour3":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionType2":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionContent2":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionOne2":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionTwo2":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionThree2":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionFour2":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionType1":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionContent1":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionOne1":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionTwo1":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionThree1":
              dataLabel = "createUserTrackMeta";
              break;
            case "questionFour1":
              dataLabel = "createUserTrackMeta";
              break;
            case "paid":
              dataLabel = "createUserTrackMeta";
              break;
            // case "finished_tests":
            //   dataLabel = "createUserTrackMeta";
            //   break;
            case "reviewedBy":
              dataLabel = "createUserTrackMeta";
              break;
            case "reviewCount":
              dataLabel = "createUserTrackMeta";
              break;
            case "assignmentId":
              dataLabel = "createReviewMeta";
              break;
            case "hitId":
              dataLabel = "createReviewMeta";
              break;
            case "workerId":
              dataLabel = "createReviewMeta";
              break;
            case "albumName":
              dataLabel = "createUserTrackMeta";
              break;

            //rating
            //love_artist_171, etc
            //_cover_hash
            //total_price
            default:
              console.error("No name ", row.metaName, row.metaValue);
              return;
              break;
          }

          if (dataLabel === "createFileMeta") {
            dataRow["file"] = { connect: { oldId: row.itemId } };
          }
          if (dataLabel === "createReviewMeta") {
            dataRow["review"] = { connect: { oldId: row.itemId } };
          }
          if (dataLabel === "createBlogPostMeta") {
            dataRow["blogPost"] = { connect: { oldId: row.itemId } };
          }
          if (dataLabel === "createProfilePageMeta") {
            dataRow["profilePage"] = { connect: { oldId: row.itemId } };
          }
          if (dataLabel === "createUserFeedbackMeta") {
            dataRow["userFeedback"] = { connect: { oldId: row.itemId } };
          }
          if (dataLabel === "createUserTrackMeta") {
            dataRow["userTrack"] = { connect: { oldId: row.itemId } };
          }
          if (dataLabel === "createUserMeta") {
            dataRow["user"] = { connect: { oldId: row.itemId } };
          }

          break;
      }
    } else if (typeof row.userType !== "undefined") {
      dataRow = {
        oldId: row.userId,
        userType: parseInt(row.userType),
        userEmail: row.userEmail,
        userPassword: row.userPassword,
        confirmHash: row.confirmHash,
        forgotHash: row.forgotHash,
        privateHash: row.privateHash,
        publicHash: row.publicHash,
        userConfirmed: parseInt(row.userConfirmed),
        userDeleted: row.userDeleted === "1" ? true : false,
        // itemMeta: [FileMeta!]!
      };
      dataLabel = "createUser";
    } else {
      console.error("No match");
      return;
    }

    let data = JSON.stringify(dataRow);
    data = data.replace(/\"([^(\")"]+)\":/g, "$1:");
    // data = data.replace(/(\r\n|\n|\r)/gm, "");
    count++;

    let fileCount = Math.floor(count / 1000);

    console.info(count);
    newFiles[fileCount] += `
MUTATIONS[${count}] = \`mutation mutation${count} { ${dataLabel}(data: ${data}) { id } } \`
    `;
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
    let fileCount = Math.floor(count / 1000);
    let printFile = new Array();
    console.info(fileCount);
    for (let i = 0; i <= fileCount; i++) {
      printFile[i] = startFile + newFiles[i] + endFile;
      // console.info(printFile);

      fs.writeFile(
        `./data-seed/mutations/${dataName}/${dataName}${i}.ts`,
        printFile[i],
        function(err: any, data: any) {
          if (err) console.log(err);
          console.log("Successfully Written to File.");
        }
      );
    }
  });
