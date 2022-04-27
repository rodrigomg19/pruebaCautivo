window.addEventListener("scroll", function () {
  var header = document.querySelector("header");

  header.classList.toggle("abajo", window.scrollY > 0);
  header.classList.toggle("arriba", window.scrollY > 500);
});

const body = document.body;
const menu = document.querySelector(".header .menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});


var miCuadrado = document.getElementById('holas');

// Creamos un objeto IntersectionObserver
const observerCuadrado = new IntersectionObserver((entries) => {
  // Comprobamos todas las intesecciones. En el ejemplo solo existe una: cuadrado
  entries.forEach((entry) => {
    // Si es observable, entra
    if (entry.isIntersecting) {
      // Añadimos la clase '.cuadrado--rota'
      miCuadrado.classList.add('fadeInUp');
    } else {
      // En caso contrario quita la clase
      miCuadrado.classList.remove('fadeInUp');
    }
  });
});

// Añado a mi Observable que quiero observar. En este caso el cuadrado
observerCuadrado.observe(miCuadrado);


var boton = document.querySelector(".mv-button")
function mision() {
	document.getElementById("text_changer").innerHTML = "Nuestra misión es desarrollar soluciones metalmecánicas desarrolladas conforme a las necesidades de nuestros clientes, a los cuales brindamos productos diseñados y fabricados por personal altamente calificado que garantiza una excelente calidad.";
  boton.classList.add('.borde');
};
function vision() {
	document.getElementById("text_changer").innerHTML = "Consolidarnos como una de las Empresas líderes en diseño, construcción y mantenimiento de equipos y herramientas para el sector de la minería, y así satisfacer los requerimientos de nuestros clientes en cuanto a entregas oportunas, asistencia técnica y calidad de servicio, a través de un equipo de trabajo competente.";

};


//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);
