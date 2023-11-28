"strict";

const rightContainer = document.querySelector(".right-container");
const range = document.querySelector(".range");
const rangeNum = document.querySelector(".range-num");

let numBox = 16;

// for (let parent = 0; parent < numBox; parent++) {
//   let div1 = document.createElement("div");
//   div1.classList.add("boxes-parent");
//   for (let child = 0; child < numBox; child++) {
//     let div2 = document.createElement("div");
//     div2.classList.add("boxes-child");
//     div1.appendChild(div2);
//   }
//   rightContainer.appendChild(div1);
// }

const addGrid = function (num) {
  for (let parent = 0; parent < numBox; parent++) {
    let div1 = document.createElement("div");
    div1.classList.add("boxes-parent");
    for (let child = 0; child < numBox; child++) {
      let div2 = document.createElement("div");
      div2.classList.add("boxes-child");
      div2.addEventListener("mousedown", function () {
        div2.style.backgroundColor = "black";
      });
      div1.appendChild(div2);
    }
    rightContainer.appendChild(div1);
  }
};

range.addEventListener("input", function () {
  rangeNum.textContent = range.value;
  numBox = range.value;
});
range.addEventListener("change", function () {
  rangeNum.textContent = range.value;
  rightContainer.innerHTML = "";
  addGrid(numBox);
});
