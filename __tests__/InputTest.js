import Validation from "../src/Validation/Validation.js";

describe("입력 테스트", () => {
  test.each([
    ["string"],
    [{ key: "value" }],
    [() => {}],
    [undefined],
    [["this", "is", "array"]],
    [-1],
    [0],
    [10.5],
    [32],
  ])("올바른 날짜를 입력했는지 판단하는 isValidDate 함수", async (inputs) => {
    await expect(() => Validation.isValidDate(inputs)).toThrow();
  });

  test.each([
    ["짜장면-1"],
    ["양송이수프-0"],
    ["양송이수프: 2"],
    [["양송이수프", 1]],
    ["양송이수프-1, 양송이수프-1"],
    ["샴페인-2"],
    ["양송이수프-21"],
  ])("올바른 주문 입력했는지 판단하는 isValidOrder 함수", async (inputs) => {
    await expect(() => Validation.isValidOrder(inputs)).toThrow();
  });
});
