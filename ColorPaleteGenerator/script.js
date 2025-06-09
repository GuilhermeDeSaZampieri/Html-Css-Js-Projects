const submit = document.querySelector("button");
const gridColors = document.getElementById("gridColors");

submit.addEventListener("click", GenerateColorSubmit);

function GenerateColorSubmit(e) {
  e.preventDefault();

  gridColors.innerHTML = "";

  for (let index = 0; index < 5; index++) {
    gridColors.appendChild(GenerateElement());
  }
}

function GenerateElement() {
  const corGerada = GenerateColor();

  const paleta = document.createElement("div");
  paleta.id = "paleta";

  const divCor = document.createElement("div");
  divCor.id = "cor";
  divCor.style.backgroundColor = corGerada;

  const divInfo = document.createElement("div");
  divInfo.id = "info";

  const inputWithColor = document.createElement("button");
  inputWithColor.type = "button";
  inputWithColor.textContent = corGerada;
  inputWithColor.id = "input";

  const i = document.createElement("i");
  i.classList.add("fa-solid", "fa-copy");

  inputWithColor.appendChild(i);
  copyCod(inputWithColor, corGerada);

  divInfo.appendChild(inputWithColor);
  paleta.appendChild(divCor);
  paleta.appendChild(divInfo);

  return paleta;
}

function copyCod(copyButton, textInput) {
  copyButton.addEventListener("click", () => {
    navigator.clipboard
      .writeText(textInput)
      .then(() => console.log("Copiado!"));
  });
}

function GenerateColor() {
  let hash = "#";
  let hexa = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let colorHexa = hash;

  for (let index = 0; index < 6; index++) {
    let number = Math.floor(Math.random() * 16);
    colorHexa += hexa[number];
  }
  return colorHexa;
}
