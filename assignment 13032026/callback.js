function f1(){
console.log("print f1")

}
setTimeout(()=>{
    f1();
    console.log("print time interval")
},2000)

function f2(){
console.log("print f2")

}
function f3(){
console.log("print f3")

}

f1();
f2();
f3();

