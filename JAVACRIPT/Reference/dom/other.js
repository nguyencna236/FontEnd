
//1. document.title -> thẻ title của trang web
console.log(document.title); // Javascript
document.title = "Welcome to Javascript course";

//2. document.head
console.log(document.head);
// <meta name="viewport" content="width=device-width, initial-scale=1.0" />
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1.0");

//3. document.head.appendChild(meta);
const head = document.getElementsByTagName("head");
head[0].appendChild(meta);
console.log(head);

//4. insertBefore
// parentNode.insertBefore(newnode, existingnode) chuyển ul lên trên đầu h3 
const ul = document.querySelector("ul");
document.body.insertBefore(ul, document.querySelector("h3").nextElementSibling);
// insertAdjacentElement
document.querySelector("h3").insertAdjacentElement("beforebegin", ul);

//5. replaceChild  // thay thế
// node.replaceChild(newnode, oldnode);
const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span, document.querySelector(".boxed"));

//6. convert HTML collection, NodeList to Array
//C1. 
const li = document.getElementsByTagName("li");
li.forEach((item) => item);

//C2. Array.from(HTML collection or NodeList)
// [...HTMLCOLLECT], [...NodeList]
[...li].filter((item) => item);
[...li].forEach((item) => item);
console.log(li);


// html: document.documentElement
// body: document.body
// head: document.head
// title: document.title
