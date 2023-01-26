const squareInput = document.querySelector("#square-number");
const squareRange = document.querySelector("#square-range");
const inputs = document.querySelectorAll("input");

const radioType = document.querySelectorAll('input[name="type"]');
const radioHome = document.querySelectorAll('input[name="home"]');
const radioRoom = document.querySelectorAll('input[name="room-name"]');
const radioMore = document.querySelector('input[name="more"]');
const radioWalls = document.querySelector('input[name="walls"]');
const radioCeil = document.querySelector('input[name="ceil"]');

const basePrice = 6000;

squareRange.addEventListener("input", function () {
  squareInput.value = squareRange.value;
});
squareInput.addEventListener("input", function () {
  squareRange.value = squareInput.value;
});
const totalPriceElement = document.querySelector(".sum-number");
function calc() {
  let totalPrice = basePrice * parseInt(squareInput.value);

  for (const radio of radioType) {
    if (radio.checked) {
      totalPrice *= radio.value;
    }
  }
  for (const radio of radioHome) {
    if (radio.checked) {
      totalPrice *= radio.value;
    }
  }
  for (const radio of radioRoom) {
    if (radio.checked) {
      totalPrice *= radio.value;
    }
  }
  if (radioMore.checked) {
    totalPrice *= radioMore.value;
  }
  if (radioWalls.checked) {
    totalPrice *= radioWalls.value;
  }
  if (radioCeil.checked) {
    totalPrice *= radioCeil.value;
  }

  const formatter = new Intl.NumberFormat("ru");
  totalPriceElement.innerText = formatter.format(totalPrice);
}

calc();

for (const input of inputs) {
  input.addEventListener("input", function () {
    calc();
  });
}
