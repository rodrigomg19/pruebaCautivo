
const elemento1 = document.getElementById('elemento1');
const elemento2 = document.getElementById('elemento2');
const elemento3 = document.getElementById('elemento3');
const elemento4 = document.getElementById('elemento4');
const elemento5 = document.getElementById('elemento5');
const elemento6 = document.getElementById('elemento6');
const elemento7 = document.getElementById('elemento7');
const elemento8 = document.getElementById('elemento8');
const elemento9 = document.getElementById('elemento9');
const elemento10 = document.getElementById('elemento10');
const elemento11 = document.getElementById('elemento11');
const elemento12 = document.getElementById('elemento12');
const elemento13 = document.getElementById('elemento13');
const elemento14 = document.getElementById('elemento14');
const elemento15 = document.getElementById('elemento15');
const elemento16 = document.getElementById('elemento16');
const elemento17 = document.getElementById('elemento17');
const elemento18 = document.getElementById('elemento18');
const elemento19 = document.getElementById('elemento19');
const elemento20 = document.getElementById('elemento20');
const elemento21 = document.getElementById('elemento21');
const elemento22 = document.getElementById('elemento22');
const elemento23 = document.getElementById('elemento23');
const elemento24 = document.getElementById('elemento24');
const elemento25 = document.getElementById('elemento25');
const elemento26 = document.getElementById('elemento26');
const elemento27 = document.getElementById('elemento27');
const elemento28 = document.getElementById('elemento28');
const elemento29 = document.getElementById('elemento29');
const elemento30 = document.getElementById('elemento30');
const elemento31 = document.getElementById('elemento31');
const elemento32 = document.getElementById('elemento32');
const elemento33 = document.getElementById('elemento33');
const elemento34 = document.getElementById('elemento34');
const elemento35 = document.getElementById('elemento35');
const elemento36 = document.getElementById('elemento36');
const elemento37 = document.getElementById('elemento37');
const elemento38 = document.getElementById('elemento38');
const elemento39 = document.getElementById('elemento39');
const elemento40 = document.getElementById('elemento40');


const cargarTexto = (entradas, observador) => {
    entradas.forEach((entrada) =>{
        if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
		} else {
			entrada.target.classList.remove('visible');
		}
    });
}

const observador = new IntersectionObserver(cargarTexto, {
    root: null,
    rootMargin: '10000px 0px 0px 0px',
    threshold: 0.5
});

observador.observe(elemento1);
observador.observe(elemento2);
observador.observe(elemento3);
observador.observe(elemento4);
observador.observe(elemento5);
observador.observe(elemento6);
observador.observe(elemento7);
observador.observe(elemento8);
observador.observe(elemento9);
observador.observe(elemento10);
observador.observe(elemento11);
observador.observe(elemento12);
observador.observe(elemento13);
observador.observe(elemento14);
observador.observe(elemento15);
observador.observe(elemento16);
observador.observe(elemento17);
observador.observe(elemento18);
observador.observe(elemento19);
observador.observe(elemento20);
observador.observe(elemento21);
observador.observe(elemento22);
observador.observe(elemento23);
observador.observe(elemento24);
observador.observe(elemento25);
observador.observe(elemento26);
observador.observe(elemento27);
observador.observe(elemento28);
observador.observe(elemento29);
observador.observe(elemento30);
observador.observe(elemento31);
observador.observe(elemento32);
observador.observe(elemento33);
observador.observe(elemento34);
observador.observe(elemento35);
observador.observe(elemento36);
observador.observe(elemento37);
observador.observe(elemento38);
observador.observe(elemento39);
observador.observe(elemento40);