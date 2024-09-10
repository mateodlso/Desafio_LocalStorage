// seleccion de donde se mostrara el dato
const dataElement = document.getElementById('data');

// para recuperar el valor almacenado en localstorage designe "userInput"
const storedValue = localStorage.getItem('userInput');

// si hay un valor asignado se muestra en la pagina
if (storedValue) {
  dataElement.textContent = storedValue;
} else {
  dataElement.textContent = 'No hay datos guardados';
}