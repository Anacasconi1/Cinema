const axios = require("axios");
const createrCard = require("./cardCreaterFunction");
const alternativeData = require("./alternativeData");

const cardContainer = document.getElementById("cards-container");


const mapper = (datos) => {
  cardContainer.innerHTML = "";
  datos.map((obj) => {
    cardContainer.appendChild(createrCard(obj));
  });
};

async function getterInfo() {
  try {
    const info = await axios.get("http://localhost:3000/movies");
    return mapper(info.data);
  } catch (error) {
    return mapper(alternativeData);
  }
}

getterInfo();


const allBtns = document.getElementsByClassName("genre-link");

for (let btn of allBtns){
  btn.addEventListener('click', ()=>{
    saveTitle(btn.textContent);
    location.href='./files-html/genres.html';
    
  })
};

function saveTitle (valueTitle) {
  sessionStorage.setItem('title', valueTitle)
}


