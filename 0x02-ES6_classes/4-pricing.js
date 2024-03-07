export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amt) {
    this._amount = amt;
  }

  get currency() {
    return this._currency;
  }

  set currency(curr) {
    this._currency = curr;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    amount * conversionRate;
  }
}
