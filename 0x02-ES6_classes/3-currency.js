export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }

  // getter and setter functions
  get code() {
    return this._code;
  }

  set code(codeVal) {
    if (typeof codeVal !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = codeVal;
  }

  get name() {
    return this._code;
  }

  set name(nameVal) {
    if (typeof nameVal !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = nameVal;
  }
}
