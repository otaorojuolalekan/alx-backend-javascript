export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // getter and setter functions
  get code() {
    return this._code;
  }

  set code(codeval) {
    this._code = codeval;
  }

  get name() {
    return this._code;
  }

  set name(nameval) {
    this._name = nameval;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
