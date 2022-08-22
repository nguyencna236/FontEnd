// function chen(title= "Welcome to notification"){
//     var content = `
//     <div class="noti">
//     <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
//     <div class="noti-content">
//       <h3 class="noti-title">${title}</h3>
//       <p class="noti-desc">
//         Lorem ipsum dolor sit amet consec tetur, adipisicing elit. Quisquam
//         dolor sit amet consec
//       </p>
//     </div>
//     </div>`
//     document.body.insertAdjacentHTML('afterbegin',content)
// }
// const randomData = [
//     "Welcome to javascript course",
//     "Welcome to this tutorial",
//     "Today is a good day",
//   ];

//   let lastTitle;
//   const timer = setInterval(function () {
//     const title = randomData[Math.floor(Math.random() * randomData.length)];
//       chen(title);
//     lastTitle = title;
//   }, 2000);