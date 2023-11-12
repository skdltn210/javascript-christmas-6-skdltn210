import { PROMOTION } from "../Constants/Constants.js";
class Discount {
  #expectedVisitDate;

  constructor(expectedVisitDate) {
    this.#expectedVisitDate = expectedVisitDate;
  }

  calculateChristmasDiscount() {
    let christmasDiscount = 0;
    if (this.#expectedVisitDate <= 25) {
      christmasDiscount = PROMOTION.christmas_basic_discount + PROMOTION.christmas_per_day_discount * (this.#expectedVisitDate - 1);
    }
    return christmasDiscount;
  }

  calculateWeekdayDiscount(dessertCount) {
    let weekdayDiscount = 0;
    let isWeekday = !(this.#expectedVisitDate % 7 == 1 || this.#expectedVisitDate % 7 == 2);
    if (isWeekday) {
      weekdayDiscount = PROMOTION.per_dessert_discount * dessertCount;
    }
    return weekdayDiscount;
  }

  calculateWeekendDiscount(mainCount) {
    let weekendDiscount = 0;
    let isWeekend = this.#expectedVisitDate % 7 == 1 || this.#expectedVisitDate % 7 == 2;
    if (isWeekend) {
      weekendDiscount = PROMOTION.per_main_discount * mainCount;
    }
    return weekendDiscount;
  }

  calculateSpecialDiscount() {
    let specialDiscount = 0;
    let isStar = this.#expectedVisitDate % 7 == 3 || this.#expectedVisitDate == 25;
    if (isStar) {
      specialDiscount = PROMOTION.special_discount_amount;
    }
    return specialDiscount;
  }

  calculateTotalBenefit(dessertCount, mainCount) {
    let totalBenefit = 0;
    totalBenefit = this.calculateChristmasDiscount() + this.calculateWeekdayDiscount(dessertCount) + this.calculateWeekendDiscount(mainCount) + this.calculateSpecialDiscount();
    return totalBenefit;
  }
}
export default Discount;
