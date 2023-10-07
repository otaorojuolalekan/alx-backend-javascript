export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // getter and setter functions
  get code() {
    return this._code;
  }

  set code(codeVal) {
    this._code = codeVal;
  }

  get name() {
    return this._code;
  }

  set name(nameVal) {
    this._name = nameVal;
  }

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }
}
