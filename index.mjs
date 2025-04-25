import cors from 'cors'
import express from 'express'
import { sequelize } from './config/db.mjs'
import './models/relaciones.mjs'
import { usuarioRutas } from './rutas/usuarios.mjs'
// import { postRutas } from './rutas/posts.mjs'
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/usuario", usuarioRutas)
// app.use('/api/post', postRutas)


app.listen(3000, async () => {
    await sequelize.sync({
    })
    console.log('Servidor corriendo en puerto 3000')
})
