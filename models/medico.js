const Sequelize = require('sequelize');
const meusequelize = require('../util/database');

const Medico = meusequelize.define('medico', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }, 
  nome:{
    type: Sequelize.STRING,
    allowNull: false
  } , 
  
  especialidade:{
    type: Sequelize.STRING,
    allowNull: false
  } ,

  contacto: Sequelize.INTEGER,

  email: Sequelize.STRING,

  password: Sequelize.STRING
},
{
  freezeTableName: true,
  timestamps: false 
});

module.exports = Medico;