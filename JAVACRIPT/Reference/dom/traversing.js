
// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode.parentNode); //cham ra han tu cha ,cham nua ra han tu ong...
console.log(span.parentElement.parentElement); //cham ra han tu cha ,cham nua ra han tu ong... nhu tren

// selector.parentNode hoặc selector.parentElement.removeChild(selector) : xoa element
span.parentNode.removeChild(span); // = span.remove();

// 2. nextElementSibling: tìm tới phần tử kế tiếp 
//    previousElementSibling: tìm tới phần tử đứng sau nó
const nextSpan =
  span.nextElementSibling.nextElementSibling.parentElement.nextElementSibling.previousElementSibling;
console.log(nextSpan);
const previousLink = span.previousElementSibling;
console.log(previousLink);

// 3. childNodes: trả về 1 mảng  các node bên trong bao gồm textNodes 
//    children: trả về các node không bao gồm textNodes
console.log(span.childNodes); // [text, strong, text] lay ra text: khoan trang va the strong
console.log(span.children[0]); // [srong] ko lay text node

// 4. firstChild vs firstElementChild
console.log(span.firstChild); // #text (là khoản trẳng giủa thẻ span và thẻ strong)
console.log(span.firstElementChild); // <strong>cana<strong> (lấy element trong thẻ span)

// 5. lastChild vs lastElementChild
console.log(span.lastChild); // #text (là khoản trẳng giủa thẻ span và thẻ strong)
console.log(span.lastElementChild); // <strong>cana<strong> (lấy element trong thẻ span)

// => lấy ptu đầu thì 4, ptu cuối thì 5, còn lấy ở giửa 2 3 4 ... thì dùng số 3 trả về mảng để lấy ra

// 6. nextSibling vs previousSibling
console.log(span.nextSibling);
console.log(span.previousSibling);
