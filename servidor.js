const express = require("express");
const path = require("path"); 

const app = express();
const PUERTO = process.env.PORT || 3000;

const USUARIO_VALIDO = "admin";
const CONTRASENA_VALIDA = "admin"; 

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === USUARIO_VALIDO && password === CONTRASENA_VALIDA) {
        res.redirect("/pagina.html");
    } else {
        res.redirect("/login.html?error=1");
    }
});

app.listen(PUERTO, () => {
    console.log(`Servidor activo en http://localhost:${PUERTO}`);
});