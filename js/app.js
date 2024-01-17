let estadoLicuadora = "apagada";
let licuadora = document.getElementById("licuadora");
let sonidoLicuadora = document.getElementById("licuadora-sonido");
let sonidoBotonLicuadora = document.getElementById("licuadora-boton-sonido");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendida";
        sonidoDeLaLicuadora();
        licuadora.classList.add("active");
        /* console.log("prendida"); */
    } else {
        estadoLicuadora = "apagada";
        sonidoDeLaLicuadora();
        licuadora.classList.remove("active");
        /* console.log("apagada"); */
    }
}

function sonidoDeLaLicuadora() {
    if (sonidoLicuadora.paused) {
        sonidoBotonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        sonidoBotonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}
