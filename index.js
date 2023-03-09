// new practiceBranch

let bill = 0;
let peopleCount = 1;
let tipPercentage = 15;

function calculateTip() {
  let totalTip = bill * (tipPercentage / 100);
  let tipPerPerson = totalTip / peopleCount;

  const tipPerPersonEl = document.getElementById("tip-per-person");
  const totalTipEl = document.getElementById("total-tip");

  tipPerPersonEl.innerHTML = tipPerPerson.toFixed(2);
  totalTipEl.innerHTML = totalTip.toFixed(2);

  // query tip-per-person and update its content
  // query total-tip and update its content
}

function handleBillChange(event) {
  bill = event.target.value;
  calculateTip();
}

function handlePeopleCountChange(event) {
  peopleCount = event.target.value;
  calculateTip();
}

function handleCustomPercentChange(event) {
  tipPercentage = event.target.value;
  let oldPercentageEl = document.getElementsByClassName(
    "selected-percentage"
  )[0];
  oldPercentageEl?.classList.remove("selected-percentage");
  calculateTip();
}

function handleTipPercentageChange(event) {
  let newPercentageEl = event.target;
  tipPercentage = newPercentageEl.dataset.percent;

  let oldPercentageEl = document.getElementsByClassName(
    "selected-percentage"
  )[0];

  oldPercentageEl?.classList.remove("selected-percentage");
  newPercentageEl.classList.add("selected-percentage");

  customPercentEl = document.getElementById("custom-percentage");
  customPercentEl.value = undefined;

  calculateTip();
}

function handleReset() {
  bill = 0;
  peopleCount = 1;
  tipPercentage = 15;

  const billInputEl = document.getElementById("bill-input");
  const peopleCountEl = document.getElementById("people-count");
  const customPercentEl = document.getElementById("custom-percentage");

  billInputEl.value = bill;
  peopleCountEl.value = peopleCount;
  customPercentEl.value = tipPercentage;

  calculateTip();
}

const fixedPercentages = [5, 10, 15, 25, 50];

function createPercentageButtons(percentages) {
  const parentDiv = document.getElementsByClassName("tip-percentages")[0];
  for (let i = 0; i < percentages.length; i++) {
    const button = document.createElement("button");
    button.setAttribute("data-percent", percentages[i]);
    button.setAttribute("class", "percentage-btn");
    button.innerHTML = `${percentages[i]}%`;
    button.addEventListener("click", handleTipPercentageChange);
    parentDiv.prepend(button);
  }
}

createPercentageButtons(fixedPercentages);

calculateTip();
