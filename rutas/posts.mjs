import { Router } from 'express'
import { Usuario } from '../models/usuarios.mjs'
import { Post } from '../models/posts.mjs'
import { Like } from '../models/likes.mjs'

export const postRutas = Router()


// RUTAS POST
postRutas.get("/obtener", async (req, res) => {

    try {
        const posts = await Post.findAll()

        res.json(posts)
    } catch (e) {
        console.log(e)
        res.json('Algo paso! y no sé que es')
    }

})
postRutas.post("/crear", async (req, res) => {

    try {
        const body = req.body

        const nuevoPost = await Post.create({
            contenido: body.contenido,
            usuarioId: body.usuarioId
        })
        await nuevoPost.save()
        res.json('Post creado 👍 🔥 💯 🌎')
    } catch {

        res.json("Falta el usuario!")

    }


})
// RUTAS LIKES
postRutas.post("/dar_like", async (req, res) => {
    const body = req.body

    const existeLike = await Like.findOne({
        where: {
            usuarioId: body.usuarioId,
            postId: body.postId
        }
    })

    if (!existeLike) {

        try {
            const like = await Like.create({
                postId: body.postId,
                usuarioId: body.usuarioId
            })

            await like.save()
            res.json('Like dado')
        } catch (e) {
            console.log(e)
            res.json('hubo un error')
        }
        return
    }

    try {
        await existeLike.destroy()
        res.json('Like quitado')
    } catch (e) {
        console.log(e)
        res.json('hubo un error')
    }

})

