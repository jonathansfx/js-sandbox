let letters = ["a", "b", "c", "d", "e", "f", "g"];
let nums = [2, 4, 6, 8, 10];

letters = arrayInfo(letters);
nums = arrayInfo(nums);

function arrayInfo(anArray) {
  console.log(anArray[0]);
  console.log(anArray.pop());
  console.log(anArray.length);
}
