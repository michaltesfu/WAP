function Student(lastName, firstName, grades) {
  this.lastName = lastName;
  this.firstName = firstName;
  this.grades = grades;
}

Student.prototype.inputNewGrade = function (newGrade) {
  this.grades.push(newGrade);
};

Student.prototype.computeAverageGrade = function () {
  return this.grades.reduce((result, element) => (result + element), 0) / this.grades.length;
};

let student1 = new Student("michal", "tesfu", []);
let student2 = new Student("jossi", "sibhatu", []);
let student3 = new Student("Helen", "Berhane", []);
let student4 = new Student("Herzon", "Kidane", []);

student1.inputNewGrade(78);
student1.inputNewGrade(86);
student1.inputNewGrade(95);

student2.inputNewGrade(88);
student2.inputNewGrade(59);
student2.inputNewGrade(100);

student3.inputNewGrade(91);
student3.inputNewGrade(94);
student3.inputNewGrade(89);

student4.inputNewGrade(100);
student4.inputNewGrade(100);
student4.inputNewGrade(89);

st1Avg = student1.computeAverageGrade();
st2Avg = student2.computeAverageGrade();
st3Avg = student3.computeAverageGrade();
st4Avg = student4.computeAverageGrade();

console.log("Grade Average of Student 1: ", st1Avg);
console.log("Grade Average of Student 2: ", st2Avg);
console.log("Grade Average of Student 3: ", st3Avg);
console.log("Grade Average of Student 4: ", st4Avg);

let student = [st1Avg, st2Avg, st3Avg, st4Avg];
// printing the Average of all the students
console.log("Grade Average of all the students: ", student.reduce((result, element) => (result + element), 0) / student.length);
