export const typeWrite = (elemento) => {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 50 * i);
  });
}

const textToEffect = document.querySelector('.typewriter');

typeWrite(textToEffect);