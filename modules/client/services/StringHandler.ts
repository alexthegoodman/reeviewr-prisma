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

  getPodUrl(pod) {
    return window.location.origin + "/pods/" + pod.id;
  }

  getPostUrl(post) {
    return (
      window.location.origin + "/posts/" + post.id + "/" + post.itemUrlSegment
    );
  }
}
