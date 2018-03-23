const Sequelize = require('sequelize')
const config = require('../config/database')

// Setting up database connection details
const sequelize = new Sequelize(config.database, null, null, {
  host: config.host,
  dialect: 'sqlite',
  storage: './studentmarks.sqlite'
})

// Creating global object
const db = {}

db.users = require('./user')(sequelize, Sequelize)

// Adding sequelize, Sequelize to allow usage in other files
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db