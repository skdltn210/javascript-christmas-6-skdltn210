import { Console } from "@woowacourse/mission-utils";
import { OUTPUT, EVENT, MENU } from "../Constants/Constants.js";

const OutputView = {
  printEventPlanner() {
    Console.print(OUTPUT.event_planner);
  },

  printEventPreview(day) {
    Console.print(OUTPUT.event_month + OUTPUT.blank + day + OUTPUT.event_preview);
  },

  printOrderMenu(orderDetails) {
    Console.print(OUTPUT.order_menu);
    Object.entries(orderDetails).forEach(([menu, amount]) => {
      Console.print(`${menu} ${amount}` + OUTPUT.unit);
    });
  },

  printOrderAmount(orderAmount) {
    Console.print(OUTPUT.total_amount_before_discount);
    Console.print(orderAmount.toLocaleString() + OUTPUT.won);
  },

  printPromotionMenu(isGift) {
    Console.print(OUTPUT.gift_menu);
    isGift ? Console.print(OUTPUT.gift + OUTPUT.blank + OUTPUT.gift_amount + OUTPUT.unit) : Console.print(OUTPUT.none);
  },

  printPromotionDetails(christmasDiscount, weekdayDiscount, weekendDiscount, specialDiscount, isgift) {
    Console.print(OUTPUT.benefit_details);
    let noDiscount = christmasDiscount == 0 && weekdayDiscount == 0 && weekendDiscount == 0 && specialDiscount == 0 && isgift == false;
    if (noDiscount) {
      Console.print(OUTPUT.none);
    }
    if (christmasDiscount != 0) {
      Console.print(EVENT.christmas_discount + OUTPUT.minus + christmasDiscount.toLocaleString() + OUTPUT.won);
    }
    if (weekdayDiscount != 0) {
      Console.print(EVENT.weekday_discount + OUTPUT.minus + weekdayDiscount.toLocaleString() + OUTPUT.won);
    }
    if (weekendDiscount != 0) {
      Console.print(EVENT.weekend_discount + OUTPUT.minus + weekendDiscount.toLocaleString() + OUTPUT.won);
    }
    if (specialDiscount != 0) {
      Console.print(EVENT.special_discount + OUTPUT.minus + OUTPUT.special_discount_amount.toLocaleString() + OUTPUT.won);
    }
    if (isgift) {
      Console.print(EVENT.promotion + OUTPUT.minus + MENU.DRINK.샴페인.toLocaleString() + OUTPUT.won);
    }
  },

  printTotalBenefit(benefit, isgift) {
    if (isgift) {
      benefit += MENU.DRINK.샴페인;
    }
    Console.print(OUTPUT.total_benefit_amount);
    benefit == 0 ? Console.print(OUTPUT.none) : Console.print(OUTPUT.minus + benefit.toLocaleString() + OUTPUT.won);
  },

  printExpectedPayment(expectedPayment) {
    Console.print(OUTPUT.expected_payment);
    Console.print(expectedPayment.toLocaleString() + OUTPUT.won);
  },

  printEventBadge(badge) {
    Console.print(OUTPUT.december_event_badge);
    Console.print(badge);
  },

  printNone() {
    Console.print(OUTPUT.none);
  },
};
export default OutputView;
