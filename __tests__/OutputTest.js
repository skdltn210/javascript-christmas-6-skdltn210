import OutputView from "../src/View/OutputView";
import { MissionUtils } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();

  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join(LINE_SEPARATOR);
};

const expectLogContains = (received, expectedLogs) => {
  expectedLogs.forEach((log) => {
    expect(received).toContain(log);
  });
};

describe("출력 테스트", () => {
  test("printOrderMenu 함수", () => {
    const logSpy = getLogSpy();
    const orderDetails = { 타파스: 1, 제로콜라: 1 };

    const expected = ["<주문 메뉴>" + LINE_SEPARATOR + "타파스 1개" + LINE_SEPARATOR + "제로콜라 1개"];

    OutputView.printOrderMenu(orderDetails);

    expectLogContains(getOutput(logSpy), expected);
  });

  test("printPromotionDetails 함수", () => {
    const logSpy = getLogSpy();
    //12월 8일
    const christmasDiscount = 1700;
    const weekdayDiscount = 0;
    const weekendDiscount = 4046;
    const specialDiscount = 0;
    const isGift = true;

    const expected = [
      LINE_SEPARATOR + "<혜택 내역>" + LINE_SEPARATOR + "크리스마스 디데이 할인: -1,700원" + LINE_SEPARATOR + "주말 할인: -4,046원" + LINE_SEPARATOR + "증정 이벤트: -25,000원",
    ];

    OutputView.printPromotionDetails(christmasDiscount, weekdayDiscount, weekendDiscount, specialDiscount, isGift);

    expectLogContains(getOutput(logSpy), expected);
  });

  test("printTotalBenefit 함수", () => {
    const logSpy = getLogSpy();
    const benefit = 10000;
    const isGift = true;

    const expected = ["<총혜택 금액>" + LINE_SEPARATOR + "-35,000원"];

    OutputView.printTotalBenefit(benefit, isGift);

    expectLogContains(getOutput(logSpy), expected);
  });

  test("printEventBadge 함수", () => {
    const logSpy = getLogSpy();
    const totalBenefit = 15000;

    const expected = ["<12월 이벤트 배지>" + LINE_SEPARATOR + "트리"];

    OutputView.printEventBadge(totalBenefit);

    expectLogContains(getOutput(logSpy), expected);
  });
});
