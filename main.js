// let letters = ["a", "b", "c", "d", "e", "f", "g"];
// let nums = [2, 4, 6, 8, 10];

// letters = arrayInfo(letters);
// nums = arrayInfo(nums);

// function arrayInfo(anArray) {
// let x = anArray[anArray.length - 1];
// console.log(anArray[0]);
// console.log(x);
// console.log(anArray.length);
// }

// arrays with loops

// main algorithm:
// start with an empty array
// loop - inside the loop we add elements to the array

// let patternArray = [];
// for (let n = 10; n <= 530; n += 20) {
// patternArray.push(n);
// }

// create arrays - querySelectorAll
// let hiIdEl = document.querySelector("#hi");

// create arrays - split a string

// document.addEventListener("click", splitInput);

// function splitInput() {
// let myStr = document.getElementById("user-input").value;
// let myArray = myStr.split(",");
// console.log(myArray);
// console.log(myArray[0], myArray[1]);
// }

// creat arrays - from a text file

let colors;

fetch("web-colors.txt").then(convertData).then(processData);

function convertData(rawData) {
  return rawData.text();
}

function processData(strData) {
  colors = strData.split("/\r?\n/");
  console.log(colors);
}
