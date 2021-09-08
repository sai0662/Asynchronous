console.log("sai")
console.log("teja");
setTimeout(add, 3000);
console.log("potluri");

function add()
{
let sum=0;
  for(let i=0; i < 1000000000 ; i++)
  {
    sum += i;
  }
  console.log(sum);
}