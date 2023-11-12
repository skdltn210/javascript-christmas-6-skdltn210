import InputView from "../src/View/InputView.js";
import Validation from "../src/Validation/Validation.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR } from "../src/Constants/Constants.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();

  return logSpy;
};

describe("입력 테스트", () => {
  test.each([["string"], [{ key: "value" }], [() => {}], [undefined], [["this", "is", "array"]], [-1], [0], [10.5], [32]])(
    "올바른 날짜를 입력했는지 판단하는 isValidDate 함수",
    async (inputs) => {
      await expect(() => Validation.isValidDate(inputs)).toThrow();
    }
  );

  test.each([["짜장면-1"], ["양송이수프-0"], ["양송이수프: 2"], [["양송이수프", 1]], ["양송이수프-1, 양송이수프-1"], ["샴페인-2"], ["양송이수프-21"]])(
    "올바른 주문을 입력했는지 판단하는 isValidOrder 함수",
    async (inputs) => {
      await expect(() => Validation.isValidOrder(inputs)).toThrow();
    }
  );

  test("잘못된 날짜를 입력했을 때 다시 입력 받고, 올바른 날짜를 입력했을 때 정확한 값 반환", async () => {
    mockQuestions([-1, 3]);
    const logSpy = getLogSpy();

    const result = await InputView.inputDate();

    expect(result).toBe(3);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(ERROR.date_error));
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledTimes(2);
  });

  test("잘못된 주문을 입력했을 때 다시 입력 받고, 올바른 주문를 입력했을 때 정확한 값 반환", async () => {
    mockQuestions(["짜장면-1", "양송이수프-1"]);
    const logSpy = getLogSpy();

    const result = await InputView.inputOrder();

    expect(result).toStrictEqual({ 양송이수프: 1 });
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(ERROR.order_error));
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledTimes(2);
  });
});
