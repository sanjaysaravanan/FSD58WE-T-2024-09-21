setTimeout(() => {
  console.log("Time Out 1");
}, 1000);

let fun = async () => {
  console.log("inside async line 7");
  let response = await fetch("https://emojihub.yurace.pro/api/random");
  let data = await response.json();
  console.log(data);
};

let fun2 = async () => {
  console.log("inside async 2");
  let response = await fetch("https://emojihub.yurace.pro/api/random");
  let data = await response.json();
  console.log(data);
};

fun();
fun2();

console.log("sample");
console.log("checking");
