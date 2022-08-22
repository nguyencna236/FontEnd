
//                        2 cách tạo mảng
// c1: array literal
var students1 = ["evondev", "tuan", "nam", "thanh", "trung"];
// c2: array constructor
var students2 = new Array();

// Truy xuất -> array[index] : ko có = undefined
console.log(students1[1]);   //tuan
console.log(students1[555]); //undefined

//                        Method
const students1 = ["evondev", "tuan", "nam", "thanh", "trung", "tuan"];

// length -> trả về độ dài của mảng
console.log("-----array.length-----");
console.log(students1.length);

// reverse -> Đảo ngược giá trị trong mảng
console.log("-----array.reverse-----");
console.log(students1.reverse());

// join -> nối các phần tử trong mảng thành chuỗi
console.log("-----array.join-----");
console.log(students1.join("-")); 

// includes -> Kiểm tra phần tử nào đó có trong mảng hay không?
console.log("-----array.includes-----");
console.log(students1.includes("evondev")); // true
console.log(students1.includes("evondev2")); // false

// Lấy phần tử cuối 
console.log(students1[students1.length - 1]);

// indexOf -> trả về vị trí của phần tử tìm thấy đầu tiên 
console.log("-----array.indexOf-----");
console.log(students1.indexOf("tuan"));

// lastIndexOf -> trả về vị trí của phần tử tìm thấy cuối cùng
console.log("-----array.lastIndexOf-----");
console.log(students1.lastIndexOf("tuan"));

// push -> thêm phần tử vào cuối mảng
console.log("-----array.push-----");
console.log(students1.push("javascript"));
console.log(students1);

// unshift -> thêm phần tử vào đầu mảng
console.log("-----array.unshift-----");
console.log(students1.unshift("Frontend"));

// pop -> xoá phần tử cuối cùng trong mảng
console.log(students1);
students1.pop();
console.log(students1);

// shift -> xoá phần tử đầu tiên trong mảng
console.log(students1);
students1.shift();
console.log(students1);