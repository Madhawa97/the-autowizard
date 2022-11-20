import data from "../json/cars.json" assert { type: "json" };

const getCars = () => {
    let card = document.createElement('div');
    card.style.display = 'flex';
    card.style.flexWrap = 'wrap';
    card.style.justifyContent = 'space-around'
    let container = document.getElementById("cards-container");
    data.cars.forEach(element => {
        const {name, lot, bid, location, image_url} = element;
        const temp = `<div class="card mt-5" style="
            width: 25rem;
        ">
                <img class="card-img-top" src="${image_url}" alt="Card image cap">
                <div class="card-body" style="
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;
                ">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${lot}</p>
                    <p class="card-text">${location}</p>
                    <a href="#" class="btn btn-primary">${bid}</a>
                </div>
                </div>`;
        card.innerHTML += temp;
    });
    container.appendChild(card);
}

getCars();
