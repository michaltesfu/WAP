let student = {
  lastName: "",
  firstName: "",
  grades: [],
  inputNewGrade: function (newGrade) {
    this.grades.push(newGrade);
  },
  computeAverageGrade: function () {
    return this.grades.reduce((result, element) => (result + element), 0) /this.grades.length;
  },
};

let student1 = Object.create(student);
let student2 = Object.create(student);
let student3 = Object.create(student);
let student4 = Object.create(student);

student1.lastName = "Michal";
student1.firstName = "Tesfy";
student1.grades=[];
student1.inputNewGrade(78);
student1.inputNewGrade(86);
student1.inputNewGrade(95);

student2.lastName = "Jossi";
student2.firstName = "Sibhatu";
student2.grades=[];
student2.inputNewGrade(88);
student2.inputNewGrade(59);
student2.inputNewGrade(100);


student3.lastName = "Helen";
student3.firstName = "Tesfu";
student3.grades=[];
student3.inputNewGrade(98);
student3.inputNewGrade(91);
student3.inputNewGrade(69);


student4.lastName = "Aida";
student4.firstName = "Tesfu";
student4.grades=[];
student4.inputNewGrade(100);
student4.inputNewGrade(100);
student4.inputNewGrade(89);


st1Avg = student1.computeAverageGrade()
st2Avg = student2.computeAverageGrade()
st3Avg = student3.computeAverageGrade()
st4Avg = student3.computeAverageGrade()

console.log(st1Avg);
console.log(st2Avg);
console.log(st3Avg);
console.log(st4Avg);

let students = [st1Avg, st2Avg, st3Avg];
// printing the Average of all the students
console.log(students.reduce((result, element) => (result + element), 0) /students.length);





