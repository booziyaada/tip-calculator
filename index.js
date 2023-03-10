let bill = 100;
let peopleCount = 1;
let tipPercantage = 50;

function calculateTip(){
  let totalTip = bill* (tipPercantage/100);
  let tipPerPerson = totalTip/peopleCount;

  document.getElementById("tip-per-person").innerHTML = "$" + tipPerPerson.toFixed(2);
  document.getElementById("total-tip").innerHTML = "$" + totalTip.toFixed(2);

}

function changeTotalBill(){
  bill = document.getElementById("bill-input").value;
  calculateTip();
}

function changeNumberOfPeople(){
  peopleCount = document.getElementById("people-count").value;
  calculateTip();
}

function clickReset(){
  bill = 0;
  peopleCount = 1;
  tipPercantage = 10;

  document.getElementById("bill-input").value= bill;
  document.getElementById("people-count").value = peopleCount;
  calculateTip();
}

function changeCustomPercentage(){
  tipPercantage = document.getElementById("custom-percentage").value;
  calculateTip();
}

function tipPercantageChange(){

  calculateTip();
}

let percentages = [50,25,15,10,5]

function percentageButtons(){
  const buttonContainer = document.getElementsByClassName("tip-percentages")[0];
  for(i=0;i<percentages.length;i++){
    const button = document.createElement("button");
    button.setAttribute("class","percentage-btn");
    button.innerHTML = `${percentages[i]}%`;
    button.addEventListener("click",tipPercantageChange)
    buttonContainer.prepend(button);
  }
}

percentageButtons();

calculateTip();









































// function handleCustomPercentChange(event) {
//   tipPercentage = event.target.value;
//   let oldPercentageEl = document.getElementsByClassName(
//     "selected-percentage"
//   )[0];
//   oldPercentageEl?.classList.remove("selected-percentage");
//   calculateTip();
// }

// function handleTipPercentageChange(event) {
//   let newPercentageEl = event.target;
//   tipPercentage = newPercentageEl.dataset.percent;

//   let oldPercentageEl = document.getElementsByClassName(
//     "selected-percentage"
//   )[0];

//   oldPercentageEl?.classList.remove("selected-percentage");
//   newPercentageEl.classList.add("selected-percentage");

//   customPercentEl = document.getElementById("custom-percentage");
//   customPercentEl.value = undefined;

//   calculateTip();
// }

// const fixedPercentages = [5, 10, 15, 25, 50];

// function createPercentageButtons(percentages) {
//   const parentDiv = document.getElementsByClassName("tip-percentages")[0];
//   for (let i = 0; i < percentages.length; i++) {
//     const button = document.createElement("button");
//     button.setAttribute("data-percent", percentages[i]);
//     button.setAttribute("class", "percentage-btn");
//     button.innerHTML = `${percentages[i]}%`;
//     button.addEventListener("click", handleTipPercentageChange);
//     parentDiv.prepend(button);
//   }
// }


