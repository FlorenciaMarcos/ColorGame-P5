let colors = generateRandomColors(6);
let cuadrados = document.querySelectorAll(".square");
let pickedColor = colors[3];
pickedColors(6);
setColores();
document.getElementById("colorDisplay").innerText = pickedColor;
let mensaje = document.querySelector("#message");

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("reset").innerText = "jugar de nuevo?";
  document.getElementById("message").innerText = "";
  document.getElementById("title").style.background = "black";
  document.getElementById("hard").className = "selected";
  document.getElementById("easy").className = "";
  colors = generateRandomColors(6);
  pickedColors(6);
  setColores();
});

document.getElementById("easy").addEventListener("click", function () {
  document.getElementById("easy").className = "selected";
  document.getElementById("hard").className = "";
  colors = generateRandomColors(3);
  pickedColors(3);
  setColores();
  for (let i = 3; i < cuadrados.length; i++) {
    cuadrados[i].style.display = "none";
  }
});

document.getElementById("hard").addEventListener("click", function () {
  document.getElementById("hard").className = "selected";
  document.getElementById("easy").className = "";
  for (let i = 3; i < cuadrados.length; i++) {
    cuadrados[i].style.display = "block";
  }
});

function setColores() {
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = colors[i];
    cuadrados[i].addEventListener("click", function (event) {
      const colorSelect = event.target.style.backgroundColor;
      if (pickedColor === colorSelect) {
        document.getElementById("title").style.background = pickedColor;
        document.getElementById("message").innerText =
          "Felicitaciones: ¡Correcto!";
        changeColors(pickedColor);
        document.getElementById("reset").innerText = "play again?";
      } else {
        document.getElementById("message").innerText =
          "Error: Intente nuevamente";
        cuadrados[i].style.backgroundColor = "#232323";
      }
    });
  }
}

function changeColors(color) {
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = color;
  }
}

function pickedColors(cantidad) {
  pickedColor = colors[Math.floor(Math.random() * cantidad)];
}

function generateRandomColors(cantidad) {
  const colores = [];
  for (let index = 0; index < cantidad; index++) {
    colores.push(
      `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`
    );
  }
  return colores;
}
