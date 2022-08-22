// 1. keydown: Hoạt động khi nhấn bàn phím xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", function (e) {
  console.log(e.key);  // e.key: trả về key nhập vào
  console.log(e.keyCode); // trả về số ứng với key nhập vào
  console.log(e.which);  // trả về số ứng với key nhập vào
  // ==> ascii MDN: nên dùng e.key thôi
  if (e.key === "Enter") {
    console.log("You hit Enter!");
    e.preventDefault();// ngăn chặn hành vi mặc định, như nhấn enter rồi thì ko cho nhập nữa
  } else {
    console.log(e.key);
  }
  console.log(e.key);
  if (e.key === "Home") {
    console.log("working");
  }
});

// 2. keyup: Sự kiện này sẽ xảy ra khi nhấn phím rồi thả ra
input.addEventListener("keyup", function (e) {
  console.log(e.key);
   // ko có e.preventDefault()
});

// 3. keypress: sự kiện này xảy ra khi các bạn nhấn phím.
// keypress sẽ ignore các phím như 
//delete, mũi tên, page up, page down, home, end, ctrl, alt, shift, esc
// Thứ tự ưu tiên keydown -> keypress -> keyup
input.addEventListener("keypress", function (e) {
  console.log(e.key);
  if (e.key === "Home") {
    console.log("working");
    // dùng được e.preventDefault()
  }
});

// 4. change: xảy ra khi gõ xong, nhấn Enter hoặc nhấn chuột ra ngoài 1 lần
input.addEventListener("change", function (e) {
  console.log("working");
});

// 5. focus : nhấp chuột vào là chạy
input.addEventListener("focus", function (e) {
  console.log("input is focusing");
});

// 6. blur : là khi focus mà nhấn ra ngoài thì hoat động
input.addEventListener("blur", function (e) {
  console.log("input is blur");
});

// 7. submit form
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = this.elements["username"].value;
  const password = this.elements["password"].value;
  if (!username) {
    alert("please enter your username");
    return;
  }
  if (!password) {
    alert("please enter your password");
    return;
  }
  if (password.length <= 3) {
    alert("too short");
    return;
  }
}

