import Discount from "../src/Model/Discount.js";

describe("Discount 클래스 테스트", () => {
  describe("calculateChristmasDiscount 함수", () => {
    test("할인 적용", () => {
      const discount = new Discount(24);
      const christmasDiscount = discount.calculateChristmasDiscount();
      expect(christmasDiscount).toEqual(3300);
    });

    test("할인 미적용", () => {
      const discount = new Discount(26);
      const christmasDiscount = discount.calculateChristmasDiscount();
      expect(christmasDiscount).toEqual(0);
    });
  });

  describe("calculateWeekdayDiscount 함수", () => {
    test("할인 적용", () => {
      const discount = new Discount(5);
      const weekdayDiscount = discount.calculateWeekdayDiscount(2);
      expect(weekdayDiscount).toEqual(4046);
    });

    test("할인 미적용", () => {
      const discount = new Discount(1);
      const weekdayDiscount = discount.calculateWeekdayDiscount(2);
      expect(weekdayDiscount).toEqual(0);
    });
  });

  describe("calculateWeekendDiscount 함수", () => {
    test("할인 적용", () => {
      const discount = new Discount(15);
      const weekendDiscount = discount.calculateWeekendDiscount(3);
      expect(weekendDiscount).toEqual(6069);
    });

    test("할인 미적용", () => {
      const discount = new Discount(10);
      const weekendDiscount = discount.calculateWeekendDiscount(3);
      expect(weekendDiscount).toEqual(0);
    });
  });

  describe("calculateSpecialDiscount 함수", () => {
    test("할인 적용", () => {
      const discount = new Discount(24);
      const specialDiscount = discount.calculateSpecialDiscount();
      expect(specialDiscount).toEqual(1000);
    });

    test("할인 미적용", () => {
      const discount = new Discount(26);
      const specialDiscount = discount.calculateSpecialDiscount();
      expect(specialDiscount).toEqual(0);
    });
  });
});
