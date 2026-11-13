const parametros = new URLSearchParams(window.location.search);

if (parametros.get("error") === "1") {
    const aviso = document.getElementById("mensaje-error");
    if (aviso) {
        aviso.textContent = "Usuario o contraseña incorrectos";
        aviso.style.color = "#c0392b";
    }
}
