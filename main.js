let container = document.querySelector(".container");
let btn = document.getElementById("spin");
// 乱数を生成
let number = Math.ceil(Math.random() * 1000*3);

btn.onclick = function () {
  //乱数だけ回転
	container.style.transform = "rotate(" + number + "deg)";
  //乱数を新しくする
	number += Math.ceil(Math.random() * 1000*2);
}
