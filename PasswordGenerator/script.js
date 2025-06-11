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
const passwordGerate = document.querySelector("p");
const rangeLen = document.getElementById("lenght");
const valueRange = document.getElementById("valueRange");
const copyPass = document.getElementById("copyPass");
const strong = document.querySelector("strong");
const loadPassword = document.getElementById("loadPassword");
const span = document.getElementById("loadingResultPassword")

valueRange.textContent = rangeLen.value;

rangeLen.addEventListener("input", (event) => {
  valueRange.textContent = event.target.value;
});

const btn = document.querySelector("button");
btn.addEventListener("click", GeneratePassword);

if (copyPass) {
  copyPass.addEventListener("click", () => {
    copyCod(passwordGerate.textContent);
  });
}


function GeneratePassword(e) {
  e.preventDefault();
  passwordGerate.textContent = SortedPassword();

  if(passwordGerate.textContent.length < 10){
    strong.style.color = "#963242";
    strong.textContent = "Weak";
    span.style.backgroundColor = "#963242";
    span.style.width = "33%";
  }
  else if(passwordGerate.textContent.length >= 10 && passwordGerate.textContent.length <= 20){
    strong.style.color = "#74add6";
    strong.textContent = "Medium";
    span.style.backgroundColor = "#74add6";
    span.style.width = "66%";

  }
  else{
    strong.style.color = "#2c5877";
    strong.textContent = "Strong";
    span.style.backgroundColor = "#2c5877";
    span.style.width = "100%";
  }
}


function SortedPassword() {
  let password = "";
  const { array, tamanho } = arrayString();
  if (array.length === 0) {
    return "Preencha um CheckBox";
  }

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

function copyCod(textInput) {
  if (textInput) {
    navigator.clipboard
      .writeText(textInput)
      .then(() => window.alert("Copiado com sucesso"));
  }
  else{
    window.alert("Não existe nada");
  }
  
}
