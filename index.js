const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Servindo arquivos estáticos
app.use(express.static(__dirname));

// Redireciona para a página de login por padrão
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
