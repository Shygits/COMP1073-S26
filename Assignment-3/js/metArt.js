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

