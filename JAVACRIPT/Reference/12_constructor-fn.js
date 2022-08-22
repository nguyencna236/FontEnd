//            Declaration, new, this, method, caution

// có nhiều function như sau, ko thể viết hêt được
var student = {
  name: "evondev",
  age: 28,
};
var student2 = {
  name: "john",
  age: 40
}

// nên dùng Constructor function
function Student(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    return `your name is ${this.name}`;
  };
}
let student2 = new Student("john", 40);

student2.class = 'siêu nhân'  //chỉ thêm vào biến na khi gọi biến khác sẻ mất                                 
Student.prototype.comment = 'ngu'   // thêm thẳng vào user 

console.log(student2)
console.log(student2.fullname())