import EventController from "./Controller/EventController.js";
class App {
  async run() {
    const eventController = new EventController();
    await eventController.inputDateAndOrder();
    eventController.previewEventBenefits();
  }
}

export default App;
