// Build a Car class!
class Car {
  constructor(args) {
    this.model = args.model;
    this.date = args.date;
    this.odometer = 0;
  }

  drive(...args) {
    const total = args.reduce((sum, distance) => (sum += distance), 0);
    this.odometer += total;
    return total;
  }
}

module.exports = Car;
