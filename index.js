// cuando no se cambia de valor se agrega una const
// importa una libreria 'require
const http = require('http')
const PORT = 5000

//req lo que recibe,  res ejecuta lo que se recibio
const server = http.createServer((req, res) => {
    //tipo de respuesta de texto
    res.statusCode=200
    res.setHeader('content.Type', 'text/html')
    res.end('<h1>Hola Mundo!!!</h1>')

})
//donde va a estar escuchando y que va a hacer cuando se escucha
server.listen(PORT, () => {
    console.log(`Servidor escuchando: ${PORT}`)
    //console.log(`Servidor escuchando: `  +PORT)
})
