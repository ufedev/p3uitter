import { sequelize } from '../config/db.mjs'
import { Router } from 'express'
import { Usuario } from '../models/usuarios.mjs'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import md5 from 'md5'


export const usuarioRutas = Router()


usuarioRutas.get("/obtener", async (req, res) => {

    const usuarios = await Usuario.findAll()

    res.json(usuarios)

})
usuarioRutas.post('/crear', async (req, res) => {

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
        const passwordHash = await bcrypt.hash(password, salt)
        const token = md5('123456')
        res.json({
            password,
            passwordHash,
            length: passwordHash.length,
            md5: token,
            md5length: token.length
        })


        const nuevoUsuario = await Usuario.create({
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            email: email,
            password: passwordHash
        })

        await nuevoUsuario.save()


        res.json("Uusario creado con exitosidad")
    }
    catch {

        res.json('Ya está registrado el usuario')
    }

})
