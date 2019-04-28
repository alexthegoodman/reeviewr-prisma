export default class Utility {
  constructor() {}

  isDefinedWithContent(item) {
    if (typeof item !== "undefined" && item && item !== "" && item !== null) {
      return true;
    } else {
      return false;
    }
  }
}
