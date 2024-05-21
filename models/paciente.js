const Sequelize = require('sequelize');
const meusequelize = require('../util/database');

const Paciente = meusequelize.define('paciente', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }, 
  nome: Sequelize.STRING, 

  morada: Sequelize.STRING,

  datanascimento: Sequelize.STRING,

  contacto: Sequelize.INTEGER,

  cni: Sequelize.STRING,

  inps: Sequelize.BOOLEAN
},
{
  freezeTableName: true,
  timestamps: false 
});

module.exports = Paciente;