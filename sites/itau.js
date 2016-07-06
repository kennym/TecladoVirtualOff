var x = document.getElementsByClassName("rwb_login_input");

x[0].style.cursor = "pointer";
x[0].removeAttribute('readonly');
x[0].removeAttribute('autocomplete');
// optional
//x[0].removeAttribute('type');

var parent = document.getElementsByClassName("left pr10")[0];
var child = document.getElementById("rwb_login_tecladoBox");
parent.removeChild(child);