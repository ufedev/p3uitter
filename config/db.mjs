import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './base_de_datos.db',
})

// mc = model controller = modelo vista controlador
// ORM = Object Relational Mapping = mapeo objeto relacional
