function createrCard (movie) {

    const {title, year, director, duration, genre, rate, poster} = movie;

    const titleCard = document.createElement("a");
    const yearCard = document.createElement("li");
    const directorCard = document.createElement("li");
    const durationCard = document.createElement("li");
    const genreCard = document.createElement("li");
    const rateCard = document.createElement("li");
    const posterCard = document.createElement("img");
    const unorderedList = document.createElement("ul");
    const individualContainer = document.createElement("div");
    const divContainer = document.createElement("div");
    const divContainerTitle = document.createElement("div");

    titleCard.innerText = title;
    yearCard.innerText = year;
    directorCard.innerText = director;
    durationCard.innerText = duration;
    genreCard.innerText = separator(genre);
    rateCard.innerText = rate;
    posterCard.src = poster;
    posterCard.alt = `Poster de ${title}`;

    genreCard.className = "genre-array";

    unorderedList.appendChild(rateCard);
    unorderedList.appendChild(yearCard);
    unorderedList.appendChild(directorCard);
    unorderedList.appendChild(durationCard);
    unorderedList.appendChild(genreCard);

    divContainer.appendChild(posterCard);

    divContainer.className = "img-container";

    divContainerTitle.appendChild(titleCard);
    divContainerTitle.appendChild(unorderedList);

    divContainerTitle.className = "info-container";

    individualContainer.appendChild(divContainerTitle);
    individualContainer.appendChild(divContainer);

    individualContainer.className = "individual-card-container";
    return individualContainer
}

function separator (array) {
    let joined = array.join(" ");
    return  joined
}

module.exports = createrCard;