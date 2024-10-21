const fs = require("fs");
const express = require('express');
const app = express();
const modelo = require("./servidor/modelo.js"); 
const PORT = process.env.PORT || 3000;

let sistema = new modelo.Sistema(); 

app.use(express.static(__dirname + "/"));

//--------------
app.get("/", function (request, response) {
    let contenido = fs.readFileSync(__dirname + "/cliente/index.html");
    //contenido si esta definido
    response.setHeader("Content-type", "text/html");
    response.send(contenido);
});

app.get("/agregarUsuario/:nick", function (request, response) {
    let nick = request.params.nick;
    let res = sistema.agregarUsuario(nick);
    //Ojo estoy asumiendo que agregarUsuario(nick) es una llamada síncrona
    response.send(res);
}); 

app.get("/numeroUsarios", function(request,response){
    let res=sistema.numeroUsuarios();
    response.send(res);

});

app.get("/obtenerUsarios", function(request,response){
    let lista=sistema.obtenerUsuarios();
    response.send(lista);

});

app.get("/eliminarUsario/:nick", function(request,response){
    let nick=request.params.nick;
    let res=sistema.eliminarUsuario(nick);
    response.send(res);

});
app.get("/usuarioActivo/:nick", function (request, response) {
    let nick=request.params.nick;
    let res =sistema.usuarioActivo(nick);
    response.send(res);

});








//-----------

app.listen(PORT, () => {
    console.log(`App está escuchando en el puerto ${PORT}`);
    console.log('Ctrl+C para salir');
}); 
