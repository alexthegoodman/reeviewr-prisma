export default class Strings {
  constructor() {}

  decode(item) {
    try {
      return decodeURI(decodeURIComponent(item));
    } catch (error) {
      // mixpanel
      console.error("ERROR", error);
      return item;
    }
  }
}
