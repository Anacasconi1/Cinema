const axios = require("axios");
const createrCard = require("./cardCreaterByGenre");
const titlePage = document.getElementById("genre-title");

const cardContainer = document.getElementsByClassName(
  "movies-genre-container"
)[0];
const value = getTitle();
document.addEventListener("DOMContentLoaded", () => {
  document.title= `SHHILENCE - ${value}`;
  titlePage.textContent = value;
});

function getTitle() {
  return sessionStorage.getItem("title");
}

const mapper = (datos) => {
  cardContainer.innerHTML = "";
  datos.map((obj) => {
    const includer = obj.genre.includes(value);
    if (includer) {
      cardContainer.appendChild(createrCard(obj));
    }
  });
};

async function getterInfo() {
  try {
    const info = await axios.get("http://localhost:3000/movies");
    return mapper(info.data);
  } catch (error) {
    throw error;
  }
}

getterInfo();
