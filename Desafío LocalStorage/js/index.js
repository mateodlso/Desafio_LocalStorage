const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

// añadi un evento al botón para guardar el valor en localStorage
buttonText.addEventListener('click', () => {
  // obtengo el valor del input
  const value = inputText.value;

  // se guarda el valor en localStorage con la clave "userInput"
  localStorage.setItem('userInput', value);

  // para limpiar el input una vez mandado el dato
  inputText.value = '';
});