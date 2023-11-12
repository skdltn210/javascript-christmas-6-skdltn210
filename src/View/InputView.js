import { Console } from "@woowacourse/mission-utils";
import { INPUT, ERROR } from "../Constants/Constants.js";
import Validation from "../Validation/Validation.js";

const InputView = {
  async inputDate() {
    const input = await Console.readLineAsync(INPUT.expected_visit_date);
    const date = Number(input);
    try {
      Validation.isValidDate(date);
      return date;
    } catch {
      Console.print(ERROR.date_error);
      await this.inputDate();
    }
  },

  async inputOrder() {
    const input = await Console.readLineAsync(INPUT.order_request);
    try {
      Validation.isValidOrder(input);
      const orderDetails = this.parseStringToOrder(input);
      return orderDetails;
    } catch {
      Console.print(ERROR.order_error);
      return await this.inputOrder();
    }
  },

  parseStringToOrder(input) {
    const orderDetails = {};
    input.split(",").forEach((order) => {
      const [menu, amount] = order.split("-").map((item) => item.trim());
      orderDetails[menu] = parseInt(amount);
    });
    return orderDetails;
  },
};
export default InputView;
