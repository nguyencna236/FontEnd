1.
document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded");
});
const button = document.querySelector(".button");


// 2. removeEventListener
function handleMouseMove(e) {   //phải đưa về 1 function riêng bên ngoài rồi chuyên vào sự kiện
  console.log(e.clientX);
}
document.addEventListener("mousemove", handleMouseMove);
button.addEventListener("click", function () {      // click chuot vao thì sự kiện ko chạy nửa
  document.removeEventListener("mousemove", handleMouseMove);
});

// 3. khác biện giửa onclick và addEventListener
// event handler
function handleClick() {
  console.log("clicked1");
}
function handleClick2() {
  console.log("clicked2");
}
// onclick: chấp nhận 1 event handler
// button.onclick = handleClick;
// button.onclick = handleClick2; // ra sự kiện click cuối cùng

// addEventListener: chấp nhận nhiều event handler cùng lúc
button.addEventListener("click", handleClick); 
button.addEventListener("click", handleClick2, {
  once: true,  // thâm số thứ 3 khi chuyền vào như vậy thì su kiện chỉ chạy 1 lần duy nhất, 
}); 
// onmousemove, onmousedown

// Các sự kiện khác: touchstart, touchmove, touchend, dragstart, dragenter, dragover, dragleave, dragend, drop mà các bạn có thể tự tìm hiểu thêm
