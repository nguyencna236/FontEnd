
//                         if -else
var fruit = "lemon";
if (fruit === "apple") {
  console.log("You like to eat apple");
}
else if (fruit === "lemon") {
  console.log("You like to eat lemon");
}
else if (fruit === "watermelon") {
  console.log("You like to eat watermelon");
}
           
//                           switch - case
var fruit = "lemon";
switch (fruit) {
  case "apple":
    console.log("You like to eat apple");
    break;
  case "watermelon":
  case "lemon":
    console.log("You like to eat lemon and water melon");
    break;
  default:
    console.log("You like to eat orange");
    break;
}

//                        Ternary operator
const yourAge = 15;
let message2 = yourAge >= 18 ? "OK" : "NO";

let message3 =
  yourAge >= 18
    ? "You are adult"
    : yourAge <= 10
    ? "You are still a child"
    : "You are a young boy";

