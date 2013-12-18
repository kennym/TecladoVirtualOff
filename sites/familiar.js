/* Script for Banco Familiar login site */

document.getElementById("teclado").remove();
var password_field = document.getElementById("contrasena");
password_field.removeAttribute("onkeypress");
password_field.removeAttribute("onkeydown");
password_field.removeAttribute("onkeyup");
