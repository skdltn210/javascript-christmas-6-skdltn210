import { Console } from "@woowacourse/mission-utils";
import { OUTPUT, MENU, EVENT } from "../Constants/Constants.js";

const OutputView = {
  printEventPlanner() {
    Console.print(OUTPUT.event_planner);
  },

  printEventPreview(day) {
    Console.print(OUTPUT.month + day + OUTPUT.event_preview);
  },

  printOrderMenu(orderDetails) {
    Console.print(OUTPUT.order_menu);
    Object.entries(orderDetails).forEach(([menu, amount]) => {
      Console.print(`${menu} ${amount}` + OUTPUT.unit);
    });
  },

  printOrderAmount(orderAmount) {
    Console.print(OUTPUT.order_amount);
    Console.print(orderAmount + OUTPUT.won);
  },

  printPromotionMenu() {
    Console.print(OUTPUT.promotion_menu);
  },

  printChampagne() {
    Console.print(OUTPUT.champagne + OUTPUT.one + OUTPUT.unit);
  },

  printPromotionDetails(
    christmasDiscount,
    weekdayDiscount,
    weekendDiscount,
    specialDiscount,
    gift
  ) {
    Console.print(OUTPUT.promotion_details);
    let noDiscount =
      christmasDiscount == 0 &&
      weekdayDiscount == 0 &&
      weekendDiscount == 0 &&
      specialDiscount == 0 &&
      gift == false;
    if (noDiscount) {
      Console.print(OUTPUT.none);
    }
    if (christmasDiscount != 0) {
      Console.print(
        EVENT.christmas_discount + OUTPUT.minus + christmasDiscount + OUTPUT.won
      );
    }
    if (weekdayDiscount != 0) {
      Console.print(
        EVENT.weekday_discount + OUTPUT.minus + weekdayDiscount + OUTPUT.won
      );
    }
    if (weekendDiscount != 0) {
      Console.print(
        EVENT.weekend_discount + OUTPUT.minus + weekendDiscount + OUTPUT.won
      );
    }
    if (specialDiscount != 0) {
      Console.print(
        EVENT.special_discount +
          OUTPUT.minus +
          OUTPUT.special_discount_amount +
          OUTPUT.won
      );
    }
    if (gift) {
      Console.print(
        EVENT.promotion + OUTPUT.minus + OUTPUT.champagne_price + OUTPUT.won
      );
    }
  },

  printTotalBenefit(benefit, gift) {
    if (gift) {
      benefit += 25000;
    }
    Console.print(OUTPUT.total_benefit);
    benefit == 0
      ? Console.print(OUTPUT.none)
      : Console.print(OUTPUT.minus + benefit + OUTPUT.won);
  },

  printExpectedPayment(expectedPayment) {
    Console.print(OUTPUT.expected_payment);
    Console.print(expectedPayment + OUTPUT.won);
  },

  printEventBadge(badge) {
    Console.print(OUTPUT.event_badge);
    Console.print(badge);
  },

  printNone() {
    Console.print(OUTPUT.none);
  },
};
export default OutputView;
