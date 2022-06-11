const nav = document.getElementById("nav");
const container = document.getElementById("container");
const searchElements = document.getElementById("searchElements");
const searchInput = document.getElementById("carsInput");
const formContainer = document.getElementById("formContainer");
const costOfCar = document.getElementById("costOfCar");

const errorContainer = document.getElementById("errorContainer");
const formName = document.getElementById("formName");
const formLastName = document.getElementById("formLastName");
const boughtCar = document.getElementById("boughtCarContainer");
const boughtCarImage = document.getElementById("boughtCarImage");
const boughtCarInfo = document.getElementById("boughtCarInfo");

const volvoImage = document.createElement("img");
const renaultImage = document.createElement("img");
const opelImage = document.createElement("img");
const audiImage = document.createElement("img");
const foo = document.getElementById("foo");

volvoImage.src = "src/volvo.webp";
renaultImage.src = "src/renault.jpg";
opelImage.src = "src/opel.webp";
audiImage.src = "src/audi.webp";

const hide = document.getElementById("hide");
const carsClass = document.getElementsByClassName("carsCards")

const formAcceptButton = document.getElementById("formAcceptButton");
const returnFromBuyButton = document.getElementById("returnFromBuyButton");
const formLeasing = document.getElementById("formLeasing");
const formCash = document.getElementById("formCash");

nav.addEventListener("click", () => {
  const links = document.getElementById("myLinks");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
});

hide.addEventListener("click", () => {
  searchElements.classList.toggle("hidden");
  carVolvo.style.display = "none";
  carRenault.style.display = "none";
  carOpel.style.display = "none";
  carAudi.style.display = "none";
});

class Cars {
  constructor(element, elements, price, value) {
    this.element = document.getElementById(element);
    this.elements = document.getElementsByClassName(elements);
    this.price = price;
    this.value = value;
  }
  showCar(value, element) {
    searchInput.addEventListener("change", () => {
      if (searchInput.value === value) {
        element.style.display = "block";
      } else element.style.display = "none";
    });
  }
  showAllCars(value, elements) {
    searchInput.addEventListener("change", () => {
      if (searchInput.value === value) {
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.display = "block";
        }
      }
    });
  }
  carButton(element, secondElement, price) {
    element.addEventListener("click", () => {
      formContainer.style.display = "block";
      container.style.display = "none";
      costOfCar.value = price;
      formLeasing.checked = true;
      secondElement.addEventListener("click", () => {
        formContainer.style.display = "none";
        container.style.display = "block";
      });
    });
  }
  addAccessories(element, secondElement, thirdElement, value, cost) {
    element.addEventListener("click", () => {
      if (thirdElement.innerHTML === "") {
        costOfCar.value = Number(costOfCar.value) + cost;
      }
      thirdElement.innerHTML = value;
      
    });
    secondElement.addEventListener("click", () => {
      if (thirdElement.innerHTML.length >= 1) {
        costOfCar.value = Number(costOfCar.value) - cost;
      }
      thirdElement.innerHTML = "";
    });
  }
}

let Volvo = new Cars("carVolvo", "", 385900, "Volvo");
let Renault = new Cars("carRenault", "", 120000, "Renault");
let Opel = new Cars("carOpel", "", 140000, "Opel");
let Audi = new Cars("carAudi", "", 200000, "Audi");
let showAllCars = new Cars("", "carsCards", 0, "allCars");

Volvo.showCar(Volvo.value, Volvo.element);
Renault.showCar(Renault.value, Renault.element);
Opel.showCar(Opel.value, Opel.element);
Audi.showCar(Audi.value, Audi.element);
showAllCars.showAllCars(showAllCars.value, showAllCars.elements);

Volvo.carButton(formButtonVolvo, formBackButton, Volvo.price);
Renault.carButton(formButtonRenault, formBackButton, Renault.price);
Opel.carButton(formButtonOpel, formBackButton, Opel.price);
Audi.carButton(formButtonAudi, formBackButton, Audi.price);

Volvo.addAccessories(tiresButton, removeTires, tire, "<li>Opony na każdy sezon</li>", 5000)
Volvo.addAccessories(seatsButton, removeSeats, skin, "<li>Skórzane fotele</li>", 10000)
Volvo.addAccessories(sensorButton, removeSensors, sensor, "<li>Czujniki Parkowania</li>", 10000)
Renault.addAccessories(tiresButton, removeTires, tire, "<li>Opony na każdy sezon</li>", 5000)
Renault.addAccessories(seatsButton, removeSeats, skin, "<li>Skórzane fotele</li>", 10000)
Renault.addAccessories(sensorButton, removeSensors, sensor, "<li>Czujniki Parkowania</li>", 10000)
let x = document.getElementsByClassName("carsCards");
