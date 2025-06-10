const aZ = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const s = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  "'",
  ",",
  ".",
  "<",
  ">",
  "/",
  "?",
];

const uper = document.getElementById("Uppercase");
const low = document.getElementById("Lowercase");
const numb = document.getElementById("Numbers");
const symb = document.getElementById("Symbols");

const rangeLen = document.getElementById("lenght");
const valueRange = document.getElementById("valueRange");
valueRange.textContent = rangeLen.value;

rangeLen.addEventListener("input", (event) => {
    valueRange.textContent = event.target.value;
})


const btn = document.querySelector("button");
btn.addEventListener("click", GeneratePassword);

function GeneratePassword(e) {
  e.preventDefault();

  console.log(SortedPassword());
}

function SortedPassword() {
  let password = "";
  const { array, tamanho } = arrayString();

  for (let index = 0; index < rangeLen.value; index++) {
    let number = Math.floor(Math.random() * tamanho);
    password += array[number];
  }
  return password;
}


function arrayString() {
  var array = [];

  if (uper.checked) {
    aZ.forEach((element) => {
      array.push(element.toUpperCase());
    });
  }

  if (low.checked) {
    array = array.concat(aZ);
  }

  if (numb.checked) {
    array = array.concat(n);
  }
  if (symb.checked) {
    array = array.concat(s);
  }
  let tamanho = array.length;

  return { array, tamanho };
}
