import { sequelize } from '../config/db.mjs'
import { DataTypes } from 'sequelize'


export const Comentario = sequelize.define("comentario", {
    comentario: {
        type: DataTypes.STRING(160),
        allowNull: false
    }
})