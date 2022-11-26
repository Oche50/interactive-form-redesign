let cardHolder = document.getElementById("cardholder-input");
let cardNumber = document.getElementById("cardnumber-input");
let expMonth = document.getElementById("month-input");
let expYear = document.getElementById("year-input");
let cvcNumber = document.getElementById("cvc-input");
let crdName = document.getElementById("name");
let crdNumber = document.getElementById("number");
let expDate = document.getElementById("month");
let expYr = document.getElementById("year");
let cvcInput = document.getElementById("cvc");
let holderError = document.querySelector(".cardholder-error");
let numberError = document.querySelector(".cardnumber-error");
let expMonthError = document.querySelector(".expmonth-error");
let expYearError = document.querySelector(".expyear-error");
let cvcError = document.querySelector(".cvc-error");
let button = document.querySelector(".confirm-btn");
let formContent = document.querySelector(".formdetails");
let thankSection = document.querySelector(".thankyou-section");
let thankButton = document.querySelector(".thank-you");

// EventListeners
cardHolder.addEventListener("keyup", runEvent);
cardNumber.addEventListener("keyup", numEvent);
expMonth.addEventListener("keyup", monthEvent);
expYear.addEventListener("keyup", yearEvent);
cvcNumber.addEventListener("keyup", cvcEvent);
button.addEventListener("click", confirmbutton);
thankButton.addEventListener("click", thankbutton);

// Functions
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value);
  document.getElementById("name").innerHTML = `<h3>${e.target.value}</h3>`;
}
function numEvent(e) {
  console.log(`EVENT TYPE: ${+"16"}`);
  console.log(e.target.value);
  document.getElementById("number").innerHTML = `<h3>${e.target.value}</h3>`;
}
function monthEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value);
  document.getElementById("month").innerHTML = `<h3>${e.target.value}</h3>`;
}
function yearEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value);
  document.getElementById("year").innerHTML = `<h3>${e.target.value}</h3>`;
}
function cvcEvent(e) {
  console.log(`EVENT TYPE: ${+"23"}`);
  console.log(e.target.value);
  document.getElementById("cvc").innerHTML = `<h3>${e.target.value}</h3>`;
}

//   statements
function confirmbutton(e) {
  e.preventDefault();
  if (cardHolder.value === "") {
    holderError.innerHTML = "<p> Please enter your name</p>";
  } else if (cardNumber.value === "") {
    numberError.innerHTML = "<p> Please enter a number</p>";
  } else if (expMonth.value === "") {
    expMonthError.innerHTML = "<p> can't be blank</p>";
  } else if (expYear.value === "") {
    expYearError.innerHTML = "<p> can't be blank</p>";
  } else if (cvcNumber.value === "") {
    cvcError.innerHTML = "<p> can't be blank</p>";
  } else {
    thankSection.classList.remove("hidden");
    formContent.classList.add("hidden");
  }
}

function thankbutton(){
  thankSection.classList.add("hidden");
  formContent.classList.remove("hidden");
}
