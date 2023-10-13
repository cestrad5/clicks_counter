function getListStudents() {
    return [
      { firstName: 'Guillaume', id: 1, location: 'San Francisco' },
      { firstName: 'James', id: 2, location: 'Columbia' },
      { firstName: 'Serena', id: 5, location: 'San Francisco' },
    ];
  }
  


function getStudentIdsSum(arr) {
    return arr.reduce((acc, item) => acc + item.id, 0)
}

const students = getListStudents();
const value = getStudentIdsSum(students);
console.log(value);