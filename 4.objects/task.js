function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let student1 = new Student("Ivan", "Male", 18);
let student2 = new Student("Denis", "Male", 19);
let student3 = new Student("Maria", "Female", 20);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};
student1.setSubject("Algebra");
student2.setSubject("History");
student3.setSubject("Geography");

Student.prototype.addMarks = function (...marks) {
  if (this.marks != undefined) {
    this.marks.push(...marks);
    }
};
student1.addMarks(3, 4, 5, 2);
student2.addMarks(5, 5, 5);
student3.addMarks(2, 2, 2, 2);

Student.prototype.getAverage = function () {
  if ((this.marks == undefined) || (this.marks.length == 0)) {
    return 0
  }
  let sum = 0;
  this.marks.forEach(item => sum += item);
  return sum / this.marks.length;
  };

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
