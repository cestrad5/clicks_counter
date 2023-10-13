// 2-hbtn_course.js
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (
      typeof name !== 'string'
        || typeof length !== 'number'
        || length <= 0
        || !Array.isArray(students)
        || students.length === 0
    ) {
      throw new Error(
        'Invalid arguments. Name must be a string, length must be a positive number, and students must be a non-empty array',
      );
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number' || newLength <= 0) {
      throw new Error('Length must be a positive number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || newStudents.length === 0) {
      throw new Error('Students must be a non-empty array');
    }
    this._students = newStudents;
  }
}
