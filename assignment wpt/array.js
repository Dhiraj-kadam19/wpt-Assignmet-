// 1) take array of 10 elements 

// display array as it is 

// and use predefined methods of array and display 

// only even numbers , odd numbers and display whole array 
// in sorted way 


let arr=[10,20,40,12,34,5,7,1,0,66,77,88,99];

   console.log(arr);
   //even number define 
   let newarray=arr.filter((num)=>num%2==0);//predefined function
   console.log(newarray);
   //odd number defines
   let newArray=arr.filter((num)=>num%2!=0);
   console.log( newArray);
   //sort array with the help of sor pre defined function
   let d=arr.sort((n1,n2)=>n1-n2);
   console.log(d);