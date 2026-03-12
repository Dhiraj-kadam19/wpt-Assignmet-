// JavaScript
// 1) create 1 object which contains Book details 
//   and display data using by destructing that object 


let data={
    bookname:"sundaram",
    author:"raj ",
    publish:2000,
    price:200,

}
console.log(data);
let {price,publish}=data;
console.log(price + "      " + publish);