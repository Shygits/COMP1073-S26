const output = document.querySelector("#output");

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee {
    // variables/fields
    size;
    isDecaf;

    // constructor
    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    }

    // functions/methods
    // add a serveIt method
    serveIt() {
        // Generate an IMG of the coffee ordered
        let cup = document.createElement("img"); // <img>

        // Set the src path for the IMG element
        cup.setAttribute("src", "images/coffee-cup.svg"); // <img src="images/coffee-cup.svg">

        // Determine caffeine status of the coffee
        if (this.isDecaf) {
            cup.setAttribute("src", "images/coffee-cup-green.svg"); // <img src="images/coffee-cup-green.svg">
        } else {
            cup.setAttribute("src", "images/coffee-cup-purple.svg"); // <img src="images/coffe-cup-purple.svg">
        }

        // Set the size of the cup SVG image based on this.size
        switch (this.size) {
            // Size the IMG in terms of its height based on above number from the switch
            case "small":
                cup.setAttribute("height", 100); // <img src="images/coffee-cup.svg" height=100>
                break;
            case "medium":
                cup.setAttribute("height", 150);
                break;
            case "large":
                cup.setAttribute("height", 200);
                break;
            default:
                cup.setAttribute("height", 150);
        }

        // Generate a description of the coffee and put it into the IMG title attribute
        // A small caffinated coffee
        cup.setAttribute(
            "title",
            `A ${this.size} ${this.isDecaf ? "decaffinated" : "caffinated"} Coffee`,
        );

        // Insert the new IMG element into the paragraph
        output.appendChild(cup);
    }
}

/* STEP 2: Instatiate a coffee based on the above constructor function */
let priyanshCoffee = new Coffee("medium", false);
let robertCoffee = new Coffee("large", true);
let meganCoffee = new Coffee("small", false);

/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */
priyanshCoffee.serveIt();
robertCoffee.serveIt();
meganCoffee.serveIt();

/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee {
    milkType;
    constructor(size, isDecaf, milkType) {
        super(size, isDecaf);
        this.milkType = milkType;
    }
    latteDesc() {
        return `A ${this.size} sized Latte with ${this.milkType} milk.`;
    }
}

/* STEP 6: Create a new instance of the Latte object */
let priyanshLatte = new Latte("large", false, "2%");

/* STEP 7: Call up the latteDesc() method for the above created Latte instance */
// priyanshLatte.latteDesc()
// priyanshLatte.serveIt()

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG


//LAB 2 ADDITION: CLASSES AND INHERITANCE
//In this lab you will extend the Coffee class from the class exercise to create your own custom coffee drink subclass. You will practice defining a subclass using the extends keyword, using super() to inherit from a parent class, adding your own method, and creating instances of your new class.

//Create a new subclass of Coffee named after a coffee drink of your choice (e.g. Cappuccino, Mocha, FlatWhite). Use the extends keyword to inherit from Coffee.

class Mocha extends Coffee {
    shots;
    syrup;

    //Add at least one unique property to your subclass beyond size and isDecaf (e.g. shots, flavour, foamLevel). Write a constructor that accepts all properties and uses super() to pass size and isDecaf up to the parent class.
    constructor(size, isDecaf, shots, syrup) {
        super(size, isDecaf);
        this.shots = shots;
        this.syrup = syrup;
    }
    //Add a method to your subclass that builds and returns a description string of the drink, including all properties. For example: "A large Mocha with 2 shots and caramel syrup."
    mochaDesc() {
        return `A ${this.size} sized Mocha with ${this.shots} shots and ${this.syrup} syrup.`;
    }
}

//Instantiate at least two objects from your new subclass with different values.
let priyanshMocha = new Mocha("medium", false, 2, "caramel");
let robertMocha = new Mocha("large", true, 3, "hazelnut");

//Call SERVEIT() method on each of your objects and observe the output on the page.
priyanshMocha.serveIt();
robertMocha.serveIt();

//Call your custom description method on each object and display the returned string on the page.
priyanshMocha.mochaDesc();
robertMocha.mochaDesc();



