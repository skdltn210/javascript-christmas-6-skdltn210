import { Console } from "@woowacourse/mission-utils";
import { OUTPUT, EVENT, MENU, BADGE, PROMOTION, ECT } from "../Constants/Constants.js";

const OutputView = {
  printEventPlanner() {
    Console.print(OUTPUT.event_planner);
  },

  printCaution() {
    Console.print(OUTPUT.event_caution);
    Console.print(OUTPUT.order_cation);
  },

  printEventPreview(day) {
    Console.print(PROMOTION.event_month + ECT.blank + day + OUTPUT.event_preview);
  },

  printOrderMenu(orderDetails) {
    Console.print(OUTPUT.order_menu);
    Object.entries(orderDetails).forEach(([menu, amount]) => {
      Console.print(`${menu} ${amount}` + ECT.unit);
    });
  },

  printOrderAmount(orderAmount) {
    Console.print(OUTPUT.total_amount_before_discount);
    Console.print(orderAmount.toLocaleString() + ECT.won);
  },

  printPromotionMenu(isGift) {
    Console.print(OUTPUT.gift_menu);
    isGift ? Console.print(PROMOTION.gift + ECT.blank + PROMOTION.gift_amount + ECT.unit) : Console.print(ECT.none);
  },

  printPromotionDetails(christmasDiscount, weekdayDiscount, weekendDiscount, specialDiscount, isgift) {
    Console.print(OUTPUT.benefit_details);
    let noDiscount = christmasDiscount == 0 && weekdayDiscount == 0 && weekendDiscount == 0 && specialDiscount == 0 && isgift == false;
    if (noDiscount) {
      Console.print(ECT.none);
      return;
    }
    this.printDiscount(EVENT.christmas_discount, christmasDiscount);
    this.printDiscount(EVENT.weekday_discount, weekdayDiscount);
    this.printDiscount(EVENT.weekend_discount, weekendDiscount);
    this.printDiscount(EVENT.special_discount, specialDiscount);
    if (isgift) {
      Console.print(EVENT.gift_event + ECT.minus + MENU.DRINK.샴페인.toLocaleString() + ECT.won);
    }
  },

  printDiscount(event, discount) {
    if (discount) {
      Console.print(event + ECT.minus + discount.toLocaleString() + ECT.won);
    }
  },

  printTotalBenefit(benefit, isgift) {
    if (isgift) {
      benefit += MENU.DRINK.샴페인;
    }
    Console.print(OUTPUT.total_benefit_amount);
    benefit == 0 ? Console.print(benefit.toLocaleString() + ECT.won) : Console.print(ECT.minus + benefit.toLocaleString() + ECT.won);
  },

  printExpectedPayment(totalOrderAmount, totalBenefit) {
    Console.print(OUTPUT.expected_payment);
    Console.print((totalOrderAmount - totalBenefit).toLocaleString() + ECT.won);
  },

  printEventBadge(totalBenefit) {
    Console.print(OUTPUT.december_event_badge);
    let badge = totalBenefit >= 20000 ? BADGE.santa : totalBenefit >= 10000 ? BADGE.tree : totalBenefit >= 5000 ? BADGE.santa : ECT.none;
    Console.print(badge);
  },
};

export default OutputView;
