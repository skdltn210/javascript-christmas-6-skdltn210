import { MENU, PROMOTION } from "../Constants/Constants.js";
import InputView from "../View/InputView.js";

class Validation {
  static isValidDate(date) {
    let validDate = Number.isInteger(date) && date >= 1 && date <= 31;
    if (!validDate) {
      throw new Error();
    }
  }

  static isValidOrder(input) {
    const orderDetails = InputView.parseStringToOrder(input);
    let validMenu = this.isValidMenu(orderDetails);
    let validAmount = Object.values(orderDetails).every((value) => value >= 1); // 각 메뉴의 수량이 1 이상인지 판단합니다.
    let validForm = this.isValidForm(orderDetails);
    let sameMenu = Object.keys(orderDetails).length == input.split(",").length; // 중복된 메뉴가 주문되었는지 판단합니다.
    let onlyDrink = this.isOnlyDrink(orderDetails);
    let tooManyOrder = this.isTooManyOrder(orderDetails);
    let error = !validMenu || !validAmount || !validForm || !sameMenu || !onlyDrink || !tooManyOrder;
    if (error) {
      throw new Error();
    }
  }

  //주문한 메뉴가 메뉴판에 있는 메뉴인지 판단합니다.
  static isValidMenu(orderDetails) {
    const appetizers = Object.keys(MENU.APPETIZER);
    const mains = Object.keys(MENU.MAIN);
    const desserts = Object.keys(MENU.DESSERT);
    const drinks = Object.keys(MENU.DRINK);
    return Object.keys(orderDetails).every((key) => appetizers.includes(key) || mains.includes(key) || desserts.includes(key) || drinks.includes(key));
  }

  //메뉴 형식이 맞는지 판단합니다.
  static isValidForm(orderDetails) {
    if (typeof orderDetails !== "object" || orderDetails === null) {
      return false;
    }
    const keys = Object.keys(orderDetails);
    keys.forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(orderDetails, key) || typeof key !== "string" || typeof orderDetails[key] !== "number") {
        return false;
      }
    });

    return true;
  }

  //음료만 주문했는지 판단합니다.
  static isOnlyDrink(orderDetails) {
    const drinks = Object.keys(MENU.DRINK);
    const keys = Object.keys(orderDetails);
    return !keys.every((key) => drinks.includes(key));
  }

  //20개가 넘는 주문을 했는지 판단합니다.
  static isTooManyOrder(orderDetails) {
    let menuCount = 0;
    const values = Object.values(orderDetails);
    values.forEach((value) => {
      menuCount += value;
    });
    if (menuCount > PROMOTION.max_order) {
      return false;
    }
    return true;
  }
}
export default Validation;
