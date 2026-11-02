// Observe the html script first...

// Question 1 - The html is not attached to the script file, add the script info in header of html --- 1 mark



// Question 2 - Create a constant to hold your first name and store it in firstName
const firstName = "Shy-Anna"; 
const question2Text = document.querySelector("#myFirstName");
// Create a constant to get the paragraph from question 2 html and store it in question2Text
question2Text.textContent = firstName;
// Output your first name stored in firstName to question2Text p tag --- 3 marks



// Question 3 - Have a close look at the following code:
let employee = {
    name: ["Biff", "Henderson"],
    employeeNumber: 30573,
    department: "Repossesions",
    interests: ["the Mob", "fast cars", "baseball"],
    active: true,
};

/* Write a short script that creates an interesting sentence by          concatenating members of the above employee 
    object together (using either dot notation or bracket notation). Include as much information about the employee as you can. 
    Output the resulting content as text inside the question3 paragraph element. --- 5 marks */

const question3Para = document.querySelector(".question3");
question3Para.textContent =
    employee.name[0] + " " + employee.name[1] +
    " works in " + employee.department +
    ". His employee number is " + employee.employeeNumber +
    ". He enjoys " + employee.interests.join(", ") +
    ". Active: " + employee.active;



// Question 4 - Consider the following block of code:
const question4Para = document.querySelector("#question4");
class Coffee {
    constructor(type, size) {
        this.type = type;
        this.size = size;
    }

    // Method to order a coffee
    coffeeOrder() {
        question4Para.textContent = `You have ordered a ${this.size} ${this.type} coffee.`;
    }
}

// Continue with the JavaScript portion of this code above to do the following, making use of the Coffee class above:
// Create a new instance of the Coffee object, picking whatever type of coffee you like(latte, espresso, americano, etc.),
// and whatever size you like(extra large, large, medium, small, etc.).
let shyCoffee = new Coffee("mocha espresso", "large");
// Call the coffeeOrder method to output your coffee order to the screen as text inside the paragraph element(represented by const question4Para).
// Comment and format your above code appropriately. --- 5 marks
shyCoffee.coffeeOrder();



// Question 5 - Consider the following JavaScript:
let sandwich3 = {
    bread: "multigrain",
    meat: "sliced turkey",
    vegetables: {
        tomatoes: "roma",
        lettuce: "romaine",
        pickles: "kosher dill",
    },
    spread: "garlic mayonnaise",
};

// Write a snippet of code which would point to the type of tomatoes used to make the sandwich3 object

// Output the result of tomatoes. i.e. "roma" in this case to the question5 paragraph --- 2 marks
document.querySelector(".question5").textContent = sandwich3.vegetables.tomatoes;



// Question 6 - Given the below JavaScript object, car1,
let car1 = {
    type: "coupe",
    color: "red",
    fuelType: "battery electric",
    wheelType: "17 inch aluminum alloy",
    description: function () {
        alert(
            `This car is a ${this.color} ${this.fuelType} powered ${this.type}. With ${this.wheelType}`
        );
    },
};

// add information about the wheel type (17" aluminum alloy) to the above object? --- 2 marks
// (Already added above as wheelType)



// Question 7a - Use the below API to generate a url with your student id as the api key
// Base URL - https://georgian.polaristechservices.com/api/js/26s/users
// Parameter: api_key = {your student id}
// Sample/example: https://georgian.polaristechservices.com/api/js/26s/users?api_key=123
// Note - The final URL generated will be different for each student in the class and response received will also be different.
//          There is no point in using other student's url, you might receive 0 from this step ahead + academic misconduct!!!
// Create your personalized URL and store it in a const/variable below --- 2 marks
const baseUrl = "https://georgian.polaristechservices.com/api/js/26s/users?api_key=200640675";



// Question 7b - Use the above URL to create a fetch request and log the response to your console --- 4 marks
fetch(baseUrl)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        receivedResponse(json);
    });


// Take a break, drink some water and observe your response in any json reader or postman or your browser...



// Question 7c - Create a function that receives the above response as a parameter --- 1 mark
//               You can use this function for next two steps
function receivedResponse(data){
        let h2 = document.createElement("h2"); 
        let h3 = document.createElement("h3");
        let h3b = document.createElement("h3"); 
        let image = document.createElement("img");

        // Question 7d - Dynamically create the following tags, store the received data and append everything to question7d div
        h2.textContent = data.personal.id;
        h3.textContent = data.personal.first_name;
        h3b.textContent = data.personal.last_name;
        image.src = data.personal.image;

        document.querySelector("#question7d").append(h2, h3, h3b, image);

        // Continue to Q7e
        renderRandom(data.random);
}



// Question 7e - For the received random data, create a loop, create appropriate table tags(td|tr|th|tbody),
//               and similarly like previous question append everything to question7e div --- 10 marks
function renderRandom(randomData) {
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");

    for (let i = 0; i < randomData.length; i++) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = randomData[i].id;

        let td2 = document.createElement("td");
        td2.textContent = randomData[i].value;

        tr.append(td1, td2);
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    document.querySelector("#question7e").appendChild(table);
}



// Question 8 - Create an external css file, store in folder and connect with html - 3 marks
// It's fine if the file has just one style in it...
