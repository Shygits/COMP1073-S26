//STORY ARRAYS FOR EACH COLUMN
const column1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const column2 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const column3 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const column4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const column5 = ["on the moon", "on a chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

//INDEX VARIABLES 
let index1 = -1;
let index2 = 0;
let index3 = 0;
let index4 = 0;
let index5 = 0;

//
const button = document.querySelectorAll("button");

//SELECTION PREVIEW VARIABLES
const selection1 = document.getElementById("selection1");
const selection2 = document.getElementById("selection2");
const selection3 = document.getElementById("selection3");
const selection4 = document.getElementById("selection4");
const selection5 = document.getElementById("selection5");


//CYCLEWORD FUNCTIONS / COLUMN
function cycleColumn1() {
    index1++;
    if (index1 >= column1.length) index1 = 0;   
    selection1.textContent = "Column 1: " + column1[index1];
}

function cycleColumn2() {
     selection2.textContent = "Column 2: " + column2[index2];
    index2++;
    if (index2 >= column2.length) index2 = 0; 
}

function cycleColumn3() {
    selection3.textContent = "Column 3: " + column3[index3]; 
    index3++;
    if (index3 >= column3.length) index3 = 0;
}

function cycleColumn4() {
    selection4.textContent = "Column 4: " + column4[index4];
    index4++;
    if (index4 >= column4.length) index4 = 0;
}

function cycleColumn5() {
    selection5.textContent = "Column 5: " + column5[index5];
    index5++;
    if (index5 >= column5.length) index5 = 0;
}

//PLAYBACK FUNCTION
function playBack() {
    const story = column1[index1] + " " 
                + column2[index2] + " "
                + column3[index3] + " "
                + column4[index4] + " "
                + column5[index5] ;
    alert("Your Story: " + story);
}

/*SURPRISE FUNCTION
function surprise() {
    const story = column1[index1] + " " 
                + column2[index2] + " "
                + column3[index3] + " "
                + column4[index4] + " "
                + column5[index5] ;
    alert("Your Story: " + story);
}*/

//RESET FUNCTION
function resetStory() {
    index1 = 0;
    index2 = 0;
    index3 = 0;
    index4 = 0;
    index5 = 0;

    //SOURCED FROM https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent TO CLEAR TEXT/RESET SELECTIONS
    selection1.textContent = "";
    selection2.textContent = "";
    selection3.textContent = "";
    selection4.textContent = "";
    selection5.textContent = "";
}

//BUTTON EVENT LISTENERS
button[0].addEventListener("click", cycleColumn1);
button[1].addEventListener("click", cycleColumn2);
button[2].addEventListener("click", cycleColumn3);
button[3].addEventListener("click", cycleColumn4);
button[4].addEventListener("click", cycleColumn5);


//PLAYBACK EVENT LISTENER
button[5].addEventListener("click", playBack);


//RESET AND SURPRISE EVENT LISTENERS
button[6].addEventListener("click", surprise);
button[7].addEventListener("click", resetStory);