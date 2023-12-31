let container = document.querySelector(".container");
let btn = document.getElementById("spin");

// 初回乱数を生成
let number = Math.ceil(Math.random() * 1000 * 2);
container.style.transform = "rotate(" + number + "deg)";

btn.onclick = function () {
  //乱数を新しくする
  number += Math.ceil(Math.random() * 1000 * 10);
  container.style.transform = "rotate(" + number + "deg)";
};
