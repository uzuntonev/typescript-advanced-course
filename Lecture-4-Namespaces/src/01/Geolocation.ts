const opn = require("open");

export default class Geolocation {
  constructor(public latitude: number, public longitude: number) {}

  showCoordinates() {
    opn(
      `https://www.google.com/maps/search/${this.latitude},${this.longitude}`
    );
    console.log(`Page was opened!`);
  }
}
