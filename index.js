const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Servindo o arquivo HTML
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
