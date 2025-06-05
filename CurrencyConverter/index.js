const form = document.getElementById("form");
const from = document.getElementById("from");
const to = document.getElementById("to");
const input = document.querySelector("input");
const p = document.getElementById("result");

window.addEventListener("load", fetchCurrences);
form.addEventListener("submit", Result);

async function fetchCurrences() {
  const resp = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
  const data = await resp.json();

  const currencyOptions = Object.keys(data.rates);
  currencyOptions.forEach((currency) => {
    const option1 = document.createElement("option");
    option1.value = currency;
    option1.textContent = currency;
    from.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = currency;
    option2.textContent = currency;
    to.appendChild(option2);
  });
}

async function Result(e) {
  e.preventDefault();

  const amount = parseFloat(input.value);
  const resp = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${from.value}`
  );
  const data = await resp.json();
  console.log(data);

  if (amount < 0) {
    alert("Please ener a valid amount");
    return;
  }

  const rate = data.rates[to.value];
  const convert = (rate * amount).toFixed(2);

  p.textContent = `${amount} ${from.value} = ${convert} ${to.value}`;
}
