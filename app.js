const express = require("express");
const applicationConfig = require('./src/config/application')
const apiRoutes = require('./src/modules')
const app = express();

applicationConfig(app)
apiRoutes(app)

app.listen(8080, () => {
    console.log("El servidor está inicializado en el puerto 8080");
});