function color(event) {
  cambio(valor);
  for (let j = 0; j < elements.length; j++) {
    if (valor == true) {
      event.currentTarget.style.backgroundColor = 'red';
      valor = !valor;
    } else {
      event.currentTarget.style.backgroundColor = 'blue';
      valor = !valor;
    }
  }
}
function cambio(valor) {
  return valor;
}

// necesito un ciclo que me marque las clases 
let ids = 0;
let valor = true;
let elements = 0;
for (let ids = 0; ids < 9; ids++) {
  elements = document.querySelectorAll(`#c${ids}`);
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', color);
  }

}