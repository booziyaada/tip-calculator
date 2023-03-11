let bill = 0;
let person = 1;
let percentage = 15;

function calculateTip(){

    let totalTip = bill * (percentage/100);
    let tipPerPerson = (totalTip/person).toFixed(2);

    let tt = document.getElementById("total-tip").innerHTML=""+ totalTip.toFixed(2);
    let tp = document.getElementById("tip-per-person").innerHTML=""+ tipPerPerson;
}

function handleBillChange(event){

    // get the input and calculate

    bill =  event.target.value;
    calculateTip();
}

function handlePeopleCountChange(event){

    // get the input and calculate

    person = event.target.value;
    calculateTip();
}

function customClicked(){

    // remove the selected percentage class from value fixed button

    let selecRemov = document.getElementsByClassName("selected-percentage")[0];
    selecRemov?.classList.remove("selected-percentage");
}

function handleCustomPercentChange(event){

    // take the custom value for calci

    percentage = event.target.value;
    calculateTip();
}

function handleTipPercentageChange(event) {

    //first get the % value using dataset att

    let butnPercentage = event.target;
    percentage = butnPercentage.dataset.percent;

    // work on correcty fixing the selected percentage class in its place

    let selecRemov = document.getElementsByClassName("selected-percentage")[0];
    selecRemov?.classList.remove("selected-percentage");
    butnPercentage.classList.add("selected-percentage");

    // turn the custom to default 

    let customDefault =  document.getElementById("custom-percentage");
    customDefault.value = undefined;

    calculateTip();
}

function handleReset(){

    // firstly we change values to their default values

    bill = 0;
    percentage = 15;
    person = 1;

    // making the changed values get displayed

    let billPart = document.getElementById("bill-input");
    billPart.value = bill;

    let percentPart =document.getElementById("custom-percentage");
    percentPart.value = percentage;

    let personCount = document.getElementById("people-count");
    personCount.value = person;

    calculateTip();
}

const percentagesArray = [5,10,15,25,50];
function createPercentBtns(array){
    const btnDiv = document.getElementsByClassName("tip-percentages")[0];
    for(var i=0; i<array.length; i++){
        const butn = document.createElement("button");
        if(i==2){
        butn.setAttribute("class", "selected-percentage");
        }
        butn.setAttribute("data-percent",array[i]);
        butn.setAttribute("class", "percentage-button");
        butn.addEventListener("click",handleTipPercentageChange);
        butn.innerHTML = `${array[i]}%`
        btnDiv.append(butn);
    }
}

createPercentBtns(percentagesArray);
calculateTip();