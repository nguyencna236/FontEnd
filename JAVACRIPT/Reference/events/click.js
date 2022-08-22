//1. addEventListener
var button = document.querySelector(".button");
var span = document.querySelector(".button span");
function handleClick() {
  console.log("click button");
}
// Lỗi sai khi dùng function vào eventListener
button.addEventListener("click", handleClick());
// Đúng
button.addEventListener("click", handleClick);
button.addEventListener("click", function () {});

//2. event: e
span.addEventListener("click", function (e) {
  // e.stopPropagation();   // dừng nổi bột
  e.stopImmediatePropagation(); 
  console.log("click span");
}, {
  capture: true //:làm nổi bột từ ngoài vào trong
});
span.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("click span 2");
});
document.body.addEventListener("click", function () {
  console.log("click body");
});

//3. bubbling: nổi bọt
// sự kiện click chạy từ trong ra ngoài

//4. target vs currentTarget
button.addEventListener("click", function (event) {
  // event.target: nó sẽ chọn chính xác element mà mình click tới 
  console.log(`event.target: ${event.target}`);
  // event.currentTarget: nó sẽ chọn phần tử mà mình click ( cụ thể là button này)
  console.log(`event.currentTarget: ${event.currentTarget}`);
});

//5. event.preventDefault(); ngăn chăn hành vi mặc định
const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
  event.preventDefault();

  //6. Lấy custom attribute data-abc
  // event.target.dataset.name
  const name = event.target.dataset.name;
  console.log(name);
  // console.log()

  //7. selector.style.property = value
  event.target.style.property = value
  console.log(event.target);
  console.log(event.target.style);
  event.target.style.color = "red";
  // background-color -> backgroundColor
  // position -> position
});
