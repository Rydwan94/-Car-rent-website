const nav = document.getElementById("nav");
const container = document.getElementById("container");
const searchElements = document.getElementById("searchElements");
const searchInput = document.getElementById("carsInput");
const formContainer = document.getElementById("formContainer");
const costOfCar = document.getElementById("costOfCar");
const tiresPlaceHolder = document.getElementById("tire");
const skinPlaceHolder = document.getElementById("skin");
const sensorPlaceHolder = document.getElementById("sensor");
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
const formButtonVolvo = document.getElementById("formButtonVolvo");
const formButtonRenault = document.getElementById("formButtonRenault");
const formButtonOpel = document.getElementById("formButtonOpel");
const formButtonAudi = document.getElementById("formButtonAudi");
const formBackButton = document.getElementById("formBackButton");
const tiresButton = document.getElementById("tiresButton");
const seatsButton = document.getElementById("seatsButton");
const sensorButton = document.getElementById("sensorButton");
const removeTires = document.getElementById("removeTires");
const removeSeats = document.getElementById("removeSeats");
const removeSensors = document.getElementById("removeSensors");
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
  constructor(car, price, value) {
    this.car = document.getElementById(car);
    this.price = price;
    this.value = value;
  }
  showCar(value, car) {
    searchInput.addEventListener("change", () => {
      if (searchInput.value === value) {
      car.style.display = "block"}
      else(car.style.display = "none")
    });
  }
}

let Renault = new Cars("carRenault", 120000, "Renault");
let Volvo = new Cars("carVolvo", 385900, "Volvo");
let Opel = new Cars("carOpel", 140000, "Opel");
let Audi = new Cars("carAudi", 200000, "Audi");
let allCars = new Cars("carRenault","carVolvo", 0, "Wszystkie dostępne")

Volvo.showCar(Volvo.value, Volvo.car);
Renault.showCar(Renault.value, Renault.car);
Opel.showCar(Opel.value, Opel.car);
Audi.showCar(Audi.value, Audi.car);
allCars.showCar(allCars.value, allCars.car)


// searchInput.addEventListener("change", () => {
//   if (searchInput.value === Renault.value) {
//     Renault.car.style.display = "block";
//   } else Renault.car.style.display = "none";
// });


