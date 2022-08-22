// ES6

//1. dung Constructor/protype way
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  console.log(this.name);
}
const evondev = new Person("Evondev");
evondev.getName();


//2. dung Class:  
class Person2 {
  constructor(name) {
      this.name = name;
  }
  getName() {
      this.name;
  }
  setName(newName){
      this.name = newName;
  }

  //method get va set
  get name() {
    return this._name;
  }
  set name(newName) {
      (this._name = newName);
  }
  // instance
  static checkGender(gender) {
    let name = gender === "male" ? "John" : "Anna";
    return (this._name = name);
  }
}
// cach thuong
const tuan = new Person2("tuan");
console.log(tuan.getName())  // lấy ra tên tuấn
tuan.setName('cana');        // gán tuấn bằng cana
console.log(tuan.getName())  // lấy ra cana 

//dung set and get, phải có cả set get thì mới ko bị lỗi
console.log(tuan.name)  // lấy ra tên tuấn
tuan.name = 'cana';     // gán tuấn bằng cana
console.log(tuan.name)  // lấy ra cana 

// instance
Person2.checkGender("female");
console.log("Person2", Person2.name);


//3. Class expression , giống function tao biến student gắn cho no class{}
// nó sẻ ko bị hosting nên ko dc để ngược, nên tốt nhât dùng class student{}
let Student = class {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
};
const evon = new Student("Evondev");
console.log(evon.name);

// 4. class truyền vào function
function company(aClass) {
  return new aClass();
}
let hello = company( //function company truyền class vào
  class {
    sayHello() {
      console.log("Hello");
    }
  }
);
hello.sayHello();

//5.
//a. Static method
// goi ra luôn mà không cần thông qua a = new b..
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(a, b) {
    return a.date - b.date;
  }
}
let articles = [
  new Article("HTML", new Date(2021, 1, 1)),
  new Article("CSS", new Date(2021, 0, 1)),
  new Article("JS", new Date(2021, 11, 1)),
];
articles.sort(Article.compare);
console.log(articles[0].title);

//b. Static properties
class Item {
  constructor(name) {
    this.name = name;
    this.constructor.count++;
    // this.constructor.propertyName
  }
  static count = 0;
  static getCount() {
    // className.propertyName
    return Item.count;
  }
}
const pencil = new Item("Pencil");
const laptop = new Item("Laptop");
console.log(Item.getCount());

//6. Super and extends
class person{
  constructor(name,age){
      this.name = name;
      this.age = age;
  }
  fullName(){
      console.log(this.name +" "+ this.age)
  }
}
var nhi1 = new person('yennhi',20)
nhi1.fullName()

class student extends person{
  constructor(name,age,college,className){
      super(name,age);
      this.college = college;
      this.className = className;
  }
}
var nhi2 = new student('nhi',18,'ct',12)
console.log(nhi2)