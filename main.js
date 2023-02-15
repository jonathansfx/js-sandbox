// traversing arrays

let names = [
  "rita",
  "henry",
  "karl",
  "joan",
  "leona",
  "dorothy",
  "john",
  "richard",
  "ed",
];

let outputEl = document.getElementById("output");

for (let i = 0; i < names.length; i++) {
  outputEl.innerHTML += `<p>Hello ${names[i]}!</p>`;
}
