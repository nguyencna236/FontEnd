
//                IIFE - immediately invoked function expression
// đảm bảo tính toàn vẹn, ko thể thây đổi code
(function(){ console.log('lala')})();
//vd: người dùng ko the gan biến app.cars = null được
const app = (function(){
    const cars = [];
    return {
        add(car){
            cars.push(car)
        },
        edit(index,car){
            cars[index] = car
        }
    }
})

//                             SCOPE - phạm vi
//1. Global=> đứng đâu cũng truy cập được
    var na2 = 'haha'
//2. code block => trong khối mã{const,let} 
if(true){
    var   age1 = 13; //bên ngoài truy cập dc
    const age = 13; //bên ngoài ko truy cập dc
    console.log(age)
}
//3.Local scope => trong hàm{var,const,let}
function na(){
    var name = 'nguyen ca na'; //bên ngoài ko truy cập dc
    console.log(name)
};
na()

//4. trong phạm vi nhỏ hơn luôn có thể truy cập phạm vi lơn hơn,ngược lại thì ko
    const na1 = 'hahaha'
{
    {
        {
            console.log(na1)
        }
    }
}

//                                 Closure - tính khép kính
//=> là 1 hàm có thể ghi nhớ nơi được tạo ra và truy cập được biến bên ngoài phạm vi của nó
function create(){
    let counter = 0; // counter dc giữ private ko thể bị người dùng thay đổi 
    function increase(){
        return ++counter;
    }
    return increase
}
const counter1 = create() //gán fn vào biến counter1 và nhớ vị trí ban đầu của nó
console.log(counter1) //1
console.log(counter1) //2

//                          Hoisting
// 1.
console.log(na3) // ==> var na3
var na3 = 12     // ==> console.log(na3) ==> underfine : bị hoisting
                 // ==> na3 =12
// 2.
console.log(na3) 
let na4 = 12    // lỗi: bị hoisting,nhưng let const ko đc tạo giá trị 
const na44 = 12            

//                        Strict Mode - nhiêm ngặt
//thêm vào dòng 1(đầu file)của file js or đòng đầu trong fn: "use strict";
//1 .ko khai báo biến
age3 = "haha"
 // 12 => age2 global do ko khai báo biến
// 2. trùng tên
function sum(a,a){
    return a+a;
}
console.log(sum(2,5)) //10
// 3.dùng hàm ở phạm vi bên ngoài
// 4. ko cho sử dung những từ khóa của hệ thống, tương lai có thể có
// ==>có trict mode thì sẻ được báo lỗi, giúp code an toàn hơn

//                value types(kiểu tham trị) và reference types(kiểu tham chiếu)
// 1. value types(primitive dât types)   
// -string  -number  -boolean  -BigInt  -Symbol   -undefined  - null
// 2. reference types(non-primitive data types)
// -Object  -Array  -Function
const lala = {
    ha : 12,
    la : 34

}
function ja(){
    this.ha + this.la
}
console.log(ja.call([lala]))
