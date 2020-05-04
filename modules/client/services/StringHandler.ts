import { LoremIpsum } from "lorem-ipsum";

export default class StringHandler {
  public lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  constructor() {}

  getSpaceUrl(space) {
    return window.location.origin + "/spaces/" + space.id;
  }

  getPostUrl(post) {
    return (
      window.location.origin + "/posts/" + post.id + "/" + post.itemUrlSegment
    );
  }
}
