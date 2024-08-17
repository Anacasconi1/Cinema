const { default: axios } = require("axios");

const submitBtm = document.getElementById("submit-btn");
const form = document.getElementById("form-tag");
const checkboxes = document.querySelectorAll(".btn-check");
const titleForm = document.getElementById("title-form");
const directorForm = document.getElementById("director-form");
const urlForm = document.getElementById("basic-url");
const yearForm = document.getElementById("year-form");
const rateForm = document.getElementById("rate-form");
const minForm = document.getElementsByClassName("minutes")[0];
const hourForm = document.getElementsByClassName("hours")[0];
const inputsControl = document.getElementsByClassName("form-control");



submitBtm.addEventListener("click", (event) => {
  event.preventDefault();
  
  const objForm = {
    title: titleForm.value,
    director: directorForm.value,
    poster: urlForm.value,
    year: yearForm.value,
    genre: getLabelsofCheckedBtns(checkboxes),
    rate: rateForm.value,
    duration: durationMiddleware(hourForm.value, minForm.value)
  };
  console.log(objForm.genre)

  let isChecked = false;
  let isDefined = false;
  

  
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      isChecked = true;
      break;
    }
  }
  for (let input of inputsControl) {
    if (input.value.trim() !== "") {
      isDefined = true;
      break;
    }
  }
  if (!isChecked || !isDefined) {
    document.getElementById("error-message").style.visibility = "visible";
    
  } else {
    document.getElementById("error-message").style.visibility = "hidden";
    async function posterInfo() {
      try {
        await axios.post("http://localhost:3000/movies", objForm);
      } catch (error) {
        throw error;
      }
    }
    posterInfo();
  }
  form.reset();
});

function getLabelsofCheckedBtns(checkboxes) {
  const labels = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const label = document.querySelector(`label[for="${checkbox.id}"]`);
      if (label) {
        labels.push(label.textContent.trim());
      }
    }
  });
  return labels;
}

function durationMiddleware(hours, minutes) {
  const duration = `${hours}h ${minutes}min`;
  return duration;
}
