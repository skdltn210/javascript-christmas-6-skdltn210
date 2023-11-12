import OrderMenu from "../src/Model/OrderMenu.js";

describe("OrderMenu 클래스 테스트", () => {
  test("calculateTotalOrderAmount 함수", () => {
    const orderMenu = new OrderMenu({ 타파스: 2, 제로콜라: 1 });
    const totalOrderAmount = orderMenu.calculateTotalOrderAmount();
    expect(totalOrderAmount).toEqual(14000);
  });

  test("checkChampagneGift 함수(증정)", () => {
    const orderMenu = new OrderMenu({ 티본스테이크: 5 });
    expect(orderMenu.checkGift()).toEqual(true);
  });

  test("checkChampagneGift 함수(미증정)", () => {
    const orderMenu = new OrderMenu({ 타파스: 1 });
    expect(orderMenu.checkGift()).toEqual(false);
  });

  test("countDessert 함수", () => {
    const orderMenu = new OrderMenu({ 타파스: 1, 초코케이크: 3, 제로콜라: 2 });
    expect(orderMenu.countDessert()).toEqual(3);
  });

  test("countDrink 함수", () => {
    const orderMenu = new OrderMenu({ 타파스: 1, 초코케이크: 3, 제로콜라: 2 });
    expect(orderMenu.countDrink()).toEqual(2);
  });
});
