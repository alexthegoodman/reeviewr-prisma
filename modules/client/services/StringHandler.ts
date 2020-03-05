export default class StringHandler {
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
