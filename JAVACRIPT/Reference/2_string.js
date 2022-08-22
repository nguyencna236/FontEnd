                                       //String(Chuỗi)
// double quotes, single quote
"My name is" + "Evondev";
'Hello world';

// backticks (template literal)
`I am frontend ${variable} developer`;

                        //chuyển chuổi thành số
console.log(parseFloat("4.5")); // 4.5 
console.log(parseInt("4.5")); // 4 

                      // split :cắt tring => arr
var myStr = "Frontend Developer ";
console.log(myStr.split(" ")); // ["Frontend", "Developer"]
console.log(myStr.split("")); // ["F","r","o","t","e"]
console.log(myStr.split("/")); // ["Frontend Developer"] vì ko có /

                      // chử hoa - hường
console.log(myStr.toLowerCase()); // frontend developer
console.log(myStr.toUpperCase()); // FRONTEND DEVELOPER

                        // kiểm tra 
const myStr1 = "Frontend Developer ";
// có bắt đầu bằng chử frontend ko
console.log(myStr1.startsWith("frontend")); // true 
// có kết thúc bằng chử Developer ko 
console.log(myStr1.endsWith("Developer")); // true  
// có chử end ko
console.log(myStr1.includes("end"));       // true  

                          // tìm index
var myStr = "Frontend Developer ";
console.log(myStr1.indexOf("e"));  // 5
console.log(myStr1.lastIndexOf("e")); // 16

/* thay thế chuổi:*/   myStr.replace("Developer", "Designer");
/* lập lại chuổi:*/    myStr.repeat(5);

                    // slice(start, end);
// lấy chuổi giống .myStr
var myStr= "Frontend Developer D";
console.log(myStr.slice(0, 8)); // Frontend
console.log(myStr.slice(0)); // Frontend Developer D
console.log(myStr.slice(-5)); // per D
console.log(myStr.slice(9999)); //

                // loại bỏ khoản trống trim
var myStr= "   Frontend Developer D   ";
console.log(myStr.trim()); // remove space left and right
console.log(myStr.trimStart()); // remove space left
console.log(myStr.trimEnd()); // remove space right

                    // charAt: lấy ra một kí tự
var myStr2 = "Frontend";
console.log(myStr2.charAt(1)); // r

              // Lấy ra 1 phần của chuỗi(string)
var myStr2 = "Frontend";

// substr(index, length)
console.log(myStr.substr(1, 5)); // ronte
// substring(start index, end index);
console.log(myStr.substring(1, 5)); // ront



// bài tập: Loại bỏ khoảng trống 2 bên, đưa tất cả về IN HOA, 
// thay chữ `Developer` thành chữ `ca`, sau đó repeat 2 lần;
var myStr = "Frontend Developer";
console.log(
  `Result of myStr: ${myStr
    .trim()
    .replace("Developer", "ca")
    .toUpperCase()
    .repeat(2)}`
);
