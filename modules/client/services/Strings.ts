export default class Strings {
  constructor() {}

  decode(item) {
    try {
      return decodeURI(decodeURIComponent(item));
    } catch (error) {
      // mixpanel
      console.warn("WARNING", error);
      return item;
    }
  }
}
