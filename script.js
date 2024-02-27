let minus = document.querySelector(".minus");
let rest = document.querySelector(".Reset");
let plus = document.querySelector(".plus");
let number = document.querySelector(".number");

let num = 0;
////////////////////////////////////////////////////

plus.addEventListener("click", function () {
  num = ++num;
  number.innerHTML = num;
});
minus.addEventListener("click", function () {
  num = --num;
  number.innerHTML = num;
});
rest.addEventListener("click", function () {
  num = 0;
  number.innerHTML = num;
});
