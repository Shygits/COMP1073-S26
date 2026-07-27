//Dynamic Student Info
const studentInfo = document.querySelector("#studentInfo");
studentInfo.textContent = "Shy-Anna Lee |  Student ID: 200640675";


//Form handling + validation
const pizzaForm = document.querySelector("#pizzaForm");
const output = document.querySelector("#output");

pizzaForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Capture Form Values
    const customerName = document.querySelector("#customerName").value.trim();
    
    const size = document.querySelector("input[name='size']:checked");
    
    const crust = document.querySelector("#crust").value;
    
    const sauce = document.querySelector("#sauce").value;

    //TOPPINGS
    const toppingNodes = document.querySelectorAll("input[name='toppings']:checked");
    let toppings = [];

    toppingNodes.forEach(function(topping) {
        toppings.push(topping.value);
});
    
const extraCheese = document.querySelector("#extraCheese").checked;
const instructions = document.querySelector("#instructions").value.trim();

//VALIDATION
let errors = [];

if (customerName === "") {
    errors.push("Please enter your name");
}

if(!size) {
    errors.push("please choose a pizza size");
}

if(crust === "") {
    errors.push("please choose type of crust");
}

if(sauce === "") {
    errors.push("please choose a type of sauce");
}

if(toppings.length === 0) {
    errors.push("please choose pizza size");
}

if(error.length > 0) {
output.innerHTML = `<p class="error">${errors.join("<br>")}</p>`;
}


});