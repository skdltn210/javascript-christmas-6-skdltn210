import { BADGE, OUTPUT } from "../Constants/Constants.js";
class Discount {
  #expectedVisitDate;

  constructor(expectedVisitDate) {
    this.#expectedVisitDate = expectedVisitDate;
  }

  calculateChristmasDiscount() {
    let christmasDiscount = 0;
    if (this.#expectedVisitDate <= 25) {
      christmasDiscount = 1000 + 100 * (this.#expectedVisitDate - 1);
    }
    return christmasDiscount;
  }

  calculateWeekdayDiscount(dessertCount) {
    let weekdayDiscount = 0;
    let isWeekday = !(this.#expectedVisitDate % 7 == 1 || this.#expectedVisitDate % 7 == 2);
    if (isWeekday) {
      weekdayDiscount = 2023 * dessertCount;
    }
    return weekdayDiscount;
  }

  calculateWeekendDiscount(mainCount) {
    let weekendDiscount = 0;
    let isWeekend = this.#expectedVisitDate % 7 == 1 || this.#expectedVisitDate % 7 == 2;
    if (isWeekend) {
      weekendDiscount = 2023 * mainCount;
    }
    return weekendDiscount;
  }

  calculateSpecialDiscount() {
    let specialDiscount = 0;
    let isStar = this.#expectedVisitDate % 7 == 3 || this.#expectedVisitDate == 25;
    if (isStar) {
      specialDiscount = 1000;
    }
    return specialDiscount;
  }

  calculateTotalBenefit(dessertCount, mainCount) {
    let totalBenefit = 0;
    totalBenefit = this.calculateChristmasDiscount() + this.calculateWeekdayDiscount(dessertCount) + this.calculateWeekendDiscount(mainCount) + this.calculateSpecialDiscount();
    return totalBenefit;
  }

  checkEventBadge(totalBenefit) {
    if (totalBenefit >= 20000) {
      return BADGE.santa;
    }
    if (totalBenefit >= 10000) {
      return BADGE.tree;
    }
    if (totalBenefit >= 5000) {
      return BADGE.santa;
    }
    return OUTPUT.none;
  }
}
export default Discount;
