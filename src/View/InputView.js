import { Console } from "@woowacourse/mission-utils";
import { INPUT, ERROR } from "../Constants/Constants";

const InputView = {
  async inputDate() {
    const input = await Console.readLineAsync(INPUT.expected_date);
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
    const orders = input.split(",");
    const orderDetails = {};
    orders.forEach((order) => {
      const [menu, amount] = order.split("-");
      const menuName = menu.trim();
      const orderAmount = parseInt(amount.trim());
      orderDetails[menuName] = orderAmount;
    });
    try {
      Validation.isValidOrder(orderDetails);
      return orderDetails;
    } catch {
      Console.print(ERROR.order_error);
      await this.inputOrder();
    }
  },
};
export default InputView;
