const Sequelize = require('sequelize');
const meusequelize = require('../util/database');

const Medico = meusequelize.define('medico', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }, 
  nome: Sequelize.STRING, 
  
  especielidade: Sequelize.STRING,

  contacto: Sequelize.INTEGER
},
{
  freezeTableName: true,
  timestamps: false 
});

module.exports = Medico;