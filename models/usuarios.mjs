import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.mjs'

// Definición del modelo de usuario
export const Usuario = sequelize.define("usuario", {
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING(8),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.CHAR(60),
        allowNull: false
    },
    token: {
        type: DataTypes.CHAR(32)
    },
    admin: {
        type: DataTypes.BOOLEAN,
        default: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        default: 0
    }
})



