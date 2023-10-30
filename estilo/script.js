document.getElementById("btn_open").addEventListener("click", open_close_menu);

var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");
var titulo = document.getElementById("titulo")
var vss_move = document.getElementById("vss_move")
var vssa_move = document.getElementById("vssa_move")
var vssb_move = document.getElementById("vssb_move")
var vssc_move = document.getElementById("vssc_move")
var vssd_move = document.getElementById("vssd_move")

function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu_side_move");
    titulo.classList.toggle("titulo_move")
    vss_move.classList.toggle("vss_move")
    vssa_move.classList.toggle("vssa_move")
    vssb_move.classList.toggle("vssb_move")
    vssc_move.classList.toggle("vssc_move")
    vssd_move.classList.toggle("vssd_move")
    vsse_move.classList.toggle("vsse_move")
}