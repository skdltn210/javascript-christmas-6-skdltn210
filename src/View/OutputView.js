import { Console } from "@woowacourse/mission-utils";
import { OUTPUT, MENU, EVENT } from "../Constants/Constants.js";

const OutputView = {
  printEventPlanner() {
    Console.print(OUTPUT.event_planner);
    Console.print(OUTPUT.linebreak);
  },

  printEventPreview() {
    Console.print(OUTPUT.event_preview);
    Console.print(OUTPUT.linebreak);
    Console.print(OUTPUT.linebreak);
  },

  printOrderMenu(orderDetails) {
    Console.print(OUTPUT.order_menu);
    orderDetails.forEach((menu, amount) => {
      console.log(`${menu} ${amount}` + OUTPUT.unit + OUTPUT.linebreak);
    });
  },

  printOrderAmount(orderAmount) {
    Console.print(OUTPUT.order_amount);
    Console.print(orderAmount + OUTPUT.won + OUTPUT.linebreak);
  },

  printPromotionMenu() {
    Console.print(OUTPUT.promotion_menu);
    Console.print(MENU.DRINK.champagne + OUTPUT.one + OUTPUT.unit);
  },

  printPromotionDetails() {
    Console.print(OUTPUT.promotion_details);
  },

  printChristmasDiscount(christmasDiscount) {
    Console.print(EVENT.christmas_discount + christmasDiscount + OUTPUT.won);
  },

  printWeekdayDiscount(weekdayDiscount) {
    Console.print(EVENT.weekday_discount + weekdayDiscount + OUTPUT.won);
  },

  printWeekendDiscount(weekendDiscount) {
    Console.print(EVENT.weekday_discount + weekendDiscount + OUTPUT.won);
  },

  printPromotion(promotion) {
    Console.print(EVENT.promotion + promotion + OUTPUT.won);
  },

  printTotalBenefit(totalBenefit) {
    Console.print(OUTPUT.total_benefit);
    Console.print(totalBenefit + OUTPUT.won);
  },

  printExpectedPayment(expectedPayment) {
    Console.print(OUTPUT.discount_payment);
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
