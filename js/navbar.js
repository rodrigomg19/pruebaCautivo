//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_menu);
document.getElementById("btn_close").addEventListener("click", close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body1 = document.getElementById("body");



//Evento para mostrar y ocultar menú
    function open_menu(){
        body1.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }
    function close_menu(){
        body1.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }


//Haciendo el menú responsive(adaptable)
