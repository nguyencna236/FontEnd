
// String.prototype, Number.prototype,.. : là cha của các method string, number,...

var str = "abc";
str.toUpperCase();

// vd1: tạo ra 1 prototype
var str = "abc";
String.prototype.duplicate = function () {
  return this + this;
};
console.log(str.duplicate()); //abcabc

// vd2 :
function Girl() {
  this.cook = function () {
    console.log("your girlfriend can cook");
  };
}
Girl.prototype.sing = function () {
  console.log("your girlfriend can sing");
};
Object.prototype.makeSandwich = function () {
  console.log("make sandwich");
};
let jane = new Girl();
jane.cook();
jane.sing();
jane.makeSandwich();


//    1. tạo hàm map2()
var course = ['js','PHP','Ruby','java','PHP']

Array.prototype.map2 = function(call){
        var output = [], arraylength = this.length;
        for( var i = 0; i < arraylength; i++){
                var result = call( this[i], i);
                output.push(result) 
        }
        return output;
}
var html = course.map2( function(x){
        return `<h2>${x}</h2>`
} )
console.log(html.join(''))

// 2. tạo hàm filter2() 
var course = ['js','PHP','Ruby','java','PHP','js','js']

Array.prototype.filter2 = function( bao ){
        result = [], len = this.length
        for( i=0; i<len; i++ ){
                var x = bao(this[i])
                if(x==true){
                result.push(this[i]) }
        }
        return result
}
var tim = course.filter2( function(save){ 
        return save === 'Ruby'} )
console.log(tim)

// 3. tạo hàm find2()
var course = ['js','PHP','Ruby','java','PHP','js','js']

Array.prototype.find2 = function(bao){
        var result = '', len = this.length
        for( i=0; i<len; i++){
                var x = bao(this[i])
                if(x){
                        result = this[i]
                }
        }
        return result
}
var tim = course.find2( function(fin){
        return fin === 'PHP'
} )
console.log(tim)


