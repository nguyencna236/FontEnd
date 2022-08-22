// 1. selector.classList.add("abc")
var container = document.querySelector(".container");
container.classList.add("is-active");

// 2. selector.classList.remove("abc")
container.classList.remove("container");

// 3. selector.classList.contains("container")
console.log(!container.classList.contains("container")); // false
console.log(container.classList.contains("is-active")); // false

// 4. selector.classList.toggle("is-active"); 
container.classList.toggle("is-active");

