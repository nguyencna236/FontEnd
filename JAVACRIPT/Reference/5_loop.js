
//                              for - Vòng lặp 
var numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
      console.log(`The index is ${i}`);
}
for (let i in numbers) {
  console.log(`The value is ${i}`);
}
for (let i of numbers) {
  console.log(`The value is ${i}`);
}

//                          while - do while
var number = 1;
while (number < 10) {
  console.log("number is "+number);
  number ++;
}

var number2 = 1;
do {
  number2++;
  console.log("number is " + number2);
} while (number2 < 10);


                          // BÀI TẬP
// 1. sao chép mảng dùng vòng lặp for
var numbers = [1, 2, 3, 4, 5];
let copyArr = [];
for (let i = 0; i < numbers.length; i++) {
  copyArr.push(numbers[i]);
}
console.log(copyArr);

// 2. Đảo ngược từ "i love" -> "evol i"
let str = "i love";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
  result = result + str[i];
}
console.log(result);
