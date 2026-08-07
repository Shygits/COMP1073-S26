//Student info added dynamically
let studentInfo = document.querySelector("#student-info");
studentInfo.textContent = "Student: Shy-Anna | ID: 200640675";

// Fetching and displaying artwork data
let artContainer = document.querySelector("#art-container");


//Monet and Van Gogh object IDs randomly slected 10 of each from the Met Museum API: https://collectionapi.metmuseum.org/public/collection/v1/search?q=monet

//MONET OBJECT IDS
const fullArtIDs = [ 
    438003,437135,437127,437133,437125,459107,437124,437106,437122,438823,437121,438004,437131,438008,438005,438006,437112,437137,437105,438007,437111,437110,437119,437108,437115,437138,437123,437107,436965,437313,438435,437104,437126,437109,437118,437129,437120,437117,437130,437136,437128,437113,482969,671456,435882,459139,669033,337807,436085,389093,722460,909307,248068,271323,333817,371202,459110,436947,438551,459144,438738,494772,941759,941757,941760,941761,941758,435874,461357,13758,437317,437426,11934,19523,489974,437685,852668,901617,437315,489687,834263,207484,438815,437430,359320,437680,437300,436175,437436,11936,437432,437683,460065,438002,436964,265904,484972,831088,437686,437299,124185,839041,437756,485705,270613,436017,436006,124336,124337,124334,263796,263797,263798,263799,262406,262401,262405,262400,262403,264019,436090,335611,485934,10915,11032,460052,436084,12447,11480,438136,435984,437301,262373,435626,459121,898461,359321,359319,855850,742459,855848,855849,855852,855851,855853,436005,766695,766680,766683,766682,766681,766691,766690,766679,766684,766678,766689,766677,766688,766693,766676,766687,766675,766686,766692,766694,766673,766674,437094,36535,341464,438816,191202,423180,481781,436946,282074,440729,267602,662132,364880,438645,436785,486085,156788,37099,919839,921529,437988,436089,435989,366762,437846,402150,342496,437989,766685,495585,435963,435988,436787,436120,438012,267875,676536,289550,384852,435991,271966,57390,437427,262434,262431,339721,367715,437097,339000,437310,269329,267843,36539,486736,437433,388803,262374,375812,262407,262418,489988,435976,437311,437308,269284,269300,267571,438098,437314,436819,437160,438011,435961,437309,283137,283107,267529,638246,437853,439631,498256,436820,436157,435972,461152,486428,436944,438144,32363,436960,437429,282079,769462,488402,436449,436173,436159,437307,488978,201889,404547,435750,435978,437684,437424,269072,437514,436144,435981,436122,438819,489700,435962,436599,435875,436945,489633,435877,436106,437986,436142,437658,437891,437925,485185,436950,437984,438820,435872,436123,488368,437998,436149,435967,437980,436948,436080,437159,437847,436524,437654,435980,334373,435876,436951,489766,337736,437098,484862,437312,439403,437437,436548,334174,435878,488227,334652,435880,435869
];


// Function to fetch artwork data from the Met Museum API
function fetchArtwork(objectID) {
    let url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            if (json.primaryImageSmall) {
                displayArtwork(json);
            } else {
                loadRandomArt(); //retries if no image
            }
        });
}

//Display art in a card
function displayArtwork(data) {

    //creates card container
    let card = document.createElement("div");
    card.classList.add("art-card");

    //creates image element
    let img = document.createElement("img");
    img.src = data.primaryImageSmall;
    img.alt = data.title;

    //TITLE
    let title = document.createElement("p");
    title.classList.add("art-title");
    title.textContent = data.title;

    // ARTIST
    let artist = document.createElement("p");
    artist.classList.add("art-artist");
    artist.textContent = "Artist: " + data.artistDisplayName;

    //YEAR
    let year = document.createElement("p");
    year.classList.add("art-year");
    year.textContent = "Year: " + data.objectDate;
    
    // ADD ELEMENTS TO CARD
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(artist);
    card.appendChild(year);

    // Add card to page
    artContainer.appendChild(card);
}

//Random from list
function loadRandomArt() {
    let randomID = fullArtIDs[Math.floor(Math.random() * fullArtIDs.length)];
    fetchArtwork(randomID);
}

// Load random artworks on page load
loadRandomArt();

//Change the art with the button click
let newArtBtn = document.querySelector("#new-art-btn");
newArtBtn.addEventListener("click", loadRandomArt);

