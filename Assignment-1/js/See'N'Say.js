//Story Arrays for each column
const column1 = ["A", "B", "C", "D", "E"];
const column2 = ["F", "G", "H", "I", "J"];
const column3 = ["K", "L", "M", "N", "O"];
const column4 = ["P", "Q", "R", "S", "T"];
const column5 = ["U", "V", "W", "X", "Y"];

//Index variables track selection
let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;
let index5 = 0;



//Selection Preview elements
const selection1 = document.getElementById("selection1");

const selection2 = document.getElementById("selection2");

const selection3 = document.getElementById("selection3");

const selection4 = document.getElementById("selection4");

const selection5 = document.getElementById("selection5");

//Cycle Word Functions for each column
function cycleCoumn1() {
    index1++;
    if (index1 >= column1.length) index1 = 0;
    selection1.textContent = "Column 1: " + column1[index1];   
}

function cycleCoumn2() {
    index2++;
    if (index2 >= column2.length) index2 = 0;
    selection2.textContent = "Column 2: " + column2[index2];   
}

function cycleCoumn3() {
    index3++;
    if (index3 >= column3.length) index3 = 0;
    selection3.textContent = "Column 3: " + column3[index3];   
}

function cycleCoumn4() {
    index4++;
    if (index4 >= column4.length) index4 = 0;
    selection4.textContent = "Column 4: " + column4[index4];   
}

function cycleCoumn5() {
    index5++;
    if (index5 >= column5.length) index5 = 0;
    selection5.textContent = "Column 5: " + column5[index5];   
}