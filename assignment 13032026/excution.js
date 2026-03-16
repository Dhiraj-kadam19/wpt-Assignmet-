// 5) write a code which contains 
//    normal function 
//    setTimeout
//    Promise
//    Console.log()

// and understand execution sequence 


console.log("welcome to first line in the consol")//first output sequence
let d=new Promise((resolve, reject) => {
    let n=17;
    if(n%2==0)
        resolve("peint the number"+n+"even or not ")
      reject("print odd")


})
d.then((Message => console.log("then message will be print in the console")))//third yime output in the consol
.catch((error) => console.log("print the error"));

function data(){
    console.log("print the data function")//second time output in the consol
}

setTimeout(() => {
    console.log("set the timeout")//fourt output in the consol
}, 2000);
//
 let myinterval =setInterval(() => {
    console.log("set the time interval")
}, 3000);

clearInterval(myinterval);
data();







