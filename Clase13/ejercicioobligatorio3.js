
let user = document.querySelector("#usuario");
let pass = document.querySelector("#clave");

function validar() {
    if (!user.value) {
        alert ("Por favor, complete su usuario");
        return false;
    } else if (!pass.value) {
        alert("Por favor, complete su clave");
        return false;
    } else if(user.value.indexOf("@") == -1){
        alert("El campo Usuario debe contener un @");
        return false;
    } else {
        return true;
        }
}
