const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
   process.env. DATABASE_NAME, 
   process.env. DATABASE_USERNAME,
   process.env. DATABASE_PASSWORD,
  {
    host: process.env. DATABASE_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
