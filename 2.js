//A partir de un selector de colores, cambia el color del cuadro principal al hacer click sobre uno de los colores.

function cambiarColorCaja() {
    const botones = document.querySelectorAll("button"); 
    
    botones.forEach((btn) => {
      btn.addEventListener("click", () => {
        caja.style.backgroundColor = btn.style.backgroundColor;
      });
    });
  }

  cambiarColorCaja();