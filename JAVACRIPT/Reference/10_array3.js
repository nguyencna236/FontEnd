
//                              By value vs By referrences

// By value -> giá trị thực sự được lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); // true

// By referrences -> nói tới vùng bộ nhớ
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); // false

// sử dung json để so sánh 2 mảng
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str); // true

//                          JSON: Javascript Object Notation

// JSON.stringify(value) -> convert giá trị sang dưới dạng JSON string
console.log(JSON.stringify([1, 2, 3]));

// JSON.parse("[1,2,3]") -> [1,2,3] -> convert giá trị từ json sang giá trị khác
console.log(JSON.parse("[1,2,3]"));


//                    clone sao chép ra mảng mới
const students = ["a", "b", "c", "d", "e"];

// 1. sử dụng phương thức slice() để sao chép ra mảnh mới 
//rồi sủ lý xóa pt cuối .pop để mảnh ban đầu ko bị thay đổi
const sliceStudents = students.slice();
sliceStudents.pop(); 
console.log(students);

// 2. spread operator [...array] cũng dùng để sao chép như c1
const spreadStudents = [...students];
console.log(spreadStudents);

//                          nối array
// 1. array1.concat(array2, array3, arrayN);   
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray);

// 2. spread operator  [...array]
const mergeArray2 = [...array1, ...array2, ...array3];
console.log(mergeArray2);

// destructuring array
const toys = ["ball", "sword", "arrow", "magic", "water", "fire"];
var a = toys[0]; // ball
var b = toys[1]; // sword
var c = toys[2]; // arrow
console.log(a, b, c);

// 1.lấy giá trị ra -> destructuring array
const [a, b, c] = toys;

// 2.lấy giá trị còn lại-> rest parameter ...
// a.mảnh
const [ball, ...rest] = toys;
console.log(rest);
// b.function
function demo(a, ...rest) {
  console.log(a, rest);
}
demo(1, 2, 3, 4, 5); //[2,3,4,5]
