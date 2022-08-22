
//                      Cách khai báo object
// 1.object constructor
const objectConstructor = new Object();
// 2. object literal 
const objectLiteral = {};

vd: const student = {
         name: "na",
         "last-name": "ca",
         male: true,
         hi: function () {
         console.log("hello cana");
  },
};

                   
//        truy xuất giá trị của object
// 1 Dot notation object.key
console.log(student.name);
// 2 Bracket notation ["key"]
console.log(student["age"]);
console.log(student["last-name"]);

//          Thay đổi giá trị của Object
student.age = 20;
student.male = "male";

//              thêm key vào object
student.isDeveloper = true;
student["is-developer"] = false;
student.hello = function () {
  console.log("hello");
};
console.log(student);

//        Cách xoá giá trị trong Object
delete student["last-name"];

//                for in
// 1. lấy ra các key
for (let key in student) {
  console.log(key);
}
// 2 . vd
for (let key in student) {
  if (key === "name") {
    console.log("hello name");
  }
  const value = student[key];
  console.log(`${key}:${value}`);
}

// Object.keys(object) -> trả về 1 mảng chứa tất cả các keys của object
const student = {
  name: "evondev",
  age: 27,
  male: true,
}
const arr = Object.keys(student);
console.log(arr);       //[name,age,mele]
console.log(arr.length); // 3

// Object.values(object) -> trả về 1 mảng chứa tất cả các giá trị của object
const values = Object.values(student);
console.log(values);  // ["evondev",27,true]

// Object.entries(object) -> [["name", "evondev"], ["age", 20],['male', true]] 
const entries = Object.entries(student);
console.log(entries);

// Object.assign
// 1 . gộp object
const a = { firstName: "tuan", };
const b = { lastName: "tran",  };
const c = Object.assign(a, b); 
console.log(c);
// 2. cũng gộp object
const d = { ...a, ...b };
console.log(d);


// Object.freeze(object) -> ngăn chặn chỉnh sửa key và value của object
const car = { brand: "BMW", };
const newCar = Object.freeze(car);

// Object.seal(object) -> cho phép chỉnh sửa key value nhưng không được thêm key value mới
const user = { userName: "evondev", };
var newUser = Object.seal(user);
newUser.userName = "tran anh tuan"; // được
newUser.lastName = "john";       // ko được

// {...object} sao chép ra ob khác để sủa, để giá trị gốc ko bị hay đổi
// spread operator to copy object
var newUser = { ...user };
newUser.userName = "trananhtuan";

// Object.assign để sao chép
var newUser2 = Object.assign({}, user);
console.log(newUser2);

// clone nested object : sao chép object phức tạp
var newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name = "Designer";
console.log(newUser3);

// this keyword: object gần nhất -> this = student2
var student2 = {
  name: "evondev",
  age: 27,
  male: true,
  hi: function () {
    console.log(`my name is ${this.name} and i am ${this.age} years old`);
  }
};
student2.hi();

// optional chaining : kiểm tra key có tồn tại
console.log(student2.fullname?.name);

// destructuring object
// 1. phức tạp
var name = student2.name;
var age = student2.age;
var male = student2.male;
// 2. đơn giản
const { name, age, male, ...rest } = student2; // lấy ra 3 object
console.log(rest);                              // lay ra ob con lai

// cach1: NORMAL Function
function whatYourInfo(name, age, school) {
  console.log(name, age, school);
}
whatYourInfo("evondev", 27, "Cao Thang"); // truyền value vào ob đúng
whatYourInfo(27, "Cao Thang", "evondev"); // truyền value vào ob sai vì ko nhớ thứ tự

// cach2: function with object paremeter
function whatYourInfo(obj) {
  console.log(obj.name, obj.age, obj.school);
}
const newObj = {
  school: "Cao Thang",
  age: 27,
  name: "evondev",
};
whatYourInfo(newObj);

// cach3: object destructuring parameter
function whatYourInfo2({ name, age, school }) {
  console.log(name, age, school);
}
whatYourInfo2({
  school: "Cao Thang",
  age: 28,
  name: "Tuan",
});
