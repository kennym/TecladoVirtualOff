var x = document.getElementsByClassName("rwb_input_value_pin");

x[0].style.cursor = "pointer";
x[0].removeAttribute('readonly');
x[0].removeAttribute('autocomplete');

var parent = document.getElementsByClassName("teclado_pin")[0];
var child = document.getElementById("tecladoBoxDivIdDefault");
parent.removeChild(child);
