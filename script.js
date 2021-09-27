
const prin = document.querySelector("#Prin");
const rate = document.querySelector("#Rate");
const num = document.querySelector("#Num");
const time = document.querySelector("#Time")
const amount = document.querySelector("#Amount");

function computeAmount() {
  const p = prin.value;
  const r = rate.value / 100;
  const n = num.value;
  const t = time.value;

  const a = p * ( (1 + (r / n)) ** (n * t) );

  amount.textContent = a;
}



prin.addEventListener('input', computeAmount);
rate.addEventListener('input', computeAmount);
num.addEventListener('input', computeAmount);
time.addEventListener('input', computeAmount);
amount.addEventListener('input', computeAmount);
