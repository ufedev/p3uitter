import { Router } from 'express'
import { Usuario } from '../models/usuarios.mjs'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import md5 from 'md5'


export const usuarioRutas = Router()

/*
/api/usuario/crear

*/
usuarioRutas.get("/obtener", async (req, res) => {


    const usuarios = await Usuario.findAll()

    res.json(usuarios)

})

//post put patch reciben body en la solicitud
/*
 localhost:54654/api/usuarios/crear
*/
usuarioRutas.post('/crear', async (req, res) => {
    // req = request = solicitud
    // res = response = respuesta
    const body = req.body


    try {
        const { nombre, apellido, dni, email, password, rePassword } = body

        if ([nombre, apellido, dni, email, password, rePassword].includes("")) {
            res.json('Todos los campos son obligatorios')
            return
        }

        if (password !== rePassword) {
            res.json('Las contraseñas no coinciden')
            return
        }

        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password, salt) // 60caracteres siempreee
        const date = new Date()
        const token = md5(date)
        // 32 caracteres

        const nuevoUsuario = await Usuario.create({
            apellido: apellido,
            token: token,
            email: email,
            dni: dni,
            password: passwordHash,
            nombre: nombre
        })

        await nuevoUsuario.save()


        res.json("usuario creado con exito! 👍")
    }
    catch (error) {

        res.json(error.message)
    }

})
