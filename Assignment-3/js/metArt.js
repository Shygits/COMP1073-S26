//Student info added dynamically
let studentInfo = document.querySelector("#student-info");
studentInfo.textContent = "Student: Shy-Anna | ID: 200640675";

// Fetching and displaying artwork data
let artContainer = document.querySelector("#art-container");


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
    let img =  document.createElement("img");
    img.src = data.primaryImage;
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