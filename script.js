let minus = document.querySelector(".minus");
let rest = document.querySelector(".Reset");
let plus = document.querySelector(".plus");
let number = document.querySelector(".number");

let num = 0;
////////////////////////////////////////////////////

plus.addEventListener("click", function () {
  num = ++num;
  number.innerHTML = num;
  number.style.color = "rgb(251, 250, 45)";
});
minus.addEventListener("click", function () {
  num = --num;
  number.innerHTML = num;
  number.style.color = "rgb(213, 113, 6)";
});
rest.addEventListener("click", function () {
  num = 0;
  number.innerHTML = num;
  number.style.color = "white";
});
