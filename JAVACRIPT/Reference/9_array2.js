
//                       "-----array.slice-----"
// Tạo ra một mảng copy của mảng ban đầu
const animals = ["tiger", "lion", "horse", "elephant"];
const animals2 = animals.slice();
// ["tiger", "lion", "horse", "elephant"];

// slice(start). start -> vị trí index ở trong mảng
const animals3 = animals.slice(1);
// ["lion", "horse", "elephant"]

// slice(start, end). start là vị trí bắt đầu, end là vị trí kết thúc
// nó sẽ sao chép từ vị trí start tới vị trí end - 1
const animals4 = animals.slice(1, 3);   // ["lion", "horse"]

const animals5 = animals.slice(-2); // lay 2 cai cuoi
console.log(animals5); 


//                           "-----array.splice-----"
// Nó sẽ xoá phần tử trong mảng hoặc thay thế phần tử trong mảng
var pets = ["dog", "cat", "bird", "dragon"];
// splice(start)
var pets2 = pets.splice(2);  
console.log(pets2);   // ["bird", "dragon"];        

// splice(start, deleteCount): deleteCount là số lượng phần tử muốn xoá hoặc thay thế
var pets3 = pets.splice(0, 4); // []

// splice(start, deleteCount, item1, item2, itemN): 
var pets3 = pets.splice(0, 2, "dinasour", "pig", false, 100);
console.log(pets);
// ["dinasour","pig", false, 100,"cat", "bird", "dragon"];

//                            "-----array.sort-----"
// Sắp xếp các phần tử trong mảng theo chuẩn unicode-16
const random = [1, 9999, 10000000, 5, 09];
console.log(random.sort());
// [1, 10000000, 5, 9, 9999]

// sort(function(a, b))
const random2 = random.sort(function (a, b) {
  if (a > b) return 1; // Sắp xếp theo tăng dần
  if (a < b) return -1; // Sắp xếp theo giảm dần
});
console.log(random2); // [1, 5, 9, 9999, 10000000]
// viet rut gon hon random2
const random3 = random.sort((a, b) => (a > b ? 1 : -1));
console.log(random3);

//                         "-----array.find-----"
// nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng thoả điều kiện nào đó
const numbers = [1, 9999, 10000000, 5, 09];
// Tìm phần tử đầu tiên trong mảng lớn hơn 10
const findYourNumber = numbers.find((element) => element > 10);
console.log(findYourNumber); // 9999 chi tim 1 phan tu
// Nếu không tìm thấy thì nó sẽ trả ra kết quả là undefined

//                      "-----array.findIndex-----"
// nó sẽ trả về vị trí index tìm thấy đầu tiên trong mảng thoả điều kiện nào đó
const findYourIndex = numbers.findIndex((element) => element < 10); 
console.log(findYourIndex);  // 1 ( 9999 o vi tri so 1)
// Nếu không tìm thấy thì sẽ trả ra kết quả là -1

//                           "-----array.map-----"
// duyệt qua từng phần tử trong mảng,thực hiện chứng năng và trả ra một mảng mới mà không thay đổi mảng ban đầu
const listNumber = [1, 2, 3, 4, 5];
// trả ra một mảng mới mà các (giá trị) trong mảng cũ nhân 2
// .map(callback(value, index, array))
const listNumberDouble = listNumber.map(function (value, index, array) {
  return value * 2;
}); 
console.log(listNumberDouble);
// [2, 4, 6, 8, 10]

//                       "-----array.forEach-----"
// cũng duyệt qua từng phần tử trong mảng nhưng ko trả về mảng mới(ko có return), thuong dung trong dom
// .forEach(callback(value, index, array))
const listNumberTripple = listNumber.forEach((value, index, array) => {
  return value * 3;
});
console.log(listNumberTripple); // trả về underfine vì ko có return tron forEach
// Hãy cho biết sự khác nhau giữa forEach và map ?
// - ko có return nên nó chạy ko dùng
// - ko trả vè mảnh mới

//                         "-----array.filter-----"
// Dùng để filter(sàng lọc) các phần tử trong mảng thoả điều kiện nào đó
// .filter(callback(value, index, array))
// const listNumber = [1, 2, 3, 4, 5];
const greaterThanThree = listNumber.filter((item) => item > 3);
console.log(greaterThanThree); //[4, 5]

//                           "-----array.some-----"
// Trả về true khi thoả 1 điều kiện và ngược lại trả vê false khi không thoả điều kiện nào cả
// chỉ cần 1 thăng đúng
const someNumber = listNumber.some((value) => value > 3);
console.log(someNumber);  // true

//                        "-----array.every-----"
// Chỉ trả về true khi tất cả điều kiện đều đúng, ngược lại chỉ cần 1 cái sai là nó sẽ return false
// tất cả đúng nó mới đúng
const everyNumber = listNumber.every((value) => value > 3);
console.log(everyNumber);   // false

//                        "-----array.reduce-----"
// gom các phần tử trong mảng lại thành 1
// .reduce((a, b) => {}, initialize value);
// tính tổng các phần tử trong mảng
const totalNumber = listNumber.reduce(function (previousValue, currentValue) {
  console.log(previousValue, currentValue);
  return previousValue + currentValue;
}, 0);
console.log(totalNumber);
