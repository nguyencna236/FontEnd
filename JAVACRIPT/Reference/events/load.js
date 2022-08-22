// document.addEventListener("DOMContentLoaded")  : web load full thi moi chay, mạng chậm thì nó tải chậm
window.addEventListener("load", function () {
  console.log("your web loaded");
});


// window.addEventListener("load") :chỉ cần html tải xong là dc, chức năng nhiều tốn tg thì nó chậm
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
});

