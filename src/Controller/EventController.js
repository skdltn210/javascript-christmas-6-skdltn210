import Discount from "../Model/Discount.js";
import OrderMenu from "../Model/OrderMenu.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";

class EventController {
  #discount;
  #orderMenu;

  constructor() {
    this.#discount = null;
    this.#orderMenu = null;
  }

  async inputDateAndOrder() {
    OutputView.printEventPlanner();
    const expectedDate = await InputView.inputDate();
    OutputView.printCaution();
    const order = await InputView.inputOrder();
    this.#discount = new Discount(expectedDate);
    this.#orderMenu = new OrderMenu(order);
    OutputView.printEventPreview(expectedDate);
  }

  previewEventBenefits() {
    OutputView.printOrderMenu(this.#orderMenu.getOrder());
    OutputView.printOrderAmount(this.#orderMenu.calculateTotalOrderAmount());
    OutputView.printPromotionMenu(this.#orderMenu.checkGift());
    OutputView.printPromotionDetails(
      this.#discount.calculateChristmasDiscount(),
      this.#discount.calculateWeekdayDiscount(this.#orderMenu.countDessert()),
      this.#discount.calculateWeekendDiscount(this.#orderMenu.countDrink()),
      this.#discount.calculateSpecialDiscount(),
      this.#orderMenu.checkGift()
    );
    OutputView.printTotalBenefit(this.#discount.calculateTotalBenefit(this.#orderMenu.countDessert(), this.#orderMenu.countDrink()), this.#orderMenu.checkGift());
    OutputView.printExpectedPayment(
      this.#orderMenu.calculateTotalOrderAmount(),
      this.#discount.calculateTotalBenefit(this.#orderMenu.countDessert(), this.#orderMenu.countDrink())
    );
    OutputView.printEventBadge(this.#discount.calculateTotalBenefit(this.#orderMenu.countDessert(), this.#orderMenu.countDrink()));
  }
}

export default EventController;
