export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    } else {
      this._sqft = sqft;
    }
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = size;
  }
}
