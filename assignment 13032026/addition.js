// 1) write a function addition  , multiplication 
//                               division , subtraction which accepted 2 parameters   
// 	write result function which accept 3 parameters 
     
//                result (a1 , a2 , callback)

// pass callback parameters while calling


function addition(a ,b){
   
   console.log("addition of a number");
    return a+b

}
function  multiplication(a,b){
    
   console.log("print  multiplication");
    return a*b
}
function division(a,b){

    console.log("division of two num");
    return a/b
}
function subtraction(a,b){
console.log("subtraction of a  number");
 return a-b
}
function demo(a,b,callback){
   
    return callback (a,b)

}

console.log(demo(32,31 ,subtraction))
console.log(demo(32,31 ,subtraction))
console.log(demo(32,31 ,addition))
console.log(demo(32,31 ,multiplication))
