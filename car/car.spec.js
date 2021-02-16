// Test away!
const Car = require("./car");

describe("Testing my Car class", () => {
  let myCar;
  let prius;

  beforeEach(() => {
    myCar = new Car({ model: "honda", date: "2015" });
    prius = new Car({ model: "toyota", date: "2015" });
  });

  it("initial test", () => {
    expect(myCar).toBeDefined();
    expect(myCar).toEqual({ model: "honda", date: "2015", odometer: 0 });
  });

  test.todo("car should have a property");

  it("has a drive method", () => {
    expect(myCar.drive).toBeDefined();
    expect(myCar.drive).toBeTruthy();
    expect(myCar.drive).toBeInstanceOf(Function);
    expect(myCar.drive).toBe(Car.prototype.drive);
  });

  test("drive supports comma-separated leg distances", () => {
    expect(prius.drive(5, 3, 4)).toBe(12);
  });
});
