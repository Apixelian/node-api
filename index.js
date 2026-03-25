const express = require("express");
const app = express();

app.listen(3000, '0.0.0.0',() => { // Levantar en todas las interfaces de red
    console.log("Api de Angel. Corriendo en el puerto", 3000)
});
