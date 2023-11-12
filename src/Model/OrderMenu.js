import { MENU, PROMOTION } from "../Constants/Constants.js";

class OrderMenu {
  #orderMenu;

  constructor(orderMenu) {
    this.#orderMenu = orderMenu;
  }

  getOrder() {
    return this.#orderMenu;
  }

  calculateTotalOrderAmount() {
    let totalOrderAmount = 0;
    Object.keys(MENU).forEach((menuCategory) => {
      const categoryMenu = MENU[menuCategory];
      totalOrderAmount += this.calculateMenuAmount(categoryMenu);
    });
    return totalOrderAmount;
  }

  calculateMenuAmount(categoryMenu) {
    let menuAmount = 0;
    Object.keys(categoryMenu).forEach((menuName) => {
      if (this.#orderMenu.hasOwnProperty(menuName)) {
        const menuCount = this.#orderMenu[menuName];
        const menuPrice = categoryMenu[menuName];
        menuAmount += menuPrice * menuCount;
      }
    });
    return menuAmount;
  }

  checkGift() {
    const totalOrderAmount = this.calculateTotalOrderAmount();
    if (totalOrderAmount >= PROMOTION.gift_threshold_amount) {
      return true;
    }
    return false;
  }

  countDessert() {
    const dessertCategory = MENU.DESSERT;
    let countDessert = 0;
    Object.keys(dessertCategory).forEach((dessertName) => {
      if (this.#orderMenu.hasOwnProperty(dessertName)) {
        countDessert += this.#orderMenu[dessertName];
      }
    });
    return countDessert;
  }

  countDrink() {
    const drinkCategory = MENU.DRINK;
    let countDrink = 0;
    Object.keys(drinkCategory).forEach((drinkName) => {
      if (this.#orderMenu.hasOwnProperty(drinkName)) {
        countDrink += this.#orderMenu[drinkName];
      }
    });
    return countDrink;
  }
}
export default OrderMenu;
