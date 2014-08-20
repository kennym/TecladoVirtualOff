var password_field = document.getElementById("textfield");
password_field.removeAttribute("onkeyup");
password_field.removeAttribute("readonly");

var virtual_keyboard = document.getElementById("a_0").parentElement;
virtual_keyboard.remove();
