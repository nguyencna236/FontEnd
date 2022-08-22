// 1. textContent 
//-> lấy ra nội dung(only text) bao gồm text trong html tag(nếu có) của selector
const spinner = document.querySelector("#spinner");
console.log(spinner.textContent);

// 2. innerText : 
//lay dược chữ bên trong html, ko lay nd text con và xuống dòng thẻ .... sử dung it
console.log(spinner.innerText);
spinner.textContent = `<div class="demo">hello html</div>`;

// 3. innerHTML 
//-> lấy ra nội dung của selector bao gồm cả HTML
console.log(spinner.innerHTML);
spinner.innerHTML = `<div class="demo">hello html</div>`;
