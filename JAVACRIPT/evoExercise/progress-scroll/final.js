const progress = document.querySelector(".progress");
window.addEventListener("scroll", function () {
  // khoảng cách của scrollbar so với phía trên khi scroll
  const scrollTop = window.pageYOffset;
  // chiều cao của document bao gồm scrollbar document.documentElement.scrollHeight
  // chiều cao của document ko bao gồm scrollbar document.documentElement.clientHeight
  //  Tính ra chiều cao của scrollbar
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const width = (scrollTop / height) * 100;
  progress.style.width = `${width}%`;
});



// const progress = document.querySelector('.progress')

// window.addEventListener('scroll',handle)
// function handle(){
//     sc = window.pageYOffset;
//     documentHeight = document.documentElement.scrollHeight;
//     viewHeight = document.documentElement.clientHeight;  
//     //có thể xem nó là c.cao của thanh scroll vì thanh scroll đang đứng yên
//     // xem như vị trí scroll này là 0
//     na = documentHeight - viewHeight;
//     // ra được c.cao của phần còn lại của thanh scroll

//     rate = sc*100/na;
//     progress.style.width = `${rate}%`
//     console.log(rate)
// }
