class Discount {
  #expectedVisitDate;

  constructor(expectedVisitDate) {
    this.#expectedVisitDate = expectedVisitDate;
  }

  calculateChristmasDiscount() {
    christmasDiscount = 0;
    if (this.#expectedVisitDate <= 25) {
      christmasDiscount = 1000 + 100 * (this.#expectedVisitDate - 1);
    }
    return christmasDiscount;
  }

  calculateWeekdayDiscount(dessertCount) {
    weekdayDiscount = 0;
    isWeekday = !(
      this.#expectedVisitDate % 7 == 1 || this.#expectedVisitDate % 7 == 2
    );
    if (isWeekday) {
      weekdayDiscount = 2023 * dessertCount;
    }
    return weekdayDiscount;
  }

  calculateWeekendDiscount(mainCount) {
    weekendDiscount = 0;
    isWeekend =
      this.#expectedVisitDate % 7 == 1 || this.#expectedVisitDate % 7 == 2;
    if (isWeekend) {
      weekendDiscount = 2023 * mainCount;
    }
    return weekendDiscount;
  }

  calculateSpecialDiscount() {
    specialDiscount = 0;
    isStar = this.#expectedVisitDate % 7 == 3 || this.#expectedVisitDate == 25;
    if (isStar) {
      specialDiscount = 1000;
    }
    return specialDiscount;
  }
}
export default Discount;
