const formV = document.getElementById("form-tag");
const inputs = document.querySelectorAll("#form-tag input");

const regex = {
  title: /^[A-Z][A-Za-z0-9 ,.!?'-]*[A-Za-z0-9.!?']$/,
  director: /^[A-Z][A-Za-z0-9 ,.!?'-]*[A-Za-z0-9.!?']$/,
  poster: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
  hora: /^(?:[0-5])$/,
  minuto: /^(?:[0-9]|[1-5][0-9]|60)$/,
  year: /^(18\d\d|19\d\d|20[01]\d|202[0-4])$/,
  rate: /^(10(\.0)?|[0-9](\.[0-9])?)$/,
};

const fields = {
  title: false,
  director: false,
  poster: false,
  hora: false,
  minuto: false,
  year: false,
  rate: false,
};

const validarFormulatrio = (event) => {
  switch (event.target.name) {
    case "title":
      if (regex.title.test(event.target.value)) {
        document.getElementById("title-form").style.background = "green";
        fields.title = true;
      } else {
        document.getElementById("title-form").style.background = "red";
        fields.title = false;
      }
      break;
    case "director":
      if (regex.director.test(event.target.value)) {
        document.getElementById("director-form").style.background = "green";
        fields.director = true;
      } else {
        document.getElementById("director-form").style.background = "red";
        fields.director = false;
      }
      break;
    case "url":
      if (regex.poster.test(event.target.value)) {
        document.getElementById("basic-url").style.background = "green";
        fields.poster = true;
      } else {
        document.getElementById("basic-url").style.background = "red";
        fields.poster = false;
      }
      break;
    case "hours":
      if (regex.hora.test(event.target.value)) {
        document.getElementById("hours-form").style.background = "green";
        fields.hora = true;
      } else {
        document.getElementById("hours-form").style.background = "red";
        fields.hora = false;
      }
      break;
    case "minutes":
      if (regex.minuto.test(event.target.value)) {
        document.getElementById("minutes-form").style.background = "green";
        fields.minuto = true;
      } else {
        document.getElementById("minutes-form").style.background = "red";
        fields.minuto = false;
      }
      break;
    case "year":
      if (regex.year.test(event.target.value)) {
        document.getElementById("year-form").style.background = "green";
        fields.year = true;
      } else {
        document.getElementById("year-form").style.background = "red";
        fields.year = false;
      }
      break;
    case "rate":
      if (regex.rate.test(event.target.value)) {
        document.getElementById("rate-form").style.background = "green";
        fields.rate = true;
      } else {
        document.getElementById("rate-form").style.background = "red";
        fields.rate = false;
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulatrio);
  input.addEventListener("blur", validarFormulatrio);
});

formV.addEventListener("submit", () => {
    if(!fields.title || !fields.director || !fields.poster || !fields.hora || !fields.minuto || !fields.year || !fields.rate){
        const btnSmt = document.getElementById("submit-btn");
        btnSmt.disabled = true;
    }
});
