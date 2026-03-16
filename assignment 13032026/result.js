// 3) In assignment 1 code add 
//    result function which accept 2 parameters 
//     result(error , result)
//     and add condition check in divide & multiplication function 
//    if 2nd parameter is zero display error message 
// 
function result(e,r){

if(e){
    console.log(e.message)
}else{
    console.log("result"+r);
}

}
function addition(a ,b){
   
   console.log("addition of a number");
    return a+b

}
function  multiplication(a,b,callback){
    if(a==0){
        callback(new Error("multiplication of a numberzero is ==0"),null)
    }else{
        callback(null,(a*b))
    }

    
}
function division(a,b,callback){
    if(b==0){
    callback (new Error("division by zero not possible"),null)
    }else{
        callback(null,(a/b))

    }
    
}
function subtraction(a,b){
console.log("subtraction of a  number");
 return a-b
}
function demo(a,b,callback){
   
    return callback (a,b)

}

// console.log(demo(32,31 ,multiplication))
// console.log(demo(32,31 ,subtraction))
// console.log(demo(32,0 ,addition))
// console.log(demo(12,12,division))
// // console.log(division(32,31 ,result))
console.log(multiplication(0,54 ,result))





















