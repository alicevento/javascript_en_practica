//En tus tareas como desarrollador/a no sólo tendrás que escribir código desde 0, sino que muchas veces tendrás que completar tareas junto con tu equipo de trabajo, colaborando con las habilidades que cada uno posee para construir el proyecto solicitado. En uno de los proyectos que se están trabajando en la empresa, ya se ha resuelto el código HTML por un integrante del equipo de trabajo, y te solicitan incluir la lógica de JavaScript para terminar los requerimientos. En el siguiente desafío pondremos en práctica el uso de listener y selectores para manipular los elementos del DOM, ya sea para cambiar sus estilos o añadir mensajes informativos para el usuario a la hora de completar un formulario que permitan validar de manera rápida y sencilla los datos ingresados por el usuario.

//Desarrollar un código para validar un formulario de contacto utilizando el evento submit y las expresiones regulares que permitan el ingreso de caracteres desde la “A-a” hasta la “Z-z” mediante el método test() de JavaScript, mostrando un mensaje de error y/o éxito cuando corresponda. Es decir, el usuario deberá obligatoriamente ingresar datos en el formulario y que estos solo sean caracteres alfabéticos de la “a” hasta la “z” para poder enviar la información. Como se muestra en las siguientes imágenes.

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;

    // Expresión regular para validar que solo contenga letras mayúsculas, minúsculas y espacios
    let validar = /^[a-zA-Z\s]+$/;

    // Validar nombre
    if (!nombre.match(validar)) {
      document.querySelector(".errorNombre").innerHTML =
        "El nombre es requerido";
      document.querySelector(".errorNombre").style.color = "red";
    } else {
      document.querySelector(".errorNombre").innerHTML = "";
    }

    // Validar asunto
    if (!asunto.match(validar)) {
      document.querySelector(".errorAsunto").innerHTML =
        "El asunto es requerido";
      document.querySelector(".errorAsunto").style.color = "red";
    } else {
      document.querySelector(".errorAsunto").innerHTML = "";
    }

    // Validar mensaje
    if (!mensaje.match(validar)) {
      document.querySelector(".errorMensaje").innerHTML =
        "El mensaje es requerido";
      document.querySelector(".errorMensaje").style.color = "red";
    } else {
      document.querySelector(".errorMensaje").innerHTML = "";
    }

     // Si se llega hasta aquí, el formulario es válido
    if (!nombre.match(validar) || !asunto.match(validar) || !mensaje.match(validar)) {
        // Se muestra un mensaje de error si algún campo no es válido
        document.querySelector(".resultado").innerHTML = "El formulario contiene errores.";
        document.querySelector(".resultado").style.color = "red";
    } else {
        // Si todos los campos son válidos, se muestra el mensaje de éxito
        document.querySelector(".resultado").innerHTML = "El mensaje se ha enviado con éxito.";
        document.querySelector(".resultado").style.color = "green";
    }
  });
