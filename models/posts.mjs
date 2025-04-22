import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.mjs'


export const Post = sequelize.define("post", {
    contenido: {
        type: DataTypes.STRING(160),
        allowNull: false
    }
})