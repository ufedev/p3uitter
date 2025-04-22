import express from 'express'
import { sequelize } from './config/db.mjs'
import './models/relaciones.mjs'
import { usuarioRutas } from './rutas/usuarios.mjs'
import { postRutas } from './rutas/posts.mjs'

const app = express()

app.use(express.json())

app.use("/api/usuario", usuarioRutas)
app.use('/api/post', postRutas)

/*

/api/post/crear
/api/post/obtener
*/


app.listen(3000, async () => {
    await sequelize.sync({
    })
    console.log('Servidor corriendo en puerto 3000')
})










/*
import { createServer } from 'node:http'

const servidor = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>Hello World</h1>')
}
const server = createServer(servidor)
server.listen(3000)
*/