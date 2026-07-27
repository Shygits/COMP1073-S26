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

    toppingNodes.forEach(function(topping) 
{
    toppings.push(topping.value);
});
    

});