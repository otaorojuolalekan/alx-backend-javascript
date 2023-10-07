// holberton class with getters and setters
export default class HolbertonCourse {
  // constructors
  constructor(name = '', length = 0, students = []) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // All GETTER & SETTER FUNCTIONS
  get name() {
    return this._name;
  }

  set name(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = str;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  get students() {
    return this._students;
  }

  // ALL SETTER FUNCTIONS

  set students(arr) {
    if (!(arr instanceof Array)) {
      if (!arr.every((input) => typeof input === 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
    }
    this._students = arr;
  }
}
