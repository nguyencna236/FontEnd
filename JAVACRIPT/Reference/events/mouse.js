const button = document.querySelector(".button");
// mousemove, mouseover, mouseenter, mouseleave

// 1.mousemove: rê chuột trên 1 phần tử nó sẻ chạy liên tục
button.addEventListener("mousemove", function () {
  console.log("mousemove");
});

// 2.mouseover: nó sẽ chạy khi rê chuột vào phần tử và con của phần tử đó, mổi lần rê sẻ chạy 1 lần
button.addEventListener("mouseover", function () {
  console.log("mouseover");
});

// 3.mouseenter: nó sẽ chạy khi rê chuột vào phần tử đó,  mổi lần rê sẻ chạy 1 lần
button.addEventListener("mouseenter", function () {
  console.log("mouseenter");
});

// 4.mouseleave: nó sẽ chạy khi rê chuột vào phần tử rồi rê ra ngoài,  mổi lần rê sẻ chạy 1 lần
button.addEventListener("mouseleave", function () {
  console.log("mouseleave");
});

// 5.pageX, pageY, clientX, clientY
document.addEventListener("mousemove", function (event) {
  console.log(`pageY: ${event.pageY}`);
  console.log(`clienY: ${event.clientY}`);
});
// clientY: nó sẽ lấy toạ độ theo viewport : đo theo chiều dài đang nhìn thấy
// pageY: nó sẽ lấy toạ độ của document, khi mà có scroll thì nó sẽ thay đổi
// X: Chiều ngang
// Y: Chiều dọc
