//Student info added dynamically
let studentInfo = document.querySelector("#student-info");
studentInfo.textContent = "Student: Shy-Anna | ID: 200640675";

// Fetching and displaying artwork data
let artContainer = document.querySelector("#art-container");


//Monet and Van Gogh object IDs randomly slected 10 of each from the Met Museum API: https://collectionapi.metmuseum.org/public/collection/v1/search?q=van%20gogh AND https://collectionapi.metmuseum.org/public/collection/v1/search?q=van%20gogh

//MONET OBJECT IDS
const fullMonetIDs = [ 
    437127, 
    438003, 
    437135, 
    437133, 
    437125, 
    438004, 
    437131, 
    438008, 
    437112, 
    437137  
];

//VAN GOGH OBJECT IDS
const fullVanGoghIDs = [
    849055,
    393458,
    438821,
    626268,
    337826,
    209020,
    436122,
    437347,
    436946,
    276299
]


// Function to fetch artwork data from the Met Museum API
function fetchArtwork(objectID) {
let url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`;

fetch(url)
        .then(response => response.json())
        .then(json => {
            displayArtwork(json);
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

// Fetch and display artworks for the given object IDs
// Van Gogh Starry NightobjectID
fetchArtwork(436533); // "Starry Night"

// Monet  objectID
fetchArtwork(76559); // "The Path through the Irises"