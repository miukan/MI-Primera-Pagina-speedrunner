function loguear(){
    const user=document.getElementById("username").value;
    const pass=document.getElementById("password").value;

    if (user=="admin"&&pass=="admin"){
        window.location.href="pagina.html";
    }
    else{
        alert("usuario o contraseña incorrectos");
    }
}