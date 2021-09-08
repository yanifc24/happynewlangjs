
//Función para cambiar a mayúscula lo que ingresa el usuario por input (sección:contacto -formulario)
function mayuscula() {
    var x = document.getElementById("mayusculas");
    x.value = x.value.toUpperCase();
  }

//Función para cambiar background en input (sección:contacto-formulario)
function cambioFondo(x) {
  x.style.background = "#F1F8D0";
}

//Validacipón formulario de contacto (figuran en console log los datos ingresados)

let formularioContacto      = document.getElementById("forms");
$("#forms").submit( function(e) {

  e.preventDefault();
   
  let forms = e.target

  console.log(forms.children[2].value); 
 
  console.log(forms.children[6].value);  
  
  console.log(forms.children[10].value);  
}


);

//Alerta al enviar el formulario
$("#botonForm").on("click", alerta); 

  function alerta() {Swal.fire({
    icon: 'success',
    title: 'Correcto!',
    text: 'Formulario enviado',
    footer: '<a href=""> Enviado </a>'
  })
   }


//Botón inscripción niveles cambia de color

let botonInscribirse      = document.getElementsByClassName("btnInscripcion__niveles");
$(".btnInscripcion__niveles").on("mouseover", colorInscripcion); 

  function colorInscripcion() {
    botonInscribirse[0].style.background = "lightblue";}


    