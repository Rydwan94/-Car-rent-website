const nav = document.getElementById("nav");
const container = document.getElementById("container");
const searchElements = document.getElementById("searchElements");
const searchInput = document.getElementById("carsInput");
const carVolvo = document.getElementById("carVolvo");
const carRenault = document.getElementById("carRenault");
const carOpel = document.getElementById("carOpel");
const carAudi = document.getElementById("carAudi");
const formContainer = document.getElementById("formContainer");
const costOfCar = document.getElementById("costOfCar");
const tiresPlaceHolder = document.getElementById("tire");
const skinPlaceHolder = document.getElementById("skin");
const sensorPlaceHolder = document.getElementById("sensor");
const errorContainer = document.getElementById("errorContainer");
const formName = document.getElementById("formName");
const formLastName = document.getElementById("formLastName");
const buyedCar = document.getElementById("buyedCarContainer");
const buyedCarImage = document.getElementById("buyedCarImage");
const buyedCarInfo = document.getElementById("buyedCarInfo");

const volvoImage = document.createElement("img");
const renaultImage = document.createElement("img");
const opelImage = document.createElement("img");
const audiImage = document.createElement("img");
const foo = document.getElementById("foo");

volvoImage.src = "src/volvo.webp";
renaultImage.src = "src/renault.jpg";
opelImage.src = "src/opel.webp";
audiImage.src = "src/audi.webp";

const $hide = document.getElementById("hide");
const $formButtonVolvo = document.getElementById("formButtonVolvo");
const $formButtonRenault = document.getElementById("formButtonRenault");
const $formButtonOpel = document.getElementById("formButtonOpel");
const $formButtonAudi = document.getElementById("formButtonAudi");
const $formBackButton = document.getElementById("formBackButton");
const $tiresButton = document.getElementById("tiresButton");
const $seatsButton = document.getElementById("seatsButton");
const $sensorButton = document.getElementById("sensorButton");
const $removeTires = document.getElementById("removeTires");
const $removeSeats = document.getElementById("removeSeats");
const $removeSensors = document.getElementById("removeSensors");
const $formAcceptButton = document.getElementById("formAcceptButton");
const $returnFromBuyButton = document.getElementById("returnFromBuyButton");
const $formLeasing = document.getElementById("formLeasing");
const $formCash = document.getElementById("formCash")

nav.addEventListener("click", () => {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
});

$hide.addEventListener("click", () => {
  searchElements.classList.toggle("hidden");
  carVolvo.style.display = "none";
  carRenault.style.display = "none";
  carOpel.style.display = "none";
  carAudi.style.display = "none";
});

searchInput.addEventListener("change", () => {
  if (searchInput.value === "allCars") {
    carVolvo.style.display = "block";
    carRenault.style.display = "block";
    carOpel.style.display = "block";
    carAudi.style.display = "block";
  } else if (searchInput.value === "Volvo") {
    carVolvo.style.display = "block";
    carRenault.style.display = "none";
    carOpel.style.display = "none";
    carAudi.style.display = "none";
  } else if (searchInput.value === "Renault") {
    carRenault.style.display = "block";
    carVolvo.style.display = "none";
    carOpel.style.display = "none";
    carAudi.style.display = "none";
  } else if (searchInput.value === "Opel") {
    carOpel.style.display = "block";
    carVolvo.style.display = "none";
    carRenault.style.display = "none";
    carAudi.style.display = "none";
  } else if (searchInput.value === "Audi") {
    carAudi.style.display = "block";
    carRenault.style.display = "none";
    carVolvo.style.display = "none";
    carOpel.style.display = "none";
  }
});

function pokazCzas() {
  let monthsArr = [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "września",
    "października",
    "listopada",
    "grudnia",
  ];

  let daysArr = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];

  let dateObj = new Date();
  dateObj.setDate(dateObj.getDate() + 14);

  let year = dateObj.getFullYear();
  let month = dateObj.getMonth();
  let numDay = dateObj.getDate();
  let day = dateObj.getDay();

  let output =
    daysArr[day] +
    ", " +
    numDay +
    " " +
    monthsArr[month] +
    " " +
    year +
    " roku";

  return output;
}

$formButtonVolvo.addEventListener("click", () => {
  formContainer.classList.toggle("hidden");
  container.style.display = "none";
  buyedCarImage.appendChild(volvoImage);
  buyedCarInfo.innerHTML =
    `Gratulujemy zakupu! Szacowany czas dostawy </br>` + pokazCzas();
});

$formButtonRenault.addEventListener("click", () => {
  formContainer.classList.toggle("hidden");
  container.style.display = "none";
  buyedCarImage.appendChild(renaultImage);
  buyedCarInfo.innerHTML =
    `Gratulujemy zakupu! Szacowany czas dostawy </br>` + pokazCzas();
});

$formButtonOpel.addEventListener("click", () => {
  formContainer.classList.toggle("hidden");
  container.style.display = "none";
  buyedCarImage.appendChild(opelImage);
  buyedCarInfo.innerHTML =
    `Gratulujemy zakupu! Szacowany czas dostawy </br>` + pokazCzas();
});

$formButtonAudi.addEventListener("click", () => {
  formContainer.classList.toggle("hidden");
  container.style.display = "none";
  buyedCarImage.appendChild(audiImage);
  buyedCarInfo.innerHTML =
    `Gratulujemy zakupu! Szacowany czas dostawy </br>` + pokazCzas();
});

// form

$formLeasing.checked = true

$formButtonVolvo.addEventListener("click", () => {
  let volvoPrice = 385900;
  costOfCar.value = volvoPrice;
});
$formButtonRenault.addEventListener("click", () => {
  let reantulPrice = 120000;
  costOfCar.value = reantulPrice;
});
$formButtonOpel.addEventListener("click", () => {
  let opelPrice = 140000;
  costOfCar.value = opelPrice;
});
$formButtonAudi.addEventListener("click", () => {
  let audiPrice = 200000;
  costOfCar.value = audiPrice;
});

$formBackButton.addEventListener("click", () => {
  formContainer.classList.toggle("hidden");
  container.style.display = "block";
});

function acessoriesAdding() {
  $tiresButton.addEventListener("click", () => {
    if (tiresPlaceHolder.innerHTML === "") {
      costOfCar.value = Number(costOfCar.value) + 5000;
    }
    tiresPlaceHolder.innerHTML = "<li>Opony na każdy sezon</li>";
  });

  $seatsButton.addEventListener("click", () => {
    if (skinPlaceHolder.innerHTML === "") {
      costOfCar.value = Number(costOfCar.value) + 10000;
    }
    skinPlaceHolder.innerHTML = "<li>Skórzane fotele</li>";
  });

  $sensorButton.addEventListener("click", () => {
    if (sensorPlaceHolder.innerHTML === "") {
      costOfCar.value = Number(costOfCar.value) + 4000;
    }
    sensorPlaceHolder.innerHTML = "<li>Czujniki parkowania</li>";
  });

  $removeTires.addEventListener("click", () => {
    if (tiresPlaceHolder.innerHTML === "<li>Opony na każdy sezon</li>") {
      costOfCar.value = Number(costOfCar.value) - 5000;
    }
    tiresPlaceHolder.innerHTML = "";
  });

  $removeSeats.addEventListener("click", () => {
    if (skinPlaceHolder.innerHTML === "<li>Skórzane fotele</li>") {
      costOfCar.value = Number(costOfCar.value) - 10000;
    }
    skinPlaceHolder.innerHTML = "";
  });

  $removeSensors.addEventListener("click", () => {
    if (sensorPlaceHolder.innerHTML === "<li>Czujniki parkowania</li>") {
      costOfCar.value = Number(costOfCar.value) - 4000;
    }

    sensorPlaceHolder.innerHTML = "";
  });
}

acessoriesAdding();

$formAcceptButton.addEventListener("click", () => {
  if (formName.value =="" || formLastName ==""){
    errorContainer.innerText = "Podaj imię i nazwisko"
  }
  else if (formName.value[0] !== formName.value[0].toUpperCase()) {
    errorContainer.style.display = "block";
    errorContainer.innerText =
      "Imię i nazwisko powinny zaczynać się z dużej litery";
  } else if (formLastName.value[0] !== formLastName.value[0].toUpperCase()) {
    errorContainer.style.display = "block";
    errorContainer.innerText =
      "Imię i nazwisko powinny zaczynać się z dużej litery";
  } else if (
    formName.value[0] === formName.value[0].toUpperCase() &&
    formLastName.value[0] === formLastName.value[0].toUpperCase()
  ) {
    errorContainer.style.display = "none";
    foo.style.display = "none";
    formContainer.classList.toggle("hidden");
    buyedCar.style.display = "block";
  }
});

// $formLeasing.addEventListener('chec', () => {
//   errorContainer.innerText = 'asfasf'
// })

$returnFromBuyButton.addEventListener("click", () => {
  foo.style.display = "block";
  container.style.display = "block";
  buyedCar.style.display = "none";
  buyedCarImage.innerHTML = "";
  formName.value = "";
  formLastName.value = "";
  tiresPlaceHolder.innerText = "";
  skinPlaceHolder.innerText = "";
  sensorPlaceHolder.innerText = "";
});

function saveNameValue() {
  if (sessionStorage.getItem("autosave")) {
    // Restore a content of the input
    formName.value = sessionStorage.getItem("autosave");
  }

  formName.addEventListener("change", function () {
    // save value into sessionStorage object
    sessionStorage.setItem("autosave", formName.value);
  });
}

function saveLastNameValue() {
  if (sessionStorage.getItem("autosave")) {
    // Restore a content of the input
    formLastName.value = sessionStorage.getItem("autosave");
  }

  formLastName.addEventListener("change", function () {
    // save value into sessionStorage object
    sessionStorage.setItem("autosave", formLastName.value);
  });
}

saveNameValue();
saveLastNameValue();
