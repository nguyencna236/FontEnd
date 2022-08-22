
// Số nguyên: 1 2 3 999 33 444
// Số thập phân: 3,4 5,8 -> 3.4, 5.8
console.log(5 + 7);
console.log(typeof 10); // number

// chuyển thành chuổi
const number1 = "5";
const number2 = "4.8";
console.log(parseInt(number1)); // 5
console.log(parseFloat(number2)); // 4.8

// giá trị tuyệt đối
const number3 = -10;
console.log(Math.abs(number3)); // 10

// Làm tròn xuống 
console.log(Math.floor(4.3));  // 4
// Làm tròn lên
console.log(Math.ceil(4.3));  // 5
// Làm tròn gần nhất
console.log(Math.round(4.5)); // 4.5 -> 5, dưới 4.5 -> 4

// lấy số thập phân
var number =  0.33333333
console.log(n.toFixed(2)) // 0.33

// random ra số ngẫu nhiên từ 1-10
console.log(Math.ceil(Math.random() * 10)); //dùng .ceil đẻ làm tròn

// trả ra con số lớn nhất
console.log( Math.max(1, 2, 3) ); // 3
// trả ra con số nhỏ nhất
console.log( Math.min(1, 2, 3) ); //1

// hàm mủ 3^2 -> 9
console.log(Math.pow(3, 2)); // 9

// isNaN(value) ko phải số thì đúng
// NaN -> Not a Number
console.log(isNaN("this is a string")); // true
console.log(isNaN("12345")); // ->  false
console.log(isNaN(12345)); // ->  false
console.log(isNaN(NaN)); // true

// Number.isNaN(value) là NaN thì mới đúng
console.log(Number.isNaN("12343")); // false
console.log(Number.isNaN(12343)); // false
console.log(Number.isNaN(NaN)); // true
