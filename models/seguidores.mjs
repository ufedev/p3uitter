import { sequelize } from '../config/db.mjs'
import { DataTypes } from 'sequelize'

export const Seguidor = sequelize.define("seguidor",
    {
        UsuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'usuarios',
                key: 'id'
            }
        },
        SeguidorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "usuarios",
                key: 'id'
            }
        }


    },
    {
        timestamps: false,
        // tableName: 'seguidores'
    }
)

