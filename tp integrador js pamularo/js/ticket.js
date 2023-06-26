
// alert("hola word")

// Validar
function validarFormulario(event) {
    event.preventDefault();
  
    // Valorar
    const nombre = document.getElementById('name').value.trim();
    const apellido = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const categoria = document.getElementById('inputState').value;
  
    // Validar los campos
    if (nombre === '' || apellido === '' || email === '' || isNaN(cantidad)) {
      alert('Por favor, complete todos los campos requeridos y asegúrese de ingresar un número válido en la cantidad.');
      return;
    }
  
    // Validar correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }
  
    // Cálculo
    let totalPagar = 0;
    switch (categoria) {
      case 'Estudiante':
        totalPagar = cantidad * 200 * 0.2;
        break;
      case 'Trainee':
        totalPagar = cantidad * 200 * 0.5;
        break;
      case 'Junior':
        totalPagar = cantidad * 200 * 0.85;
        break;
      default:
        alert('Seleccione una categoría válida.');
        return;
    }
  
    // Mostrar resultado
    document.getElementById('calculo').textContent = 'Total a Pagar: $' + totalPagar.toFixed(2);
  }
  
  // Borrar campos
  function borrarCampos() {
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('inputState').value = 'Estudiante';
    document.getElementById('calculo').textContent = 'Total a Pagar: $';
  }
  

  const formulario = document.getElementById('form');

  formulario.addEventListener('submit', validarFormulario);
  

  const botonBorrar = document.querySelector('#form button[type="button"]');

  botonBorrar.addEventListener('click', borrarCampos);
  



/* var form = document.getElementById("form");

form.addEventListener("submit", e=> {
    e.preventDefault();

document.getElementById("Form").addEventListener("submit", function(event) {
   event.preventDefault(); // Evita que el formulario se envíe y la página se recargue
    

   const name = document.getElementById("name");
   const surname = document.getElementById("surname");
   const email = document.getElementById("email");

   if (name.value.trim() == '' || surname.value.trim() == '' || email.value.trim() == '') { 
    alert("Completa todos los datos")
 else if (!isValidEmail(email.value)) {
    alert('Ingrese un correo electrónico válido');
} else {
    form.submit()
}

*/
    
    //Verifica si los valores ingresados son números válidos
  // if (isNaN(cantidad)) { //|| isNaN(num2)
  //  alert("Ingresa un número válido.");
  // return;
  // }

    //Obtiene los valores de los campos de entrada
 //   var cantidad = parseFloat(document.getElementById("cantidad").value);
  //  var num2 = 0.5 // parseFloat(document.getElementById("num2").value);



/*
var calculo = document.getElementById("calculo")
calculo.innerText = "Total a Pagar: $" + resultado
*/

/* var suma = function () {
    // var cantidad = Number
    // var estudiante = 0,8;
    // var trainee = 0,5;
    // var junior = 0,15;
    var num1 = 5
    var num2 = 10

    return num1 + num2;
};

suma()
*/
