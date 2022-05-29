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

const cars = [
  { car: carVolvo, 
    brand: "Volvo XC90", 
    price: 385900, 
    picture: volvoImage },
  {
    car: carRenault,
    brand: "Renault Kadjar",
    price: 120000,
    picture: renaultImage,
  },
  { car: carOpel,
    brand: "Opel Astra", 
    price: 140000, 
    picture: opelImage },
  { car: carAudi, 
    brand: "Audi A1", 
    price: 200000, 
    picture: audiImage },
];




const hideCars = () => {
  cars[i].car.style.display = "none";
};

hide.addEventListener("click", () => {
  searchElements.classList.toggle("hidden");
  cars
});

searchInput.addEventListener("change", () => {
  for (let i = 0; i < cars.length; i++) {
    if (searchInput.value === "allCars") {
      cars[i].car.style.display = "block";
    } else if (searchInput.value === "Volvo") {
      cars[0].car.style.display = "block";
      hideCars();
    } else if (searchInput.value === "Renault") {
      cars[1].car.style.display = "block";
      hideCars();
    }
  }
});


