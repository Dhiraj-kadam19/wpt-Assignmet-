// 2)  declare 1 variable which contains data for 
//     Object format convert that data in json format
//     and again in Object Format 



let data={
    bookname:"sundaram",
    author:"raj ",
    publish:2000,
    price:200,

}
console.log(data); //obj data will print
// let {price,publish}=data;
// console.log(price + "      " + publish);

// let obj =JSON.parse(data)
// console.log(obj);


let obj2=JSON.stringify(data) //sting data format data is print

console.log(obj2);





