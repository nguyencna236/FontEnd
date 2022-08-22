
//            là những cái được lưu lại trên web : kiểm tra - application - localStorage

// 1. localStorage.setItem("key", "value")
localStorage.setItem("name", "evondev");

// 2. localStorage.getItem("key")
console.log(localStorage.getItem("name"));

// 3. localStorage.removeItem("key")
localStorage.removeItem("name"); // xóa từng cái

// 4. localStorage.clear()
localStorage.clear();     // xóa hết

// 5. nếu là mảnh hoặc objec thì phải lưu bằng json
let arr = [1, 2, 3, 4, 5];
localStorage.setItem("list", JSON.stringify(arr));
const newArr = JSON.parse(localStorage.getItem("list"));
console.log(newArr);
