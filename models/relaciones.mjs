import { Usuario } from './usuarios.mjs'
import { Seguidor } from './seguidores.mjs'
import { Comentario } from './comentario.mjs'
import { Like } from './likes.mjs'
import { Post } from './posts.mjs'
import { LikeComentario } from './likes_comentarios.mjs'



Post.belongsTo(Usuario, {
    foreignKey: {
        allowNull: false
    }
}) // usuarioId
Usuario.hasMany(Post) // 

Like.belongsTo(Usuario, {
    foreignKey: {
        allowNull: false
    }
})

Like.belongsTo(Post, {
    foreignKey: {
        allowNull: false
    }
})
Post.hasMany(Like)

Comentario.belongsTo(Usuario, {
    foreignKey: {
        allowNull: false
    }
})
Comentario.belongsTo(Post, {
    foreignKey: {
        allowNull: false
    }
})
Post.hasMany(Comentario)
Usuario.hasMany(Comentario)

LikeComentario.belongsTo(Usuario, {
    foreignKey: {
        allowNull: false
    }
})
LikeComentario.belongsTo(Comentario, {
    foreignKey: {
        // name:'ComentarioId'
        allowNull: false
    }
})
Comentario.hasMany(LikeComentario)

// SEGUIDORES

/*
    Seguido y Seguidor
    Usuario    Usuario

*/

Usuario.belongsToMany(Usuario, {
    through: Seguidor,
    foreignKey: 'UsuarioId',
    as: "seguido"
})

Usuario.belongsToMany(Usuario, {
    through: Seguidor,
    foreignKey: 'SeguidorId',
    as: "seguidores"
})

