                      // thêm xoá sửa node trong Javascript

// 1. Tạo ra Element trong Javascript:
const div = document.createElement("div");

// 2. selector.appendChild :thêm thể div vào body
const body = document.body;
body.appendChild(div);

div.classList.add("container");
div.className = "container wrapper";
div.textContent = "Lorem ipsum dolor"; // thêm nội dung dưới dạng string
div.innerHTML = `<div class="content"><h3></h3></div>`; // thêm nội dung ko tring
div.setAttribute("data-name", "evondev");

// 3. document.createTextNode
const text = document.createTextNode("Hello my name is Evondev");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);

// 4. element.cloneNode
// true: trả về y như h1
// ko chuyền: chỉ trả về là element của h1
const h1Clone = h1.cloneNode(true);
const h2Clone = h1.cloneNode();
body.appendChild(h1Clone);

// 5. element.hasChildNodes() 
//-> kiểm tra element có phần tử con hay không, có -> true, không thì trả về false
console.log(document.querySelector("h3").hasChildNodes()); // false


//                     insertAdjacent

// 1. element.insertAdjacentText(position, text)
const h3 = document.querySelector("h3");

h3.insertAdjacentText("beforebegin", "text");
h3.insertAdjacentText("afterbegin", "text");
h3.insertAdjacentText("beforeend", "text");
h3.insertAdjacentText("afterend", "text");

// 2. element.insertAdjacentElement(position, node)
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend", strong);

// 3. element.insertAdjacentHTML
const template = `
<ul class="menu2">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>`;
document.body.insertAdjacentHTML("beforeend", template);


//             attribute -> thuộc tính: href, id, class, src, style

// 1. selector.getAttribute("attribute") -> lấy ra giá trị của attribute selector
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));

const li = document.querySelectorAll(".item");
li.forEach((item) => {
  console.log(item.getAttribute("class"));
});
console.log(li);

// 2. selector.setAttribute("attribute", value) -> set giá trị cho attribute nào đó của selector
const listLinks = document.querySelectorAll("a.link");
link.setAttribute("target", "_blank");
listLinks.forEach((item) => item.setAttribute("target", "_blank")); // targer = "_blank"

// 3. selector.removeAttribute("attribute") -> xoá attribute của selector
const p = document.getElementById("spinner");
p.removeAttribute("styles");

// 4. selector.hasAttribute("attribute") -> kiểm tra selector có attribute nào đó hay không
console.log(p.hasAttribute("class")); // false
console.log(p.hasAttribute("id")); // true
if (p.hasAttribute("id")) {
  // do something here
}