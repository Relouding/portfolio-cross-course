
const detailContainer = document.querySelector(".info-container-new");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://wordpress.relouding.eu/wp-json/wc/store/products/" + id;

console.log(url);

async function fetchDetails() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("there is an error", error);
    }
    
}

fetchDetails();

function createHtml(details) {
    detailContainer.innerHTML = `<h1>${details.name}</h1>
                                 <img src="${details.images[0].src}" alt"${details.name}">
                                 <p>${details.description}</p>`;
}