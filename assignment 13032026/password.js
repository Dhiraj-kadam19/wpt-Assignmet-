function genarate(length)
{  
let password="";
  let pass='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!~@#$%^&*()_+=-;'

for(var i=0;i<length;i++){
    let pos =Math.floor (Math.random()*pass.length)
    password+=pass[pos];
    console.log(password);
}
//console.log(password);


}
genarate(5);
genarate(8);
genarate(10);