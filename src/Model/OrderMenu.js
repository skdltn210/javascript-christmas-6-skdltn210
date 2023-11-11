import { MENU } from "../Constants/Constants.js";

class OrderMenu {
  #orderMenu;

  constructor(orderMenu) {
    this.#orderMenu = orderMenu;
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

  checkShampagneGift() {
    const totalOrderAmount = this.calculateTotalOrderAmount();
    if (totalOrderAmount >= 120000) {
      return true;
    }
    return false;
  }
}
export default OrderMenu;
