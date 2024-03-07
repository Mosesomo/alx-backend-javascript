export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must ne a string');
    } else {
      this._code = code;
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must ne a string');
    } else {
      this._name = name;
    }
  }

  get code() {
    return this._code;
  }

  set code(cod) {
    if (typeof cod !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = cod;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
