// 4) understand promise concept and implement
// in your code 


// let p = new Promise
//     ((resolve, reject) => {
//         let n = 4;
//         if (n % 2 != 0)
//             resolve("number " + n + "is even number ")
//         reject("false")
//     });
// //then  resolved    reject  error 
// p.then((message => console.log(message)))
//     .catch((error) => console.log(error))

 let arr=[1,34,46,66,,77,77,77,222,2,66];
    let p=new Promise((resolve,reject)=>{
       // let arr=[1,34,46,66,66,77,77,77,77,77,77,222,2,66,];
        for(var i=0;i<=10;i++){
            if(arr[i]%2==0)
                resolve("number"+arr[i]+ "is even number");
            reject("odd number "+arr[i]);
        }
    })
    p.then((message=>console.log(message)))
    .catch((Error) => console.log(Error));
 