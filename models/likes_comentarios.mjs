import { sequelize } from '../config/db.mjs'

export const LikeComentario = sequelize.define('like_comentario', {}, {
    timestamps: false
})