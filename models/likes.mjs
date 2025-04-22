import { sequelize } from '../config/db.mjs'

export const Like = sequelize.define('like', {}, {
    timestamps: false
})